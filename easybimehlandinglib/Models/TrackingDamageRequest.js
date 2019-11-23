/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TrackingDamageRequest
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('TrackingDamageRequest', ['BaseModel', TrackingDamageRequestModel]);

    function TrackingDamageRequestModel(BaseModel) {
        var TrackingDamageRequest = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.personalityType = this.getValue(obj.personalityType);
            this.trackingDamageStatus = this.getValue(obj.trackingDamageStatus);
            this.description = this.getValue(obj.description);
            this.insuranceTypeId = this.getValue(obj.insuranceTypeId);
            this.insuranceCompanyId = this.getValue(obj.insuranceCompanyId);
            this.insurancePolicyNumber = this.getValue(obj.insurancePolicyNumber);
            this.damageType = this.getValue(obj.damageType);
            this.name = this.getValue(obj.name);
            this.nationalCode = this.getValue(obj.nationalCode);
            this.mobile = this.getValue(obj.mobile);
            this.insuredProfile = this.getValue(obj.insuredProfile);
            this.subDomain = this.getValue(obj.subDomain);
        };

        TrackingDamageRequest.prototype = new BaseModel();
        TrackingDamageRequest.prototype.constructor = TrackingDamageRequest;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        TrackingDamageRequest.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'personalityType', realName: 'personalityType' },
                {
                    name: 'trackingDamageStatus',
                    realName: 'trackingDamageStatus',
                    array: true,
                    type: 'TrackingDamageStatus',
                },
                { name: 'description', realName: 'description' },
                { name: 'insuranceTypeId', realName: 'insuranceTypeId' },
                { name: 'insuranceCompanyId', realName: 'insuranceCompanyId' },
                { name: 'insurancePolicyNumber', realName: 'insurancePolicyNumber' },
                { name: 'damageType', realName: 'damageType' },
                { name: 'name', realName: 'name' },
                { name: 'nationalCode', realName: 'nationalCode' },
                { name: 'mobile', realName: 'mobile' },
                { name: 'insuredProfile', realName: 'insuredProfile' },
                { name: 'subDomain', realName: 'subDomain' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        TrackingDamageRequest.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        TrackingDamageRequest.prototype.getPersonalityType = function () {
            return this.personalityType;
        };
    
        /**
         * Setter for PersonalityType
         * 
         * @param {int} value 
         */
        TrackingDamageRequest.prototype.setPersonalityType = function (value) {
            this.personalityType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        TrackingDamageRequest.prototype.getTrackingDamageStatus = function () {
            return this.trackingDamageStatus;
        };
    
        /**
         * Setter for TrackingDamageStatus
         * 
         * @param {array} value 
         */
        TrackingDamageRequest.prototype.setTrackingDamageStatus = function (value) {
            this.trackingDamageStatus = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        TrackingDamageRequest.prototype.getInsuranceTypeId = function () {
            return this.insuranceTypeId;
        };
    
        /**
         * Setter for InsuranceTypeId
         * 
         * @param {int} value 
         */
        TrackingDamageRequest.prototype.setInsuranceTypeId = function (value) {
            this.insuranceTypeId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        TrackingDamageRequest.prototype.getInsuranceCompanyId = function () {
            return this.insuranceCompanyId;
        };
    
        /**
         * Setter for InsuranceCompanyId
         * 
         * @param {int} value 
         */
        TrackingDamageRequest.prototype.setInsuranceCompanyId = function (value) {
            this.insuranceCompanyId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getInsurancePolicyNumber = function () {
            return this.insurancePolicyNumber;
        };
    
        /**
         * Setter for InsurancePolicyNumber
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setInsurancePolicyNumber = function (value) {
            this.insurancePolicyNumber = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getDamageType = function () {
            return this.damageType;
        };
    
        /**
         * Setter for DamageType
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setDamageType = function (value) {
            this.damageType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getNationalCode = function () {
            return this.nationalCode;
        };
    
        /**
         * Setter for NationalCode
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setNationalCode = function (value) {
            this.nationalCode = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getMobile = function () {
            return this.mobile;
        };
    
        /**
         * Setter for Mobile
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setMobile = function (value) {
            this.mobile = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getInsuredProfile = function () {
            return this.insuredProfile;
        };
    
        /**
         * Setter for InsuredProfile
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setInsuredProfile = function (value) {
            this.insuredProfile = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        TrackingDamageRequest.prototype.getSubDomain = function () {
            return this.subDomain;
        };
    
        /**
         * Setter for SubDomain
         * 
         * @param {string} value 
         */
        TrackingDamageRequest.prototype.setSubDomain = function (value) {
            this.subDomain = value;
        };
    
        return TrackingDamageRequest;
    }

}(angular));
