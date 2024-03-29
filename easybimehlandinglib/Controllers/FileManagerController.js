/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('EasyBimehLandingLib')
    .factory('FileManagerController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        FileManagerController
    ]);

    function FileManagerController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * آپلود فایل در ایزی بیمه
             * بعد از آپلود، ادرس فایل باید در api های بعدی ارسال شود.
             *
             * @param {string} subDomain دامنه یا زیر دامنه ی مرکز بیمه
             * @param {string} xApiKey کلید اختصاصی ارتباط با سرور
             * @param {string} file فایل ارسالی
             *
             * @return {promise<Base Model Upload>}
             */
            upload: function (subDomain, xApiKey, file) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/FileManager/Upload';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'subDomain': subDomain
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'x-api-key': xApiKey
                };

                // prepare form data
                var _form = {
                    'file': file
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'BaseModelUpload');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
