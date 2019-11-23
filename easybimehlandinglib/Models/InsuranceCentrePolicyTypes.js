/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of InsuranceCentrePolicyTypes
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('InsuranceCentrePolicyTypes', ['BaseModel', InsuranceCentrePolicyTypesModel]);

    function InsuranceCentrePolicyTypesModel(BaseModel) {
        var InsuranceCentrePolicyTypes = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.title = this.getValue(obj.title);
            this.iconImage = this.getValue(obj.iconImage);
            this.isActive = this.getValue(obj.isActive);
            this.routingUrl = this.getValue(obj.routingUrl);
            this.displayPriority = this.getValue(obj.displayPriority);
            this.iconPosition = this.getValue(obj.iconPosition);
            this.generalTerms = this.getValue(obj.generalTerms);
        };

        InsuranceCentrePolicyTypes.prototype = new BaseModel();
        InsuranceCentrePolicyTypes.prototype.constructor = InsuranceCentrePolicyTypes;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        InsuranceCentrePolicyTypes.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'id', realName: 'id' },
                { name: 'title', realName: 'title' },
                { name: 'iconImage', realName: 'iconImage' },
                { name: 'isActive', realName: 'isActive' },
                { name: 'routingUrl', realName: 'routingUrl' },
                { name: 'displayPriority', realName: 'displayPriority' },
                { name: 'iconPosition', realName: 'iconPosition' },
                { name: 'generalTerms', realName: 'generalTerms' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        InsuranceCentrePolicyTypes.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceCentrePolicyTypes.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        InsuranceCentrePolicyTypes.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePolicyTypes.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        InsuranceCentrePolicyTypes.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePolicyTypes.prototype.getIconImage = function () {
            return this.iconImage;
        };
    
        /**
         * Setter for IconImage
         * 
         * @param {string} value 
         */
        InsuranceCentrePolicyTypes.prototype.setIconImage = function (value) {
            this.iconImage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        InsuranceCentrePolicyTypes.prototype.getIsActive = function () {
            return this.isActive;
        };
    
        /**
         * Setter for IsActive
         * 
         * @param {bool} value 
         */
        InsuranceCentrePolicyTypes.prototype.setIsActive = function (value) {
            this.isActive = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePolicyTypes.prototype.getRoutingUrl = function () {
            return this.routingUrl;
        };
    
        /**
         * Setter for RoutingUrl
         * 
         * @param {string} value 
         */
        InsuranceCentrePolicyTypes.prototype.setRoutingUrl = function (value) {
            this.routingUrl = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePolicyTypes.prototype.getDisplayPriority = function () {
            return this.displayPriority;
        };
    
        /**
         * Setter for DisplayPriority
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePolicyTypes.prototype.setDisplayPriority = function (value) {
            this.displayPriority = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceCentrePolicyTypes.prototype.getIconPosition = function () {
            return this.iconPosition;
        };
    
        /**
         * Setter for IconPosition
         * 
         * @param {int} value 
         */
        InsuranceCentrePolicyTypes.prototype.setIconPosition = function (value) {
            this.iconPosition = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePolicyTypes.prototype.getGeneralTerms = function () {
            return this.generalTerms;
        };
    
        /**
         * Setter for GeneralTerms
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePolicyTypes.prototype.setGeneralTerms = function (value) {
            this.generalTerms = value;
        };
    
        return InsuranceCentrePolicyTypes;
    }

}(angular));
