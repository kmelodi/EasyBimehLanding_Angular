/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of InsuranceDataLiabilityDoctorInsurance
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('InsuranceDataLiabilityDoctorInsurance', ['BaseModel', InsuranceDataLiabilityDoctorInsuranceModel]);

    function InsuranceDataLiabilityDoctorInsuranceModel(BaseModel) {
        var InsuranceDataLiabilityDoctorInsurance = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.liabilityDoctorInsurancePolicyExtendView = this.getValue(obj.liabilityDoctorInsurancePolicyExtendView);
            this.liabilityDoctorInsurancePolicyFilter = this.getValue(obj.liabilityDoctorInsurancePolicyFilter);
            this.id = this.getValue(obj.id);
            this.selectedInsurancePolicyHasBeenChanged = this.getValue(obj.selectedInsurancePolicyHasBeenChanged);
            this.isPaymented = this.getValue(obj.isPaymented);
            this.payable = this.getValue(obj.payable);
            this.paymented = this.getValue(obj.paymented);
            this.conflict = this.getValue(obj.conflict);
            this.hasConflictDocument = this.getValue(obj.hasConflictDocument);
            this.initialPrice = this.getValue(obj.initialPrice);
            this.finalPrice = this.getValue(obj.finalPrice);
            this.insuranceCompanyName = this.getValue(obj.insuranceCompanyName);
            this.insuranceCentreName = this.getValue(obj.insuranceCentreName);
            this.isInsuranceCentreAdmin = this.getValue(obj.isInsuranceCentreAdmin);
            this.insurancePolicyPaymentDocuments = this.getValue(obj.insurancePolicyPaymentDocuments);
            this.insurancePolicyConflict = this.getValue(obj.insurancePolicyConflict);
            this.insurancePolicyCondition = this.getValue(obj.insurancePolicyCondition);
            this.person = this.getValue(obj.person);
            this.insurancePolicy = this.getValue(obj.insurancePolicy);
            this.shoppingCard = this.getValue(obj.shoppingCard);
            this.shoppingCardPostalPacket = this.getValue(obj.shoppingCardPostalPacket);
        };

        InsuranceDataLiabilityDoctorInsurance.prototype = new BaseModel();
        InsuranceDataLiabilityDoctorInsurance.prototype.constructor = InsuranceDataLiabilityDoctorInsurance;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                {
                    name: 'liabilityDoctorInsurancePolicyExtendView',
                    realName: 'liabilityDoctorInsurancePolicyExtendView',
                    type: 'LiabilityDoctorInsurancePolicyExtendView',
                },
                {
                    name: 'liabilityDoctorInsurancePolicyFilter',
                    realName: 'liabilityDoctorInsurancePolicyFilter',
                    type: 'LiabilityDoctorInsurancePolicyFilter',
                },
                { name: 'id', realName: 'id' },
                { name: 'selectedInsurancePolicyHasBeenChanged', realName: 'selectedInsurancePolicyHasBeenChanged' },
                { name: 'isPaymented', realName: 'isPaymented' },
                { name: 'payable', realName: 'payable' },
                { name: 'paymented', realName: 'paymented' },
                { name: 'conflict', realName: 'conflict' },
                { name: 'hasConflictDocument', realName: 'hasConflictDocument' },
                { name: 'initialPrice', realName: 'initialPrice' },
                { name: 'finalPrice', realName: 'finalPrice' },
                { name: 'insuranceCompanyName', realName: 'insuranceCompanyName' },
                { name: 'insuranceCentreName', realName: 'insuranceCentreName' },
                { name: 'isInsuranceCentreAdmin', realName: 'isInsuranceCentreAdmin' },
                { name: 'insurancePolicyPaymentDocuments', realName: 'insurancePolicyPaymentDocuments', array: true },
                { name: 'insurancePolicyConflict', realName: 'insurancePolicyConflict' },
                { name: 'insurancePolicyCondition', realName: 'insurancePolicyCondition' },
                { name: 'person', realName: 'person' },
                { name: 'insurancePolicy', realName: 'insurancePolicy' },
                { name: 'shoppingCard', realName: 'shoppingCard' },
                { name: 'shoppingCardPostalPacket', realName: 'shoppingCardPostalPacket' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * شرایط اضافه ی بیمه نامه
         *
         * @return {LiabilityDoctorInsurancePolicyExtendView}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getLiabilityDoctorInsurancePolicyExtendView = function () {
            return this.liabilityDoctorInsurancePolicyExtendView;
        };
    
        /**
         * Setter for LiabilityDoctorInsurancePolicyExtendView
         * 
         * @param {LiabilityDoctorInsurancePolicyExtendView} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setLiabilityDoctorInsurancePolicyExtendView = function (value) {
            this.liabilityDoctorInsurancePolicyExtendView = value;
        };
    
        /**
         * فیلتر های بیمه نامه
         *
         * @return {LiabilityDoctorInsurancePolicyFilter}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getLiabilityDoctorInsurancePolicyFilter = function () {
            return this.liabilityDoctorInsurancePolicyFilter;
        };
    
        /**
         * Setter for LiabilityDoctorInsurancePolicyFilter
         * 
         * @param {LiabilityDoctorInsurancePolicyFilter} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setLiabilityDoctorInsurancePolicyFilter = function (value) {
            this.liabilityDoctorInsurancePolicyFilter = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * بیمه نامه تغییر کرده؟
         *
         * @return {bool}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getSelectedInsurancePolicyHasBeenChanged = function () {
            return this.selectedInsurancePolicyHasBeenChanged;
        };
    
        /**
         * Setter for SelectedInsurancePolicyHasBeenChanged
         * 
         * @param {bool} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setSelectedInsurancePolicyHasBeenChanged = function (value) {
            this.selectedInsurancePolicyHasBeenChanged = value;
        };
    
        /**
         * پرداخت شده؟
         *
         * @return {bool}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getIsPaymented = function () {
            return this.isPaymented;
        };
    
        /**
         * Setter for IsPaymented
         * 
         * @param {bool} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setIsPaymented = function (value) {
            this.isPaymented = value;
        };
    
        /**
         * قابل پرداخت؟
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getPayable = function () {
            return this.payable;
        };
    
        /**
         * Setter for Payable
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setPayable = function (value) {
            this.payable = value;
        };
    
        /**
         * پرداخت شده؟
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getPaymented = function () {
            return this.paymented;
        };
    
        /**
         * Setter for Paymented
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setPaymented = function (value) {
            this.paymented = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getConflict = function () {
            return this.conflict;
        };
    
        /**
         * Setter for Conflict
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setConflict = function (value) {
            this.conflict = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getHasConflictDocument = function () {
            return this.hasConflictDocument;
        };
    
        /**
         * Setter for HasConflictDocument
         * 
         * @param {bool} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setHasConflictDocument = function (value) {
            this.hasConflictDocument = value;
        };
    
        /**
         * قیمت پایه
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getInitialPrice = function () {
            return this.initialPrice;
        };
    
        /**
         * Setter for InitialPrice
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setInitialPrice = function (value) {
            this.initialPrice = value;
        };
    
        /**
         * قیمت نهایی
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getFinalPrice = function () {
            return this.finalPrice;
        };
    
        /**
         * Setter for FinalPrice
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setFinalPrice = function (value) {
            this.finalPrice = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getInsuranceCompanyName = function () {
            return this.insuranceCompanyName;
        };
    
        /**
         * Setter for InsuranceCompanyName
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setInsuranceCompanyName = function (value) {
            this.insuranceCompanyName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getInsuranceCentreName = function () {
            return this.insuranceCentreName;
        };
    
        /**
         * Setter for InsuranceCentreName
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setInsuranceCentreName = function (value) {
            this.insuranceCentreName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getIsInsuranceCentreAdmin = function () {
            return this.isInsuranceCentreAdmin;
        };
    
        /**
         * Setter for IsInsuranceCentreAdmin
         * 
         * @param {bool} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setIsInsuranceCentreAdmin = function (value) {
            this.isInsuranceCentreAdmin = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getInsurancePolicyPaymentDocuments = function () {
            return this.insurancePolicyPaymentDocuments;
        };
    
        /**
         * Setter for InsurancePolicyPaymentDocuments
         * 
         * @param {array} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setInsurancePolicyPaymentDocuments = function (value) {
            this.insurancePolicyPaymentDocuments = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getInsurancePolicyConflict = function () {
            return this.insurancePolicyConflict;
        };
    
        /**
         * Setter for InsurancePolicyConflict
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setInsurancePolicyConflict = function (value) {
            this.insurancePolicyConflict = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getInsurancePolicyCondition = function () {
            return this.insurancePolicyCondition;
        };
    
        /**
         * Setter for InsurancePolicyCondition
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setInsurancePolicyCondition = function (value) {
            this.insurancePolicyCondition = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getPerson = function () {
            return this.person;
        };
    
        /**
         * Setter for Person
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setPerson = function (value) {
            this.person = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getInsurancePolicy = function () {
            return this.insurancePolicy;
        };
    
        /**
         * Setter for InsurancePolicy
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setInsurancePolicy = function (value) {
            this.insurancePolicy = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getShoppingCard = function () {
            return this.shoppingCard;
        };
    
        /**
         * Setter for ShoppingCard
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setShoppingCard = function (value) {
            this.shoppingCard = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.getShoppingCardPostalPacket = function () {
            return this.shoppingCardPostalPacket;
        };
    
        /**
         * Setter for ShoppingCardPostalPacket
         * 
         * @param {string|null} value 
         */
        InsuranceDataLiabilityDoctorInsurance.prototype.setShoppingCardPostalPacket = function (value) {
            this.shoppingCardPostalPacket = value;
        };
    
        return InsuranceDataLiabilityDoctorInsurance;
    }

}(angular));
