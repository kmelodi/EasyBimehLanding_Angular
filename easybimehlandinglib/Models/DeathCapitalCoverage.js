/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of DeathCapitalCoverage
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('DeathCapitalCoverage', ['BaseModel', DeathCapitalCoverageModel]);

    function DeathCapitalCoverageModel(BaseModel) {
        var DeathCapitalCoverage = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.title = this.getValue(obj.title);
            this.extraData = this.getValue(obj.extraData);
        };

        DeathCapitalCoverage.prototype = new BaseModel();
        DeathCapitalCoverage.prototype.constructor = DeathCapitalCoverage;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        DeathCapitalCoverage.prototype.mappingInfo = function() {
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
        DeathCapitalCoverage.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        DeathCapitalCoverage.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        DeathCapitalCoverage.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        DeathCapitalCoverage.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {int} value 
         */
        DeathCapitalCoverage.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        DeathCapitalCoverage.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        DeathCapitalCoverage.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        return DeathCapitalCoverage;
    }

}(angular));
