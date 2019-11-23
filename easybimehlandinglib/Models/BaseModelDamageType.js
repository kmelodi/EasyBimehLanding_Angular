/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of BaseModelDamageType
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('BaseModelDamageType', ['BaseModel', BaseModelDamageTypeModel]);

    function BaseModelDamageTypeModel(BaseModel) {
        var BaseModelDamageType = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.isSuccess = this.getValue(obj.isSuccess);
            this.status = this.getValue(obj.status);
            this.message = this.getValue(obj.message);
            this.extraData = this.getValue(obj.extraData);
            this.exception = this.getValue(obj.exception);
        };

        BaseModelDamageType.prototype = new BaseModel();
        BaseModelDamageType.prototype.constructor = BaseModelDamageType;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        BaseModelDamageType.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'isSuccess', realName: 'isSuccess' },
                { name: 'status', realName: 'status' },
                { name: 'message', realName: 'message', array: true, type: 'DamageType' },
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
        BaseModelDamageType.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        BaseModelDamageType.prototype.getIsSuccess = function () {
            return this.isSuccess;
        };
    
        /**
         * Setter for IsSuccess
         * 
         * @param {bool} value 
         */
        BaseModelDamageType.prototype.setIsSuccess = function (value) {
            this.isSuccess = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        BaseModelDamageType.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {int} value 
         */
        BaseModelDamageType.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        BaseModelDamageType.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {array} value 
         */
        BaseModelDamageType.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BaseModelDamageType.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        BaseModelDamageType.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BaseModelDamageType.prototype.getException = function () {
            return this.exception;
        };
    
        /**
         * Setter for Exception
         * 
         * @param {string|null} value 
         */
        BaseModelDamageType.prototype.setException = function (value) {
            this.exception = value;
        };
    
        return BaseModelDamageType;
    }

}(angular));
