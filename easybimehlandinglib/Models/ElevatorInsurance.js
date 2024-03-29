/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ElevatorInsurance
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('ElevatorInsurance', ['BaseModel', ElevatorInsuranceModel]);

    function ElevatorInsuranceModel(BaseModel) {
        var ElevatorInsurance = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.hasPlan = this.getValue(obj.hasPlan);
            this.buildingUseTypes = this.getValue(obj.buildingUseTypes);
            this.elevatorTypes = this.getValue(obj.elevatorTypes);
            this.defectOrganCoverage = this.getValue(obj.defectOrganCoverage);
            this.deathCapitalCoverage = this.getValue(obj.deathCapitalCoverage);
            this.financialCoverage = this.getValue(obj.financialCoverage);
            this.medicalCostCoverage = this.getValue(obj.medicalCostCoverage);
            this.insuranceRiskLevels = this.getValue(obj.insuranceRiskLevels);
            this.insurancePolicyTerms = this.getValue(obj.insurancePolicyTerms);
            this.insuranceCompanies = this.getValue(obj.insuranceCompanies);
            this.provinces = this.getValue(obj.provinces);
            this.cities = this.getValue(obj.cities);
            this.cityRegions = this.getValue(obj.cityRegions);
            this.shippingTypes = this.getValue(obj.shippingTypes);
            this.postTypes = this.getValue(obj.postTypes);
            this.insurancePolicyCondition = this.getValue(obj.insurancePolicyCondition);
            this.insuranceData = this.getValue(obj.insuranceData);
        };

        ElevatorInsurance.prototype = new BaseModel();
        ElevatorInsurance.prototype.constructor = ElevatorInsurance;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ElevatorInsurance.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'hasPlan', realName: 'hasPlan' },
                { name: 'buildingUseTypes', realName: 'buildingUseTypes', array: true, type: 'ComboDataModel' },
                { name: 'elevatorTypes', realName: 'elevatorTypes', array: true, type: 'ElevatorType' },
                {
                    name: 'defectOrganCoverage',
                    realName: 'defectOrganCoverage',
                    array: true,
                    type: 'DefectOrganCoverage',
                },
                {
                    name: 'deathCapitalCoverage',
                    realName: 'deathCapitalCoverage',
                    array: true,
                    type: 'DeathCapitalCoverage',
                },
                { name: 'financialCoverage', realName: 'financialCoverage', array: true, type: 'FinancialCoverage' },
                {
                    name: 'medicalCostCoverage',
                    realName: 'medicalCostCoverage',
                    array: true,
                    type: 'MedicalCostCoverage',
                },
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
                { name: 'insuranceCompanies', realName: 'insuranceCompanies', array: true, type: 'InsuranceCompany' },
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
                { name: 'insuranceData', realName: 'insuranceData', type: 'InsuranceDataElevatorInsurance' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ElevatorInsurance.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        ElevatorInsurance.prototype.getHasPlan = function () {
            return this.hasPlan;
        };
    
        /**
         * Setter for HasPlan
         * 
         * @param {bool} value 
         */
        ElevatorInsurance.prototype.setHasPlan = function (value) {
            this.hasPlan = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getBuildingUseTypes = function () {
            return this.buildingUseTypes;
        };
    
        /**
         * Setter for BuildingUseTypes
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setBuildingUseTypes = function (value) {
            this.buildingUseTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getElevatorTypes = function () {
            return this.elevatorTypes;
        };
    
        /**
         * Setter for ElevatorTypes
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setElevatorTypes = function (value) {
            this.elevatorTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getDefectOrganCoverage = function () {
            return this.defectOrganCoverage;
        };
    
        /**
         * Setter for DefectOrganCoverage
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setDefectOrganCoverage = function (value) {
            this.defectOrganCoverage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getDeathCapitalCoverage = function () {
            return this.deathCapitalCoverage;
        };
    
        /**
         * Setter for DeathCapitalCoverage
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setDeathCapitalCoverage = function (value) {
            this.deathCapitalCoverage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getFinancialCoverage = function () {
            return this.financialCoverage;
        };
    
        /**
         * Setter for FinancialCoverage
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setFinancialCoverage = function (value) {
            this.financialCoverage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getMedicalCostCoverage = function () {
            return this.medicalCostCoverage;
        };
    
        /**
         * Setter for MedicalCostCoverage
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setMedicalCostCoverage = function (value) {
            this.medicalCostCoverage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getInsuranceRiskLevels = function () {
            return this.insuranceRiskLevels;
        };
    
        /**
         * Setter for InsuranceRiskLevels
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setInsuranceRiskLevels = function (value) {
            this.insuranceRiskLevels = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getInsurancePolicyTerms = function () {
            return this.insurancePolicyTerms;
        };
    
        /**
         * Setter for InsurancePolicyTerms
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setInsurancePolicyTerms = function (value) {
            this.insurancePolicyTerms = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getInsuranceCompanies = function () {
            return this.insuranceCompanies;
        };
    
        /**
         * Setter for InsuranceCompanies
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setInsuranceCompanies = function (value) {
            this.insuranceCompanies = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getProvinces = function () {
            return this.provinces;
        };
    
        /**
         * Setter for Provinces
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setProvinces = function (value) {
            this.provinces = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getCities = function () {
            return this.cities;
        };
    
        /**
         * Setter for Cities
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setCities = function (value) {
            this.cities = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getCityRegions = function () {
            return this.cityRegions;
        };
    
        /**
         * Setter for CityRegions
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setCityRegions = function (value) {
            this.cityRegions = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getShippingTypes = function () {
            return this.shippingTypes;
        };
    
        /**
         * Setter for ShippingTypes
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setShippingTypes = function (value) {
            this.shippingTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        ElevatorInsurance.prototype.getPostTypes = function () {
            return this.postTypes;
        };
    
        /**
         * Setter for PostTypes
         * 
         * @param {array} value 
         */
        ElevatorInsurance.prototype.setPostTypes = function (value) {
            this.postTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {InsurancePolicyCondition}
         */
        ElevatorInsurance.prototype.getInsurancePolicyCondition = function () {
            return this.insurancePolicyCondition;
        };
    
        /**
         * Setter for InsurancePolicyCondition
         * 
         * @param {InsurancePolicyCondition} value 
         */
        ElevatorInsurance.prototype.setInsurancePolicyCondition = function (value) {
            this.insurancePolicyCondition = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {InsuranceDataElevatorInsurance}
         */
        ElevatorInsurance.prototype.getInsuranceData = function () {
            return this.insuranceData;
        };
    
        /**
         * Setter for InsuranceData
         * 
         * @param {InsuranceDataElevatorInsurance} value 
         */
        ElevatorInsurance.prototype.setInsuranceData = function (value) {
            this.insuranceData = value;
        };
    
        return ElevatorInsurance;
    }

}(angular));
