/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ComboDataModel
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('ComboDataModel', ['BaseModel', ComboDataModelModel]);

    function ComboDataModelModel(BaseModel) {
        var ComboDataModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.title = this.getValue(obj.title);
            this.extraData = this.getValue(obj.extraData);
        };

        ComboDataModel.prototype = new BaseModel();
        ComboDataModel.prototype.constructor = ComboDataModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ComboDataModel.prototype.mappingInfo = function() {
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
        ComboDataModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        ComboDataModel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        ComboDataModel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * عنوان
         *
         * @return {string}
         */
        ComboDataModel.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        ComboDataModel.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * اطلاعات اضافه
         *
         * @return {string|null}
         */
        ComboDataModel.prototype.getExtraData = function () {
            return this.extraData;
        };
    
        /**
         * Setter for ExtraData
         * 
         * @param {string|null} value 
         */
        ComboDataModel.prototype.setExtraData = function (value) {
            this.extraData = value;
        };
    
        return ComboDataModel;
    }

}(angular));
