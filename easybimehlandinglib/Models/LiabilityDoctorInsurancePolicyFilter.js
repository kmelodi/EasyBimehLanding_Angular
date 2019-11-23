/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of LiabilityDoctorInsurancePolicyFilter
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('LiabilityDoctorInsurancePolicyFilter', ['BaseModel', LiabilityDoctorInsurancePolicyFilterModel]);

    function LiabilityDoctorInsurancePolicyFilterModel(BaseModel) {
        var LiabilityDoctorInsurancePolicyFilter = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.expertiseParamId = this.getValue(obj.expertiseParamId);
            this.isResident = this.getValue(obj.isResident);
            this.isStudent = this.getValue(obj.isStudent);
            this.riskLevelId = this.getValue(obj.riskLevelId);
            this.activityAreaParamId = this.getValue(obj.activityAreaParamId);
            this.commitmentCeilingParamId = this.getValue(obj.commitmentCeilingParamId);
            this.insuranceExtraCoverageIds = this.getValue(obj.insuranceExtraCoverageIds);
            this.policyTermId = this.getValue(obj.policyTermId);
            this.insuranceCentreSubDomainName = this.getValue(obj.insuranceCentreSubDomainName);
            this.insuranceCentreId = this.getValue(obj.insuranceCentreId);
            this.insuranceCompanyId = this.getValue(obj.insuranceCompanyId);
            this.isSearchQuery = this.getValue(obj.isSearchQuery);
            this.giftCode = this.getValue(obj.giftCode);
            this.customerUserId = this.getValue(obj.customerUserId);
        };

        LiabilityDoctorInsurancePolicyFilter.prototype = new BaseModel();
        LiabilityDoctorInsurancePolicyFilter.prototype.constructor = LiabilityDoctorInsurancePolicyFilter;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'expertiseParamId', realName: 'expertiseParamId' },
                { name: 'isResident', realName: 'isResident' },
                { name: 'isStudent', realName: 'isStudent' },
                { name: 'riskLevelId', realName: 'riskLevelId' },
                { name: 'activityAreaParamId', realName: 'activityAreaParamId' },
                { name: 'commitmentCeilingParamId', realName: 'commitmentCeilingParamId' },
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
        LiabilityDoctorInsurancePolicyFilter.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getExpertiseParamId = function () {
            return this.expertiseParamId;
        };
    
        /**
         * Setter for ExpertiseParamId
         * 
         * @param {int} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setExpertiseParamId = function (value) {
            this.expertiseParamId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getIsResident = function () {
            return this.isResident;
        };
    
        /**
         * Setter for IsResident
         * 
         * @param {bool} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setIsResident = function (value) {
            this.isResident = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getIsStudent = function () {
            return this.isStudent;
        };
    
        /**
         * Setter for IsStudent
         * 
         * @param {bool} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setIsStudent = function (value) {
            this.isStudent = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getRiskLevelId = function () {
            return this.riskLevelId;
        };
    
        /**
         * Setter for RiskLevelId
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setRiskLevelId = function (value) {
            this.riskLevelId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getActivityAreaParamId = function () {
            return this.activityAreaParamId;
        };
    
        /**
         * Setter for ActivityAreaParamId
         * 
         * @param {int} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setActivityAreaParamId = function (value) {
            this.activityAreaParamId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getCommitmentCeilingParamId = function () {
            return this.commitmentCeilingParamId;
        };
    
        /**
         * Setter for CommitmentCeilingParamId
         * 
         * @param {int} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setCommitmentCeilingParamId = function (value) {
            this.commitmentCeilingParamId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getInsuranceExtraCoverageIds = function () {
            return this.insuranceExtraCoverageIds;
        };
    
        /**
         * Setter for InsuranceExtraCoverageIds
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setInsuranceExtraCoverageIds = function (value) {
            this.insuranceExtraCoverageIds = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getPolicyTermId = function () {
            return this.policyTermId;
        };
    
        /**
         * Setter for PolicyTermId
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setPolicyTermId = function (value) {
            this.policyTermId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getInsuranceCentreSubDomainName = function () {
            return this.insuranceCentreSubDomainName;
        };
    
        /**
         * Setter for InsuranceCentreSubDomainName
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setInsuranceCentreSubDomainName = function (value) {
            this.insuranceCentreSubDomainName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getInsuranceCentreId = function () {
            return this.insuranceCentreId;
        };
    
        /**
         * Setter for InsuranceCentreId
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setInsuranceCentreId = function (value) {
            this.insuranceCentreId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getInsuranceCompanyId = function () {
            return this.insuranceCompanyId;
        };
    
        /**
         * Setter for InsuranceCompanyId
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setInsuranceCompanyId = function (value) {
            this.insuranceCompanyId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getIsSearchQuery = function () {
            return this.isSearchQuery;
        };
    
        /**
         * Setter for IsSearchQuery
         * 
         * @param {bool} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setIsSearchQuery = function (value) {
            this.isSearchQuery = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getGiftCode = function () {
            return this.giftCode;
        };
    
        /**
         * Setter for GiftCode
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setGiftCode = function (value) {
            this.giftCode = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.getCustomerUserId = function () {
            return this.customerUserId;
        };
    
        /**
         * Setter for CustomerUserId
         * 
         * @param {string|null} value 
         */
        LiabilityDoctorInsurancePolicyFilter.prototype.setCustomerUserId = function (value) {
            this.customerUserId = value;
        };
    
        return LiabilityDoctorInsurancePolicyFilter;
    }

}(angular));
