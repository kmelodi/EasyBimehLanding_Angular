/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of BaseModelStatusStatusCollections
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('BaseModelStatusStatusCollections', ['BaseModel', BaseModelStatusStatusCollectionsModel]);

    function BaseModelStatusStatusCollectionsModel(BaseModel) {
        var BaseModelStatusStatusCollections = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.isSuccess = this.getValue(obj.isSuccess);
            this.status = this.getValue(obj.status);
            this.message = this.getValue(obj.message);
            this.extraData = this.getValue(obj.extraData);
            this.exception = this.getValue(obj.exception);
        };

        BaseModelStatusStatusCollections.prototype = new BaseModel();
        BaseModelStatusStatusCollections.prototype.constructor = BaseModelStatusStatusCollections;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        BaseModelStatusStatusCollections.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'isSuccess', realName: 'isSuccess' },
                { name: 'status', realName: 'status' },
                { name: 'message', realName: 'message', array: true, type: 'StatusStatusCollections' },
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
        BaseModelStatusStatusCollections.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        BaseModelStatusStatusCollections.prototype.getIsSuccess = function () {
            return this.isSuccess;
        };
    
        /**
         * Setter for IsSuccess
         * 
         * @param {bool} value 
         */
        BaseModelStatusStatusCollections.prototype.setIsSuccess = function (value) {
            this.isSuccess = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        BaseModelStatusStatusCollections.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {int} value 
         */
        BaseModelStatusStatusCollections.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        BaseModelStatusStatusCollections.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {array} value 
         */
        BaseModelStatusStatusCollections.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BaseModelStatusStatusCollections.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        BaseModelStatusStatusCollections.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        BaseModelStatusStatusCollections.prototype.getException = function () {
            return this.exception;
        };
    
        /**
         * Setter for Exception
         * 
         * @param {string|null} value 
         */
        BaseModelStatusStatusCollections.prototype.setException = function (value) {
            this.exception = value;
        };
    
        return BaseModelStatusStatusCollections;
    }

}(angular));
