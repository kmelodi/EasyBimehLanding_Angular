/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of BaseModelDeviceBrandTypes
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('BaseModelDeviceBrandTypes', ['BaseModel', BaseModelDeviceBrandTypesModel]);

    function BaseModelDeviceBrandTypesModel(BaseModel) {
        var BaseModelDeviceBrandTypes = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.isSuccess = this.getValue(obj.isSuccess);
            this.status = this.getValue(obj.status);
            this.message = this.getValue(obj.message);
            this.extraData = this.getValue(obj.extraData);
            this.exception = this.getValue(obj.exception);
        };

        BaseModelDeviceBrandTypes.prototype = new BaseModel();
        BaseModelDeviceBrandTypes.prototype.constructor = BaseModelDeviceBrandTypes;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        BaseModelDeviceBrandTypes.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'isSuccess', realName: 'isSuccess' },
                { name: 'status', realName: 'status' },
                { name: 'message', realName: 'message', array: true, type: 'DeviceBrandTypes' },
                { name: 'extraData', realName: 'extraData' },
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
        BaseModelDeviceBrandTypes.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        BaseModelDeviceBrandTypes.prototype.getIsSuccess = function () {
            return this.isSuccess;
        };
    
        /**
         * Setter for IsSuccess
         * 
         * @param {bool} value 
         */
        BaseModelDeviceBrandTypes.prototype.setIsSuccess = function (value) {
            this.isSuccess = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        BaseModelDeviceBrandTypes.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {int} value 
         */
        BaseModelDeviceBrandTypes.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        BaseModelDeviceBrandTypes.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {array} value 
         */
        BaseModelDeviceBrandTypes.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BaseModelDeviceBrandTypes.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        BaseModelDeviceBrandTypes.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BaseModelDeviceBrandTypes.prototype.getException = function () {
            return this.exception;
        };
    
        /**
         * Setter for Exception
         * 
         * @param {string|null} value 
         */
        BaseModelDeviceBrandTypes.prototype.setException = function (value) {
            this.exception = value;
        };
    
        return BaseModelDeviceBrandTypes;
    }

}(angular));
