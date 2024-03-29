/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of FireInsurancePolicyExtendView
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('FireInsurancePolicyExtendView', ['BaseModel', FireInsurancePolicyExtendViewModel]);

    function FireInsurancePolicyExtendViewModel(BaseModel) {
        var FireInsurancePolicyExtendView = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.buildingTypeParamId = this.getValue(obj.buildingTypeParamId);
            this.skeletonTypeBuildingParamId = this.getValue(obj.skeletonTypeBuildingParamId);
            this.buildingUseTypeParamId = this.getValue(obj.buildingUseTypeParamId);
            this.unitCount = this.getValue(obj.unitCount);
            this.everySquareMeterCoverageRateId = this.getValue(obj.everySquareMeterCoverageRateId);
            this.cityId = this.getValue(obj.cityId);
            this.provinceId = this.getValue(obj.provinceId);
            this.buildingArea = this.getValue(obj.buildingArea);
            this.valueOfAppliancesFurnishing = this.getValue(obj.valueOfAppliancesFurnishing);
            this.insuranceCoverageIds = this.getValue(obj.insuranceCoverageIds);
            this.onlyAppliancesFurnishings = this.getValue(obj.onlyAppliancesFurnishings);
            this.insuranceCoveragePrice = this.getValue(obj.insuranceCoveragePrice);
            this.insurancePolicyCommitmentCeiling = this.getValue(obj.insurancePolicyCommitmentCeiling);
            this.valuePerSquareMeterRate = this.getValue(obj.valuePerSquareMeterRate);
            this.buildYear = this.getValue(obj.buildYear);
            this.zipCode = this.getValue(obj.zipCode);
            this.addressPlaceBuilding = this.getValue(obj.addressPlaceBuilding);
            this.riskLevelDiscount = this.getValue(obj.riskLevelDiscount);
            this.basePremium = this.getValue(obj.basePremium);
            this.allPremium = this.getValue(obj.allPremium);
            this.insuranceCompanyDiscountRate = this.getValue(obj.insuranceCompanyDiscountRate);
            this.insuranceCompanyDiscount = this.getValue(obj.insuranceCompanyDiscount);
            this.insuranceCentreDiscount = this.getValue(obj.insuranceCentreDiscount);
            this.coupenDiscount = this.getValue(obj.coupenDiscount);
            this.allDiscount = this.getValue(obj.allDiscount);
            this.exchangePremium = this.getValue(obj.exchangePremium);
        };

        FireInsurancePolicyExtendView.prototype = new BaseModel();
        FireInsurancePolicyExtendView.prototype.constructor = FireInsurancePolicyExtendView;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        FireInsurancePolicyExtendView.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'buildingTypeParamId', realName: 'buildingTypeParamId' },
                { name: 'skeletonTypeBuildingParamId', realName: 'skeletonTypeBuildingParamId' },
                { name: 'buildingUseTypeParamId', realName: 'buildingUseTypeParamId' },
                { name: 'unitCount', realName: 'unitCount' },
                { name: 'everySquareMeterCoverageRateId', realName: 'everySquareMeterCoverageRateId' },
                { name: 'cityId', realName: 'cityId' },
                { name: 'provinceId', realName: 'provinceId' },
                { name: 'buildingArea', realName: 'buildingArea' },
                { name: 'valueOfAppliancesFurnishing', realName: 'valueOfAppliancesFurnishing' },
                { name: 'insuranceCoverageIds', realName: '_InsuranceCoverageIds' },
                { name: 'onlyAppliancesFurnishings', realName: 'onlyAppliancesFurnishings' },
                { name: 'insuranceCoveragePrice', realName: 'insuranceCoveragePrice' },
                { name: 'insurancePolicyCommitmentCeiling', realName: 'insurancePolicyCommitmentCeiling' },
                { name: 'valuePerSquareMeterRate', realName: 'valuePerSquareMeterRate' },
                { name: 'buildYear', realName: 'buildYear' },
                { name: 'zipCode', realName: 'zipCode' },
                { name: 'addressPlaceBuilding', realName: 'addressPlaceBuilding' },
                { name: 'riskLevelDiscount', realName: 'riskLevelDiscount' },
                { name: 'basePremium', realName: 'basePremium' },
                { name: 'allPremium', realName: 'allPremium' },
                { name: 'insuranceCompanyDiscountRate', realName: 'insuranceCompanyDiscountRate' },
                { name: 'insuranceCompanyDiscount', realName: 'insuranceCompanyDiscount' },
                { name: 'insuranceCentreDiscount', realName: 'insuranceCentreDiscount' },
                { name: 'coupenDiscount', realName: 'coupenDiscount' },
                { name: 'allDiscount', realName: 'allDiscount' },
                { name: 'exchangePremium', realName: 'exchangePremium' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        FireInsurancePolicyExtendView.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getBuildingTypeParamId = function () {
            return this.buildingTypeParamId;
        };
    
        /**
         * Setter for BuildingTypeParamId
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setBuildingTypeParamId = function (value) {
            this.buildingTypeParamId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getSkeletonTypeBuildingParamId = function () {
            return this.skeletonTypeBuildingParamId;
        };
    
        /**
         * Setter for SkeletonTypeBuildingParamId
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setSkeletonTypeBuildingParamId = function (value) {
            this.skeletonTypeBuildingParamId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getBuildingUseTypeParamId = function () {
            return this.buildingUseTypeParamId;
        };
    
        /**
         * Setter for BuildingUseTypeParamId
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setBuildingUseTypeParamId = function (value) {
            this.buildingUseTypeParamId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getUnitCount = function () {
            return this.unitCount;
        };
    
        /**
         * Setter for UnitCount
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setUnitCount = function (value) {
            this.unitCount = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getEverySquareMeterCoverageRateId = function () {
            return this.everySquareMeterCoverageRateId;
        };
    
        /**
         * Setter for EverySquareMeterCoverageRateId
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setEverySquareMeterCoverageRateId = function (value) {
            this.everySquareMeterCoverageRateId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getCityId = function () {
            return this.cityId;
        };
    
        /**
         * Setter for CityId
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setCityId = function (value) {
            this.cityId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getProvinceId = function () {
            return this.provinceId;
        };
    
        /**
         * Setter for ProvinceId
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setProvinceId = function (value) {
            this.provinceId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getBuildingArea = function () {
            return this.buildingArea;
        };
    
        /**
         * Setter for BuildingArea
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setBuildingArea = function (value) {
            this.buildingArea = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getValueOfAppliancesFurnishing = function () {
            return this.valueOfAppliancesFurnishing;
        };
    
        /**
         * Setter for ValueOfAppliancesFurnishing
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setValueOfAppliancesFurnishing = function (value) {
            this.valueOfAppliancesFurnishing = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getInsuranceCoverageIds = function () {
            return this.insuranceCoverageIds;
        };
    
        /**
         * Setter for InsuranceCoverageIds
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setInsuranceCoverageIds = function (value) {
            this.insuranceCoverageIds = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        FireInsurancePolicyExtendView.prototype.getOnlyAppliancesFurnishings = function () {
            return this.onlyAppliancesFurnishings;
        };
    
        /**
         * Setter for OnlyAppliancesFurnishings
         * 
         * @param {bool} value 
         */
        FireInsurancePolicyExtendView.prototype.setOnlyAppliancesFurnishings = function (value) {
            this.onlyAppliancesFurnishings = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getInsuranceCoveragePrice = function () {
            return this.insuranceCoveragePrice;
        };
    
        /**
         * Setter for InsuranceCoveragePrice
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setInsuranceCoveragePrice = function (value) {
            this.insuranceCoveragePrice = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getInsurancePolicyCommitmentCeiling = function () {
            return this.insurancePolicyCommitmentCeiling;
        };
    
        /**
         * Setter for InsurancePolicyCommitmentCeiling
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setInsurancePolicyCommitmentCeiling = function (value) {
            this.insurancePolicyCommitmentCeiling = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getValuePerSquareMeterRate = function () {
            return this.valuePerSquareMeterRate;
        };
    
        /**
         * Setter for ValuePerSquareMeterRate
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setValuePerSquareMeterRate = function (value) {
            this.valuePerSquareMeterRate = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getBuildYear = function () {
            return this.buildYear;
        };
    
        /**
         * Setter for BuildYear
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setBuildYear = function (value) {
            this.buildYear = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getZipCode = function () {
            return this.zipCode;
        };
    
        /**
         * Setter for ZipCode
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setZipCode = function (value) {
            this.zipCode = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getAddressPlaceBuilding = function () {
            return this.addressPlaceBuilding;
        };
    
        /**
         * Setter for AddressPlaceBuilding
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setAddressPlaceBuilding = function (value) {
            this.addressPlaceBuilding = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getRiskLevelDiscount = function () {
            return this.riskLevelDiscount;
        };
    
        /**
         * Setter for RiskLevelDiscount
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setRiskLevelDiscount = function (value) {
            this.riskLevelDiscount = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getBasePremium = function () {
            return this.basePremium;
        };
    
        /**
         * Setter for BasePremium
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setBasePremium = function (value) {
            this.basePremium = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        FireInsurancePolicyExtendView.prototype.getAllPremium = function () {
            return this.allPremium;
        };
    
        /**
         * Setter for AllPremium
         * 
         * @param {string|null} value 
         */
        FireInsurancePolicyExtendView.prototype.setAllPremium = function (value) {
            this.allPremium = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getInsuranceCompanyDiscountRate = function () {
            return this.insuranceCompanyDiscountRate;
        };
    
        /**
         * Setter for InsuranceCompanyDiscountRate
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setInsuranceCompanyDiscountRate = function (value) {
            this.insuranceCompanyDiscountRate = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getInsuranceCompanyDiscount = function () {
            return this.insuranceCompanyDiscount;
        };
    
        /**
         * Setter for InsuranceCompanyDiscount
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setInsuranceCompanyDiscount = function (value) {
            this.insuranceCompanyDiscount = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getInsuranceCentreDiscount = function () {
            return this.insuranceCentreDiscount;
        };
    
        /**
         * Setter for InsuranceCentreDiscount
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setInsuranceCentreDiscount = function (value) {
            this.insuranceCentreDiscount = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getCoupenDiscount = function () {
            return this.coupenDiscount;
        };
    
        /**
         * Setter for CoupenDiscount
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setCoupenDiscount = function (value) {
            this.coupenDiscount = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getAllDiscount = function () {
            return this.allDiscount;
        };
    
        /**
         * Setter for AllDiscount
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setAllDiscount = function (value) {
            this.allDiscount = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        FireInsurancePolicyExtendView.prototype.getExchangePremium = function () {
            return this.exchangePremium;
        };
    
        /**
         * Setter for ExchangePremium
         * 
         * @param {int} value 
         */
        FireInsurancePolicyExtendView.prototype.setExchangePremium = function (value) {
            this.exchangePremium = value;
        };
    
        return FireInsurancePolicyExtendView;
    }

}(angular));
