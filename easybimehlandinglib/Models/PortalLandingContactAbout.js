/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of PortalLandingContactAbout
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('PortalLandingContactAbout', ['BaseModel', PortalLandingContactAboutModel]);

    function PortalLandingContactAboutModel(BaseModel) {
        var PortalLandingContactAbout = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.licensed = this.getValue(obj.licensed);
            this.insuranceGroup = this.getValue(obj.insuranceGroup);
            this.insuranceType = this.getValue(obj.insuranceType);
            this.summaryCards = this.getValue(obj.summaryCards);
            this.summaryNotics = this.getValue(obj.summaryNotics);
            this.imageAlbums = this.getValue(obj.imageAlbums);
            this.videoGalleries = this.getValue(obj.videoGalleries);
            this.insuranceCentre = this.getValue(obj.insuranceCentre);
            this.insuranceCentrePortal = this.getValue(obj.insuranceCentrePortal);
        };

        PortalLandingContactAbout.prototype = new BaseModel();
        PortalLandingContactAbout.prototype.constructor = PortalLandingContactAbout;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        PortalLandingContactAbout.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'licensed', realName: 'licensed' },
                { name: 'insuranceGroup', realName: 'insuranceGroup', array: true },
                { name: 'insuranceType', realName: 'insuranceType', array: true },
                { name: 'summaryCards', realName: 'summaryCards', array: true },
                { name: 'summaryNotics', realName: 'summaryNotics', array: true },
                { name: 'imageAlbums', realName: 'imageAlbums', array: true },
                { name: 'videoGalleries', realName: 'videoGalleries', array: true },
                { name: 'insuranceCentre', realName: 'insuranceCentre', type: 'InsuranceCentreData' },
                { name: 'insuranceCentrePortal', realName: 'insuranceCentrePortal', type: 'InsuranceCentrePortal' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        PortalLandingContactAbout.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        PortalLandingContactAbout.prototype.getLicensed = function () {
            return this.licensed;
        };
    
        /**
         * Setter for Licensed
         * 
         * @param {bool} value 
         */
        PortalLandingContactAbout.prototype.setLicensed = function (value) {
            this.licensed = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        PortalLandingContactAbout.prototype.getInsuranceGroup = function () {
            return this.insuranceGroup;
        };
    
        /**
         * Setter for InsuranceGroup
         * 
         * @param {array} value 
         */
        PortalLandingContactAbout.prototype.setInsuranceGroup = function (value) {
            this.insuranceGroup = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        PortalLandingContactAbout.prototype.getInsuranceType = function () {
            return this.insuranceType;
        };
    
        /**
         * Setter for InsuranceType
         * 
         * @param {array} value 
         */
        PortalLandingContactAbout.prototype.setInsuranceType = function (value) {
            this.insuranceType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        PortalLandingContactAbout.prototype.getSummaryCards = function () {
            return this.summaryCards;
        };
    
        /**
         * Setter for SummaryCards
         * 
         * @param {array} value 
         */
        PortalLandingContactAbout.prototype.setSummaryCards = function (value) {
            this.summaryCards = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        PortalLandingContactAbout.prototype.getSummaryNotics = function () {
            return this.summaryNotics;
        };
    
        /**
         * Setter for SummaryNotics
         * 
         * @param {array} value 
         */
        PortalLandingContactAbout.prototype.setSummaryNotics = function (value) {
            this.summaryNotics = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        PortalLandingContactAbout.prototype.getImageAlbums = function () {
            return this.imageAlbums;
        };
    
        /**
         * Setter for ImageAlbums
         * 
         * @param {array} value 
         */
        PortalLandingContactAbout.prototype.setImageAlbums = function (value) {
            this.imageAlbums = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        PortalLandingContactAbout.prototype.getVideoGalleries = function () {
            return this.videoGalleries;
        };
    
        /**
         * Setter for VideoGalleries
         * 
         * @param {array} value 
         */
        PortalLandingContactAbout.prototype.setVideoGalleries = function (value) {
            this.videoGalleries = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {InsuranceCentreData}
         */
        PortalLandingContactAbout.prototype.getInsuranceCentre = function () {
            return this.insuranceCentre;
        };
    
        /**
         * Setter for InsuranceCentre
         * 
         * @param {InsuranceCentreData} value 
         */
        PortalLandingContactAbout.prototype.setInsuranceCentre = function (value) {
            this.insuranceCentre = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {InsuranceCentrePortal}
         */
        PortalLandingContactAbout.prototype.getInsuranceCentrePortal = function () {
            return this.insuranceCentrePortal;
        };
    
        /**
         * Setter for InsuranceCentrePortal
         * 
         * @param {InsuranceCentrePortal} value 
         */
        PortalLandingContactAbout.prototype.setInsuranceCentrePortal = function (value) {
            this.insuranceCentrePortal = value;
        };
    
        return PortalLandingContactAbout;
    }

}(angular));
