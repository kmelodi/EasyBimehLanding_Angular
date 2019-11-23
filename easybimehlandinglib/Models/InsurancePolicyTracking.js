/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of InsurancePolicyTracking
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('InsurancePolicyTracking', ['BaseModel', InsurancePolicyTrackingModel]);

    function InsurancePolicyTrackingModel(BaseModel) {
        var InsurancePolicyTracking = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.aliasName = this.getValue(obj.aliasName);
            this.status = this.getValue(obj.status);
            this.createOnPersianDate = this.getValue(obj.createOnPersianDate);
            this.centerName = this.getValue(obj.centerName);
            this.insurancePolicyType = this.getValue(obj.insurancePolicyType);
            this.insuranceType = this.getValue(obj.insuranceType);
            this.price = this.getValue(obj.price);
            this.paymented = this.getValue(obj.paymented);
        };

        InsurancePolicyTracking.prototype = new BaseModel();
        InsurancePolicyTracking.prototype.constructor = InsurancePolicyTracking;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        InsurancePolicyTracking.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'id', realName: 'id' },
                { name: 'aliasName', realName: 'aliasName' },
                { name: 'status', realName: 'status' },
                { name: 'createOnPersianDate', realName: 'createOnPersianDate' },
                { name: 'centerName', realName: 'centerName' },
                { name: 'insurancePolicyType', realName: 'insurancePolicyType' },
                { name: 'insuranceType', realName: 'insuranceType' },
                { name: 'price', realName: 'price' },
                { name: 'paymented', realName: 'paymented' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        InsurancePolicyTracking.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsurancePolicyTracking.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        InsurancePolicyTracking.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsurancePolicyTracking.prototype.getAliasName = function () {
            return this.aliasName;
        };
    
        /**
         * Setter for AliasName
         * 
         * @param {string} value 
         */
        InsurancePolicyTracking.prototype.setAliasName = function (value) {
            this.aliasName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsurancePolicyTracking.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {string} value 
         */
        InsurancePolicyTracking.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsurancePolicyTracking.prototype.getCreateOnPersianDate = function () {
            return this.createOnPersianDate;
        };
    
        /**
         * Setter for CreateOnPersianDate
         * 
         * @param {string} value 
         */
        InsurancePolicyTracking.prototype.setCreateOnPersianDate = function (value) {
            this.createOnPersianDate = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsurancePolicyTracking.prototype.getCenterName = function () {
            return this.centerName;
        };
    
        /**
         * Setter for CenterName
         * 
         * @param {string} value 
         */
        InsurancePolicyTracking.prototype.setCenterName = function (value) {
            this.centerName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsurancePolicyTracking.prototype.getInsurancePolicyType = function () {
            return this.insurancePolicyType;
        };
    
        /**
         * Setter for InsurancePolicyType
         * 
         * @param {int} value 
         */
        InsurancePolicyTracking.prototype.setInsurancePolicyType = function (value) {
            this.insurancePolicyType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsurancePolicyTracking.prototype.getInsuranceType = function () {
            return this.insuranceType;
        };
    
        /**
         * Setter for InsuranceType
         * 
         * @param {string} value 
         */
        InsurancePolicyTracking.prototype.setInsuranceType = function (value) {
            this.insuranceType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsurancePolicyTracking.prototype.getPrice = function () {
            return this.price;
        };
    
        /**
         * Setter for Price
         * 
         * @param {int} value 
         */
        InsurancePolicyTracking.prototype.setPrice = function (value) {
            this.price = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsurancePolicyTracking.prototype.getPaymented = function () {
            return this.paymented;
        };
    
        /**
         * Setter for Paymented
         * 
         * @param {string|null} value 
         */
        InsurancePolicyTracking.prototype.setPaymented = function (value) {
            this.paymented = value;
        };
    
        return InsurancePolicyTracking;
    }

}(angular));