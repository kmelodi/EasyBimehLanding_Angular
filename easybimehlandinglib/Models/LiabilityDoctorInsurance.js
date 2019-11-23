/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of LiabilityDoctorInsurance
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('LiabilityDoctorInsurance', ['BaseModel', LiabilityDoctorInsuranceModel]);

    function LiabilityDoctorInsuranceModel(BaseModel) {
        var LiabilityDoctorInsurance = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.hasPlan = this.getValue(obj.hasPlan);
            this.activityArea = this.getValue(obj.activityArea);
            this.expertises = this.getValue(obj.expertises);
            this.commitmentCeilings = this.getValue(obj.commitmentCeilings);
            this.physicalCommitment = this.getValue(obj.physicalCommitment);
            this.insuranceCompanies = this.getValue(obj.insuranceCompanies);
            this.insuranceRiskLevels = this.getValue(obj.insuranceRiskLevels);
            this.insurancePolicyTerms = this.getValue(obj.insurancePolicyTerms);
            this.provinces = this.getValue(obj.provinces);
            this.cities = this.getValue(obj.cities);
            this.cityRegions = this.getValue(obj.cityRegions);
            this.shippingTypes = this.getValue(obj.shippingTypes);
            this.postTypes = this.getValue(obj.postTypes);
            this.insurancePolicyCondition = this.getValue(obj.insurancePolicyCondition);
            this.insuranceData = this.getValue(obj.insuranceData);
        };

        LiabilityDoctorInsurance.prototype = new BaseModel();
        LiabilityDoctorInsurance.prototype.constructor = LiabilityDoctorInsurance;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        LiabilityDoctorInsurance.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'hasPlan', realName: 'hasPlan' },
                { name: 'activityArea', realName: 'activityArea', array: true, type: 'ActivityArea' },
                { name: 'expertises', realName: 'expertises', array: true, type: 'Expertise' },
                { name: 'commitmentCeilings', realName: 'commitmentCeilings', array: true, type: 'CommitmentCeiling' },
                { name: 'physicalCommitment', realName: 'physicalCommitment' },
                { name: 'insuranceCompanies', realName: 'insuranceCompanies', array: true, type: 'InsuranceCompany' },
                {
                    name: 'insuranceRiskLevels',
                    realName: 'insuranceRiskLevels',
                    array: true,
                    type: 'InsuranceRiskLevel',
                },
                {
                    name: 'insurancePolicyTerms',
                    realName: 'insurancePolicyTerms',
                    array: true,
                    type: 'InsurancePolicyTerm',
                },
                { name: 'provinces', realName: 'provinces', array: true, type: 'Province' },
                { name: 'cities', realName: 'cities', array: true },
                { name: 'cityRegions', realName: 'cityRegions', array: true },
                { name: 'shippingTypes', realName: 'shippingTypes', array: true, type: 'ShippingType' },
                { name: 'postTypes', realName: 'postTypes', array: true, type: 'PostType' },
                {
                    name: 'insurancePolicyCondition',
                    realName: 'insurancePolicyCondition',
                    type: 'InsurancePolicyCondition',
                },
                { name: 'insuranceData', realName: 'insuranceData', type: 'InsuranceDataLiabilityDoctorInsurance' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        LiabilityDoctorInsurance.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * آیا طرح بیمه ای فعالی دارد؟
         *
         * @return {bool}
         */
        LiabilityDoctorInsurance.prototype.getHasPlan = function () {
            return this.hasPlan;
        };
    
        /**
         * Setter for HasPlan
         * 
         * @param {bool} value 
         */
        LiabilityDoctorInsurance.prototype.setHasPlan = function (value) {
            this.hasPlan = value;
        };
    
        /**
         * حوزه ی فعالیت
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getActivityArea = function () {
            return this.activityArea;
        };
    
        /**
         * Setter for ActivityArea
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setActivityArea = function (value) {
            this.activityArea = value;
        };
    
        /**
         * لیست تخصص ها
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getExpertises = function () {
            return this.expertises;
        };
    
        /**
         * Setter for Expertises
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setExpertises = function (value) {
            this.expertises = value;
        };
    
        /**
         * لیست سقف تعهد
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getCommitmentCeilings = function () {
            return this.commitmentCeilings;
        };
    
        /**
         * Setter for CommitmentCeilings
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setCommitmentCeilings = function (value) {
            this.commitmentCeilings = value;
        };
    
        /**
         * مبلغ تعهد
         *
         * @return {int}
         */
        LiabilityDoctorInsurance.prototype.getPhysicalCommitment = function () {
            return this.physicalCommitment;
        };
    
        /**
         * Setter for PhysicalCommitment
         * 
         * @param {int} value 
         */
        LiabilityDoctorInsurance.prototype.setPhysicalCommitment = function (value) {
            this.physicalCommitment = value;
        };
    
        /**
         * لیست شرکت های بیمه
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getInsuranceCompanies = function () {
            return this.insuranceCompanies;
        };
    
        /**
         * Setter for InsuranceCompanies
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setInsuranceCompanies = function (value) {
            this.insuranceCompanies = value;
        };
    
        /**
         * تخفیف های بیمه ای
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getInsuranceRiskLevels = function () {
            return this.insuranceRiskLevels;
        };
    
        /**
         * Setter for InsuranceRiskLevels
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setInsuranceRiskLevels = function (value) {
            this.insuranceRiskLevels = value;
        };
    
        /**
         * دوره های بیمه ای
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getInsurancePolicyTerms = function () {
            return this.insurancePolicyTerms;
        };
    
        /**
         * Setter for InsurancePolicyTerms
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setInsurancePolicyTerms = function (value) {
            this.insurancePolicyTerms = value;
        };
    
        /**
         * لیست استان ها
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getProvinces = function () {
            return this.provinces;
        };
    
        /**
         * Setter for Provinces
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setProvinces = function (value) {
            this.provinces = value;
        };
    
        /**
         * لیست شهر ها
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getCities = function () {
            return this.cities;
        };
    
        /**
         * Setter for Cities
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setCities = function (value) {
            this.cities = value;
        };
    
        /**
         * لیست مناطق شهر
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getCityRegions = function () {
            return this.cityRegions;
        };
    
        /**
         * Setter for CityRegions
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setCityRegions = function (value) {
            this.cityRegions = value;
        };
    
        /**
         * نحوه ی ارسال
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getShippingTypes = function () {
            return this.shippingTypes;
        };
    
        /**
         * Setter for ShippingTypes
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setShippingTypes = function (value) {
            this.shippingTypes = value;
        };
    
        /**
         * روش های پستی
         *
         * @return {array}
         */
        LiabilityDoctorInsurance.prototype.getPostTypes = function () {
            return this.postTypes;
        };
    
        /**
         * Setter for PostTypes
         * 
         * @param {array} value 
         */
        LiabilityDoctorInsurance.prototype.setPostTypes = function (value) {
            this.postTypes = value;
        };
    
        /**
         * شرایط بیمه نامه
         *
         * @return {InsurancePolicyCondition}
         */
        LiabilityDoctorInsurance.prototype.getInsurancePolicyCondition = function () {
            return this.insurancePolicyCondition;
        };
    
        /**
         * Setter for InsurancePolicyCondition
         * 
         * @param {InsurancePolicyCondition} value 
         */
        LiabilityDoctorInsurance.prototype.setInsurancePolicyCondition = function (value) {
            this.insurancePolicyCondition = value;
        };
    
        /**
         * اطلاعات بیمه نامه
         *
         * @return {InsuranceDataLiabilityDoctorInsurance}
         */
        LiabilityDoctorInsurance.prototype.getInsuranceData = function () {
            return this.insuranceData;
        };
    
        /**
         * Setter for InsuranceData
         * 
         * @param {InsuranceDataLiabilityDoctorInsurance} value 
         */
        LiabilityDoctorInsurance.prototype.setInsuranceData = function (value) {
            this.insuranceData = value;
        };
    
        return LiabilityDoctorInsurance;
    }

}(angular));
