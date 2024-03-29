/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of DamageType
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('DamageType', ['BaseModel', DamageTypeModel]);

    function DamageTypeModel(BaseModel) {
        var DamageType = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.title = this.getValue(obj.title);
            this.sortPriority = this.getValue(obj.sortPriority);
            this.createOn = this.getValue(obj.createOn);
            this.updateOn = this.getValue(obj.updateOn);
            this.createdBy = this.getValue(obj.createdBy);
            this.updatedBy = this.getValue(obj.updatedBy);
            this.createOnPersianDate = this.getValue(obj.createOnPersianDate);
            this.updateOnPersianDate = this.getValue(obj.updateOnPersianDate);
        };

        DamageType.prototype = new BaseModel();
        DamageType.prototype.constructor = DamageType;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        DamageType.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'id', realName: 'id' },
                { name: 'title', realName: 'title' },
                { name: 'sortPriority', realName: 'sortPriority' },
                { name: 'createOn', realName: 'createOn' },
                { name: 'updateOn', realName: 'updateOn' },
                { name: 'createdBy', realName: 'createdBy' },
                { name: 'updatedBy', realName: 'updatedBy' },
                { name: 'createOnPersianDate', realName: 'createOnPersianDate' },
                { name: 'updateOnPersianDate', realName: 'updateOnPersianDate' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        DamageType.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        DamageType.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        DamageType.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        DamageType.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        DamageType.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        DamageType.prototype.getSortPriority = function () {
            return this.sortPriority;
        };
    
        /**
         * Setter for SortPriority
         * 
         * @param {string|null} value 
         */
        DamageType.prototype.setSortPriority = function (value) {
            this.sortPriority = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        DamageType.prototype.getCreateOn = function () {
            return this.createOn;
        };
    
        /**
         * Setter for CreateOn
         * 
         * @param {string} value 
         */
        DamageType.prototype.setCreateOn = function (value) {
            this.createOn = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        DamageType.prototype.getUpdateOn = function () {
            return this.updateOn;
        };
    
        /**
         * Setter for UpdateOn
         * 
         * @param {string} value 
         */
        DamageType.prototype.setUpdateOn = function (value) {
            this.updateOn = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        DamageType.prototype.getCreatedBy = function () {
            return this.createdBy;
        };
    
        /**
         * Setter for CreatedBy
         * 
         * @param {string} value 
         */
        DamageType.prototype.setCreatedBy = function (value) {
            this.createdBy = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        DamageType.prototype.getUpdatedBy = function () {
            return this.updatedBy;
        };
    
        /**
         * Setter for UpdatedBy
         * 
         * @param {string|null} value 
         */
        DamageType.prototype.setUpdatedBy = function (value) {
            this.updatedBy = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        DamageType.prototype.getCreateOnPersianDate = function () {
            return this.createOnPersianDate;
        };
    
        /**
         * Setter for CreateOnPersianDate
         * 
         * @param {string} value 
         */
        DamageType.prototype.setCreateOnPersianDate = function (value) {
            this.createOnPersianDate = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        DamageType.prototype.getUpdateOnPersianDate = function () {
            return this.updateOnPersianDate;
        };
    
        /**
         * Setter for UpdateOnPersianDate
         * 
         * @param {string} value 
         */
        DamageType.prototype.setUpdateOnPersianDate = function (value) {
            this.updateOnPersianDate = value;
        };
    
        return DamageType;
    }

}(angular));
