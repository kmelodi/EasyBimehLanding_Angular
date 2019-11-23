/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SendSmsToken
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('SendSmsToken', ['BaseModel', SendSmsTokenModel]);

    function SendSmsTokenModel(BaseModel) {
        var SendSmsToken = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.isSuccess = this.getValue(obj.isSuccess);
            this.status = this.getValue(obj.status);
            this.message = this.getValue(obj.message);
            this.extraData = this.getValue(obj.extraData);
            this.exception = this.getValue(obj.exception);
        };

        SendSmsToken.prototype = new BaseModel();
        SendSmsToken.prototype.constructor = SendSmsToken;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        SendSmsToken.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'isSuccess', realName: 'isSuccess' },
                { name: 'status', realName: 'status' },
                { name: 'message', realName: 'message' },
                { name: 'extraData', realName: 'extraData', type: 'ExtraData' },
                { name: 'exception', realName: 'exception' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        SendSmsToken.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        SendSmsToken.prototype.getIsSuccess = function () {
            return this.isSuccess;
        };
    
        /**
         * Setter for IsSuccess
         * 
         * @param {bool} value 
         */
        SendSmsToken.prototype.setIsSuccess = function (value) {
            this.isSuccess = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        SendSmsToken.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {int} value 
         */
        SendSmsToken.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        SendSmsToken.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {string} value 
         */
        SendSmsToken.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ExtraData}
         */
        SendSmsToken.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {ExtraData} value 
         */
        SendSmsToken.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        SendSmsToken.prototype.getException = function () {
            return this.exception;
        };
    
        /**
         * Setter for Exception
         * 
         * @param {string|null} value 
         */
        SendSmsToken.prototype.setException = function (value) {
            this.exception = value;
        };
    
        return SendSmsToken;
    }

}(angular));