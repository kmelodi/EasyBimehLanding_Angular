/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of InsurancePolicyCondition
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('InsurancePolicyCondition', ['BaseModel', InsurancePolicyConditionModel]);

    function InsurancePolicyConditionModel(BaseModel) {
        var InsurancePolicyCondition = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.insuranceCentreId = this.getValue(obj.insuranceCentreId);
            this.insuranceCompanyPolicyTypeId = this.getValue(obj.insuranceCompanyPolicyTypeId);
            this.displayPriority = this.getValue(obj.displayPriority);
            this.issueInsurance = this.getValue(obj.issueInsurance);
            this.damageAssessment = this.getValue(obj.damageAssessment);
            this.cashPayment = this.getValue(obj.cashPayment);
            this.installmentsPayment = this.getValue(obj.installmentsPayment);
            this.prepaymentPercent = this.getValue(obj.prepaymentPercent);
            this.countInstallmentFrom = this.getValue(obj.countInstallmentFrom);
            this.countInstallmentTo = this.getValue(obj.countInstallmentTo);
            this.paymentMethods = this.getValue(obj.paymentMethods);
            this.promotion = this.getValue(obj.promotion);
            this.isActive = this.getValue(obj.isActive);
        };

        InsurancePolicyCondition.prototype = new BaseModel();
        InsurancePolicyCondition.prototype.constructor = InsurancePolicyCondition;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        InsurancePolicyCondition.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'id', realName: 'id' },
                { name: 'insuranceCentreId', realName: 'insuranceCentreId' },
                { name: 'insuranceCompanyPolicyTypeId', realName: 'insuranceCompanyPolicyTypeId' },
                { name: 'displayPriority', realName: 'displayPriority' },
                { name: 'issueInsurance', realName: 'issueInsurance' },
                { name: 'damageAssessment', realName: 'damageAssessment' },
                { name: 'cashPayment', realName: 'cashPayment' },
                { name: 'installmentsPayment', realName: 'installmentsPayment' },
                { name: 'prepaymentPercent', realName: 'prepaymentPercent' },
                { name: 'countInstallmentFrom', realName: 'countInstallmentFrom' },
                { name: 'countInstallmentTo', realName: 'countInstallmentTo' },
                { name: 'paymentMethods', realName: 'paymentMethods' },
                { name: 'promotion', realName: 'promotion' },
                { name: 'isActive', realName: 'isActive' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        InsurancePolicyCondition.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsurancePolicyCondition.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        InsurancePolicyCondition.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * شناسه ی مرکز بیمه
         *
         * @return {int}
         */
        InsurancePolicyCondition.prototype.getInsuranceCentreId = function () {
            return this.insuranceCentreId;
        };
    
        /**
         * Setter for InsuranceCentreId
         * 
         * @param {int} value 
         */
        InsurancePolicyCondition.prototype.setInsuranceCentreId = function (value) {
            this.insuranceCentreId = value;
        };
    
        /**
         * شناسه ی نوع بیمه نامه ی شرکت بیمه
         *
         * @return {int}
         */
        InsurancePolicyCondition.prototype.getInsuranceCompanyPolicyTypeId = function () {
            return this.insuranceCompanyPolicyTypeId;
        };
    
        /**
         * Setter for InsuranceCompanyPolicyTypeId
         * 
         * @param {int} value 
         */
        InsurancePolicyCondition.prototype.setInsuranceCompanyPolicyTypeId = function (value) {
            this.insuranceCompanyPolicyTypeId = value;
        };
    
        /**
         * الویت نمایش
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getDisplayPriority = function () {
            return this.displayPriority;
        };
    
        /**
         * Setter for DisplayPriority
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setDisplayPriority = function (value) {
            this.displayPriority = value;
        };
    
        /**
         * امکان صدور بیمه نامه
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getIssueInsurance = function () {
            return this.issueInsurance;
        };
    
        /**
         * Setter for IssueInsurance
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setIssueInsurance = function (value) {
            this.issueInsurance = value;
        };
    
        /**
         * ارزیابی خسارت
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getDamageAssessment = function () {
            return this.damageAssessment;
        };
    
        /**
         * Setter for DamageAssessment
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setDamageAssessment = function (value) {
            this.damageAssessment = value;
        };
    
        /**
         * پرداخت نقدی
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getCashPayment = function () {
            return this.cashPayment;
        };
    
        /**
         * Setter for CashPayment
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setCashPayment = function (value) {
            this.cashPayment = value;
        };
    
        /**
         * پرداخت اقساطی
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getInstallmentsPayment = function () {
            return this.installmentsPayment;
        };
    
        /**
         * Setter for InstallmentsPayment
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setInstallmentsPayment = function (value) {
            this.installmentsPayment = value;
        };
    
        /**
         * درصدر پیش پرداخت
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getPrepaymentPercent = function () {
            return this.prepaymentPercent;
        };
    
        /**
         * Setter for PrepaymentPercent
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setPrepaymentPercent = function (value) {
            this.prepaymentPercent = value;
        };
    
        /**
         * تعداد اقساط از
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getCountInstallmentFrom = function () {
            return this.countInstallmentFrom;
        };
    
        /**
         * Setter for CountInstallmentFrom
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setCountInstallmentFrom = function (value) {
            this.countInstallmentFrom = value;
        };
    
        /**
         * تعداد اقساط تا
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getCountInstallmentTo = function () {
            return this.countInstallmentTo;
        };
    
        /**
         * Setter for CountInstallmentTo
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setCountInstallmentTo = function (value) {
            this.countInstallmentTo = value;
        };
    
        /**
         * روش فروش
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getPaymentMethods = function () {
            return this.paymentMethods;
        };
    
        /**
         * Setter for PaymentMethods
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setPaymentMethods = function (value) {
            this.paymentMethods = value;
        };
    
        /**
         * پروموشن
         *
         * @return {string|null}
         */
        InsurancePolicyCondition.prototype.getPromotion = function () {
            return this.promotion;
        };
    
        /**
         * Setter for Promotion
         * 
         * @param {string|null} value 
         */
        InsurancePolicyCondition.prototype.setPromotion = function (value) {
            this.promotion = value;
        };
    
        /**
         * وضعیت فعال
         *
         * @return {bool}
         */
        InsurancePolicyCondition.prototype.getIsActive = function () {
            return this.isActive;
        };
    
        /**
         * Setter for IsActive
         * 
         * @param {bool} value 
         */
        InsurancePolicyCondition.prototype.setIsActive = function (value) {
            this.isActive = value;
        };
    
        return InsurancePolicyCondition;
    }

}(angular));