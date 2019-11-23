/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of InsuranceRiskLevel
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('InsuranceRiskLevel', ['BaseModel', InsuranceRiskLevelModel]);

    function InsuranceRiskLevelModel(BaseModel) {
        var InsuranceRiskLevel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.title = this.getValue(obj.title);
            this.extraData = this.getValue(obj.extraData);
        };

        InsuranceRiskLevel.prototype = new BaseModel();
        InsuranceRiskLevel.prototype.constructor = InsuranceRiskLevel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        InsuranceRiskLevel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'id', realName: 'id' },
                { name: 'title', realName: 'title' },
                { name: 'extraData', realName: 'extraData' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        InsuranceRiskLevel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceRiskLevel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        InsuranceRiskLevel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceRiskLevel.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        InsuranceRiskLevel.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceRiskLevel.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        InsuranceRiskLevel.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        return InsuranceRiskLevel;
    }

}(angular));
