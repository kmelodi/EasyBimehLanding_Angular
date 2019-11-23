/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of StatusStatusCollections
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('StatusStatusCollections', ['BaseModel', StatusStatusCollectionsModel]);

    function StatusStatusCollectionsModel(BaseModel) {
        var StatusStatusCollections = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.parentId = this.getValue(obj.parentId);
            this.statusType = this.getValue(obj.statusType);
            this.title = this.getValue(obj.title);
            this.iconName = this.getValue(obj.iconName);
            this.description = this.getValue(obj.description);
            this.editable = this.getValue(obj.editable);
        };

        StatusStatusCollections.prototype = new BaseModel();
        StatusStatusCollections.prototype.constructor = StatusStatusCollections;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        StatusStatusCollections.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'id', realName: 'id' },
                { name: 'parentId', realName: 'parentId' },
                { name: 'statusType', realName: 'statusType' },
                { name: 'title', realName: 'title' },
                { name: 'iconName', realName: 'iconName' },
                { name: 'description', realName: 'description' },
                { name: 'editable', realName: 'editable' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        StatusStatusCollections.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        StatusStatusCollections.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {string} value 
         */
        StatusStatusCollections.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        StatusStatusCollections.prototype.getParentId = function () {
            return this.parentId;
        };
    
        /**
         * Setter for ParentId
         * 
         * @param {string|null} value 
         */
        StatusStatusCollections.prototype.setParentId = function (value) {
            this.parentId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        StatusStatusCollections.prototype.getStatusType = function () {
            return this.statusType;
        };
    
        /**
         * Setter for StatusType
         * 
         * @param {int} value 
         */
        StatusStatusCollections.prototype.setStatusType = function (value) {
            this.statusType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        StatusStatusCollections.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        StatusStatusCollections.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        StatusStatusCollections.prototype.getIconName = function () {
            return this.iconName;
        };
    
        /**
         * Setter for IconName
         * 
         * @param {string|null} value 
         */
        StatusStatusCollections.prototype.setIconName = function (value) {
            this.iconName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        StatusStatusCollections.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string|null} value 
         */
        StatusStatusCollections.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        StatusStatusCollections.prototype.getEditable = function () {
            return this.editable;
        };
    
        /**
         * Setter for Editable
         * 
         * @param {bool} value 
         */
        StatusStatusCollections.prototype.setEditable = function (value) {
            this.editable = value;
        };
    
        return StatusStatusCollections;
    }

}(angular));
