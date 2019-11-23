/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('EasyBimehLandingLib')
    .factory('ComboDataController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        ComboDataController
    ]);

    function ComboDataController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * دریافت لیست نوع خسارت
             *
             * @param {string} xApiKey کلید اختصاصی ارتباط با سرور
             *
             * @return {promise<Base Model DamageType>}
             */
            getDamageType: function (xApiKey) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/DamageType';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'x-api-key': xApiKey
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'BaseModelDamageType');
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
            },
            /**
             * دریافت لیست نوع بیمه نامه
             *
             * @param {string} subDomain دامنه یا زیر دامنه ی مرکز بیمه
             * @param {bool} issueInsurance دریافت بیمه نامه های قابل صدور
             * @param {string} xApiKey کلید اختصاصی ارتباط با سرور
             *
             * @return {promise<InsuranceTypes>}
             */
            getInsuranceTypes: function (subDomain, issueInsurance, xApiKey) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/ComboData/InsuranceTypes';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'subDomain': subDomain,
                    'issueInsurance': issueInsurance
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'x-api-key': xApiKey
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'InsuranceTypes');
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
            },
            /**
             * دریافت لیست شرکت های بیمه
             *
             * @param {string} subDomain دامنه یا زیر دامنه ی مرکز بیمه
             * @param {int} insuranceTypeId شناسه ی نوع بیمه نامه
             * @param {string} xApiKey کلید اختصاصی ارتباط با سرور
             *
             * @return {promise<InsuranceCompanies>}
             */
            getInsuranceCompanies: function (subDomain, insuranceTypeId, xApiKey) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/ComboData/InsuranceCompanies';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'subDomain': subDomain,
                    'insuranceTypeId': insuranceTypeId
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'x-api-key': xApiKey
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'InsuranceCompanies');
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
