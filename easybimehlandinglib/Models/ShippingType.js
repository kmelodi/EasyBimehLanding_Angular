/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ShippingType
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('ShippingType', ['BaseModel', ShippingTypeModel]);

    function ShippingTypeModel(BaseModel) {
        var ShippingType = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.title = this.getValue(obj.title);
            this.extraData = this.getValue(obj.extraData);
        };

        ShippingType.prototype = new BaseModel();
        ShippingType.prototype.constructor = ShippingType;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ShippingType.prototype.mappingInfo = function() {
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
        ShippingType.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        ShippingType.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        ShippingType.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        ShippingType.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        ShippingType.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ShippingType.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        ShippingType.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        return ShippingType;
    }

}(angular));
