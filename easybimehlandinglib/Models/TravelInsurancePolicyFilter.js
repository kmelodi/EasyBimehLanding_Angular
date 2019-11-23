/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TravelInsurancePolicyFilter
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('TravelInsurancePolicyFilter', ['BaseModel', TravelInsurancePolicyFilterModel]);

    function TravelInsurancePolicyFilterModel(BaseModel) {
        var TravelInsurancePolicyFilter = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.zoneIds = this.getValue(obj.zoneIds);
            this.travelRatePlanId = this.getValue(obj.travelRatePlanId);
            this.travelInsurancePolicyExtendAges = this.getValue(obj.travelInsurancePolicyExtendAges);
            this.travelDurationParam = this.getValue(obj.travelDurationParam);
            this.birthDatePersian = this.getValue(obj.birthDatePersian);
            this.insuranceExtraCoverageIds = this.getValue(obj.insuranceExtraCoverageIds);
            this.policyTermId = this.getValue(obj.policyTermId);
            this.insuranceCentreSubDomainName = this.getValue(obj.insuranceCentreSubDomainName);
            this.insuranceCentreId = this.getValue(obj.insuranceCentreId);
            this.insuranceCompanyId = this.getValue(obj.insuranceCompanyId);
            this.isSearchQuery = this.getValue(obj.isSearchQuery);
            this.giftCode = this.getValue(obj.giftCode);
            this.customerUserId = this.getValue(obj.customerUserId);
        };

        TravelInsurancePolicyFilter.prototype = new BaseModel();
        TravelInsurancePolicyFilter.prototype.constructor = TravelInsurancePolicyFilter;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        TravelInsurancePolicyFilter.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'zoneIds', realName: 'zoneIds' },
                { name: 'travelRatePlanId', realName: 'travelRatePlanId' },
                { name: 'travelInsurancePolicyExtendAges', realName: 'travelInsurancePolicyExtendAges' },
                { name: 'travelDurationParam', realName: 'travelDurationParam' },
                { name: 'birthDatePersian', realName: 'birthDatePersian' },
                { name: 'insuranceExtraCoverageIds', realName: 'insuranceExtraCoverageIds' },
                { name: 'policyTermId', realName: 'policyTermId' },
                { name: 'insuranceCentreSubDomainName', realName: 'insuranceCentreSubDomainName' },
                { name: 'insuranceCentreId', realName: 'insuranceCentreId' },
                { name: 'insuranceCompanyId', realName: 'insuranceCompanyId' },
                { name: 'isSearchQuery', realName: 'isSearchQuery' },
                { name: 'giftCode', realName: 'giftCode' },
                { name: 'customerUserId', realName: 'customerUserId' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        TravelInsurancePolicyFilter.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getZoneIds = function () {
            return this.zoneIds;
        };
    
        /**
         * Setter for ZoneIds
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setZoneIds = function (value) {
            this.zoneIds = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getTravelRatePlanId = function () {
            return this.travelRatePlanId;
        };
    
        /**
         * Setter for TravelRatePlanId
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setTravelRatePlanId = function (value) {
            this.travelRatePlanId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getTravelInsurancePolicyExtendAges = function () {
            return this.travelInsurancePolicyExtendAges;
        };
    
        /**
         * Setter for TravelInsurancePolicyExtendAges
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setTravelInsurancePolicyExtendAges = function (value) {
            this.travelInsurancePolicyExtendAges = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getTravelDurationParam = function () {
            return this.travelDurationParam;
        };
    
        /**
         * Setter for TravelDurationParam
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setTravelDurationParam = function (value) {
            this.travelDurationParam = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getBirthDatePersian = function () {
            return this.birthDatePersian;
        };
    
        /**
         * Setter for BirthDatePersian
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setBirthDatePersian = function (value) {
            this.birthDatePersian = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getInsuranceExtraCoverageIds = function () {
            return this.insuranceExtraCoverageIds;
        };
    
        /**
         * Setter for InsuranceExtraCoverageIds
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setInsuranceExtraCoverageIds = function (value) {
            this.insuranceExtraCoverageIds = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getPolicyTermId = function () {
            return this.policyTermId;
        };
    
        /**
         * Setter for PolicyTermId
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setPolicyTermId = function (value) {
            this.policyTermId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getInsuranceCentreSubDomainName = function () {
            return this.insuranceCentreSubDomainName;
        };
    
        /**
         * Setter for InsuranceCentreSubDomainName
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setInsuranceCentreSubDomainName = function (value) {
            this.insuranceCentreSubDomainName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getInsuranceCentreId = function () {
            return this.insuranceCentreId;
        };
    
        /**
         * Setter for InsuranceCentreId
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setInsuranceCentreId = function (value) {
            this.insuranceCentreId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getInsuranceCompanyId = function () {
            return this.insuranceCompanyId;
        };
    
        /**
         * Setter for InsuranceCompanyId
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setInsuranceCompanyId = function (value) {
            this.insuranceCompanyId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        TravelInsurancePolicyFilter.prototype.getIsSearchQuery = function () {
            return this.isSearchQuery;
        };
    
        /**
         * Setter for IsSearchQuery
         * 
         * @param {bool} value 
         */
        TravelInsurancePolicyFilter.prototype.setIsSearchQuery = function (value) {
            this.isSearchQuery = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getGiftCode = function () {
            return this.giftCode;
        };
    
        /**
         * Setter for GiftCode
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setGiftCode = function (value) {
            this.giftCode = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        TravelInsurancePolicyFilter.prototype.getCustomerUserId = function () {
            return this.customerUserId;
        };
    
        /**
         * Setter for CustomerUserId
         * 
         * @param {string|null} value 
         */
        TravelInsurancePolicyFilter.prototype.setCustomerUserId = function (value) {
            this.customerUserId = value;
        };
    
        return TravelInsurancePolicyFilter;
    }

}(angular));