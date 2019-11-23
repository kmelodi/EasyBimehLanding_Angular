/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of BaseModelSpecialPlan
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('BaseModelSpecialPlan', ['BaseModel', BaseModelSpecialPlanModel]);

    function BaseModelSpecialPlanModel(BaseModel) {
        var BaseModelSpecialPlan = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.isSuccess = this.getValue(obj.isSuccess);
            this.status = this.getValue(obj.status);
            this.message = this.getValue(obj.message);
            this.extraData = this.getValue(obj.extraData);
            this.exception = this.getValue(obj.exception);
        };

        BaseModelSpecialPlan.prototype = new BaseModel();
        BaseModelSpecialPlan.prototype.constructor = BaseModelSpecialPlan;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        BaseModelSpecialPlan.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'isSuccess', realName: 'isSuccess' },
                { name: 'status', realName: 'status' },
                { name: 'message', realName: 'message', array: true, type: 'SpecialPlan' },
                { name: 'extraData', realName: 'extraData', type: 'ExtraDataBaseModelSpecialPlan' },
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
        BaseModelSpecialPlan.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        BaseModelSpecialPlan.prototype.getIsSuccess = function () {
            return this.isSuccess;
        };
    
        /**
         * Setter for IsSuccess
         * 
         * @param {bool} value 
         */
        BaseModelSpecialPlan.prototype.setIsSuccess = function (value) {
            this.isSuccess = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        BaseModelSpecialPlan.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {int} value 
         */
        BaseModelSpecialPlan.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        BaseModelSpecialPlan.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {array} value 
         */
        BaseModelSpecialPlan.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ExtraDataBaseModelSpecialPlan}
         */
        BaseModelSpecialPlan.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {ExtraDataBaseModelSpecialPlan} value 
         */
        BaseModelSpecialPlan.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BaseModelSpecialPlan.prototype.getException = function () {
            return this.exception;
        };
    
        /**
         * Setter for Exception
         * 
         * @param {string|null} value 
         */
        BaseModelSpecialPlan.prototype.setException = function (value) {
            this.exception = value;
        };
    
        return BaseModelSpecialPlan;
    }

}(angular));
