/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Earthquake
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('Earthquake', ['BaseModel', EarthquakeModel]);

    function EarthquakeModel(BaseModel) {
        var Earthquake = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.hasPlan = this.getValue(obj.hasPlan);
            this.insuranceCentreProvinceId = this.getValue(obj.insuranceCentreProvinceId);
            this.insuranceCentreCityId = this.getValue(obj.insuranceCentreCityId);
            this.insuranceCentreCities = this.getValue(obj.insuranceCentreCities);
            this.buildingTypes = this.getValue(obj.buildingTypes);
            this.skeletonTypeBuildings = this.getValue(obj.skeletonTypeBuildings);
            this.buildingUseTypes = this.getValue(obj.buildingUseTypes);
            this.insurancePolicyTerms = this.getValue(obj.insurancePolicyTerms);
            this.insuranceExtraCoverage = this.getValue(obj.insuranceExtraCoverage);
            this.everySquareMeterCoverage = this.getValue(obj.everySquareMeterCoverage);
            this.provinces = this.getValue(obj.provinces);
            this.cities = this.getValue(obj.cities);
            this.cityRegions = this.getValue(obj.cityRegions);
            this.shippingTypes = this.getValue(obj.shippingTypes);
            this.postTypes = this.getValue(obj.postTypes);
            this.insurancePolicyCondition = this.getValue(obj.insurancePolicyCondition);
            this.insuranceData = this.getValue(obj.insuranceData);
        };

        Earthquake.prototype = new BaseModel();
        Earthquake.prototype.constructor = Earthquake;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Earthquake.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'hasPlan', realName: 'hasPlan' },
                { name: 'insuranceCentreProvinceId', realName: 'insuranceCentreProvinceId' },
                { name: 'insuranceCentreCityId', realName: 'insuranceCentreCityId' },
                {
                    name: 'insuranceCentreCities',
                    realName: 'insuranceCentreCities',
                    array: true,
                    type: 'ComboDataModel',
                },
                { name: 'buildingTypes', realName: 'buildingTypes', array: true, type: 'ComboDataModel' },
                {
                    name: 'skeletonTypeBuildings',
                    realName: 'skeletonTypeBuildings',
                    array: true,
                    type: 'ComboDataModel',
                },
                { name: 'buildingUseTypes', realName: 'buildingUseTypes', array: true, type: 'ComboDataModel' },
                {
                    name: 'insurancePolicyTerms',
                    realName: 'insurancePolicyTerms',
                    array: true,
                    type: 'InsurancePolicyTerm',
                },
                { name: 'insuranceExtraCoverage', realName: 'insuranceExtraCoverage', array: true },
                {
                    name: 'everySquareMeterCoverage',
                    realName: 'everySquareMeterCoverage',
                    array: true,
                    type: 'EverySquareMeterCoverage',
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
                { name: 'insuranceData', realName: 'insuranceData', type: 'InsuranceDataFireInsurance' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Earthquake.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        Earthquake.prototype.getHasPlan = function () {
            return this.hasPlan;
        };
    
        /**
         * Setter for HasPlan
         * 
         * @param {bool} value 
         */
        Earthquake.prototype.setHasPlan = function (value) {
            this.hasPlan = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        Earthquake.prototype.getInsuranceCentreProvinceId = function () {
            return this.insuranceCentreProvinceId;
        };
    
        /**
         * Setter for InsuranceCentreProvinceId
         * 
         * @param {int} value 
         */
        Earthquake.prototype.setInsuranceCentreProvinceId = function (value) {
            this.insuranceCentreProvinceId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        Earthquake.prototype.getInsuranceCentreCityId = function () {
            return this.insuranceCentreCityId;
        };
    
        /**
         * Setter for InsuranceCentreCityId
         * 
         * @param {int} value 
         */
        Earthquake.prototype.setInsuranceCentreCityId = function (value) {
            this.insuranceCentreCityId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getInsuranceCentreCities = function () {
            return this.insuranceCentreCities;
        };
    
        /**
         * Setter for InsuranceCentreCities
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setInsuranceCentreCities = function (value) {
            this.insuranceCentreCities = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getBuildingTypes = function () {
            return this.buildingTypes;
        };
    
        /**
         * Setter for BuildingTypes
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setBuildingTypes = function (value) {
            this.buildingTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getSkeletonTypeBuildings = function () {
            return this.skeletonTypeBuildings;
        };
    
        /**
         * Setter for SkeletonTypeBuildings
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setSkeletonTypeBuildings = function (value) {
            this.skeletonTypeBuildings = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getBuildingUseTypes = function () {
            return this.buildingUseTypes;
        };
    
        /**
         * Setter for BuildingUseTypes
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setBuildingUseTypes = function (value) {
            this.buildingUseTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getInsurancePolicyTerms = function () {
            return this.insurancePolicyTerms;
        };
    
        /**
         * Setter for InsurancePolicyTerms
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setInsurancePolicyTerms = function (value) {
            this.insurancePolicyTerms = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getInsuranceExtraCoverage = function () {
            return this.insuranceExtraCoverage;
        };
    
        /**
         * Setter for InsuranceExtraCoverage
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setInsuranceExtraCoverage = function (value) {
            this.insuranceExtraCoverage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getEverySquareMeterCoverage = function () {
            return this.everySquareMeterCoverage;
        };
    
        /**
         * Setter for EverySquareMeterCoverage
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setEverySquareMeterCoverage = function (value) {
            this.everySquareMeterCoverage = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getProvinces = function () {
            return this.provinces;
        };
    
        /**
         * Setter for Provinces
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setProvinces = function (value) {
            this.provinces = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getCities = function () {
            return this.cities;
        };
    
        /**
         * Setter for Cities
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setCities = function (value) {
            this.cities = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getCityRegions = function () {
            return this.cityRegions;
        };
    
        /**
         * Setter for CityRegions
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setCityRegions = function (value) {
            this.cityRegions = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getShippingTypes = function () {
            return this.shippingTypes;
        };
    
        /**
         * Setter for ShippingTypes
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setShippingTypes = function (value) {
            this.shippingTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        Earthquake.prototype.getPostTypes = function () {
            return this.postTypes;
        };
    
        /**
         * Setter for PostTypes
         * 
         * @param {array} value 
         */
        Earthquake.prototype.setPostTypes = function (value) {
            this.postTypes = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {InsurancePolicyCondition}
         */
        Earthquake.prototype.getInsurancePolicyCondition = function () {
            return this.insurancePolicyCondition;
        };
    
        /**
         * Setter for InsurancePolicyCondition
         * 
         * @param {InsurancePolicyCondition} value 
         */
        Earthquake.prototype.setInsurancePolicyCondition = function (value) {
            this.insurancePolicyCondition = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {InsuranceDataFireInsurance}
         */
        Earthquake.prototype.getInsuranceData = function () {
            return this.insuranceData;
        };
    
        /**
         * Setter for InsuranceData
         * 
         * @param {InsuranceDataFireInsurance} value 
         */
        Earthquake.prototype.setInsuranceData = function (value) {
            this.insuranceData = value;
        };
    
        return Earthquake;
    }

}(angular));