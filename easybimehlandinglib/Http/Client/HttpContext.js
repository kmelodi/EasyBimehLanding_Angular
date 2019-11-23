?/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of HttpContext.
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('HttpContext', [HttpContextService]);

    function HttpContextService() {
        return function HttpContext() {
            this.request = null;
            this.response = null;
        };
    }

}(angular));
