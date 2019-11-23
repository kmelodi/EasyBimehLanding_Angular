/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of OtherInsuranceTypes
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('OtherInsuranceTypes', ['BaseModel', OtherInsuranceTypesModel]);

    function OtherInsuranceTypesModel(BaseModel) {
        var OtherInsuranceTypes = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.isSuccess = this.getValue(obj.isSuccess);
            this.status = this.getValue(obj.status);
            this.message = this.getValue(obj.message);
            this.extraData = this.getValue(obj.extraData);
            this.exception = this.getValue(obj.exception);
        };

        OtherInsuranceTypes.prototype = new BaseModel();
        OtherInsuranceTypes.prototype.constructor = OtherInsuranceTypes;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        OtherInsuranceTypes.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'isSuccess', realName: 'isSuccess' },
                { name: 'status', realName: 'status' },
                { name: 'message', realName: 'message', array: true, type: 'ComboDataModel' },
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
        OtherInsuranceTypes.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        OtherInsuranceTypes.prototype.getIsSuccess = function () {
            return this.isSuccess;
        };
    
        /**
         * Setter for IsSuccess
         * 
         * @param {bool} value 
         */
        OtherInsuranceTypes.prototype.setIsSuccess = function (value) {
            this.isSuccess = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        OtherInsuranceTypes.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {int} value 
         */
        OtherInsuranceTypes.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        OtherInsuranceTypes.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {array} value 
         */
        OtherInsuranceTypes.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OtherInsuranceTypes.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        OtherInsuranceTypes.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OtherInsuranceTypes.prototype.getException = function () {
            return this.exception;
        };
    
        /**
         * Setter for Exception
         * 
         * @param {string|null} value 
         */
        OtherInsuranceTypes.prototype.setException = function (value) {
            this.exception = value;
        };
    
        return OtherInsuranceTypes;
    }

}(angular));
