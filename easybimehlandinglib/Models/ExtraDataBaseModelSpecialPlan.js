/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ExtraDataBaseModelSpecialPlan
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('ExtraDataBaseModelSpecialPlan', ['BaseModel', ExtraDataBaseModelSpecialPlanModel]);

    function ExtraDataBaseModelSpecialPlanModel(BaseModel) {
        var ExtraDataBaseModelSpecialPlan = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.insuranceTypesCount = this.getValue(obj.insuranceTypesCount);
        };

        ExtraDataBaseModelSpecialPlan.prototype = new BaseModel();
        ExtraDataBaseModelSpecialPlan.prototype.constructor = ExtraDataBaseModelSpecialPlan;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ExtraDataBaseModelSpecialPlan.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'insuranceTypesCount', realName: 'insuranceTypesCount' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ExtraDataBaseModelSpecialPlan.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        ExtraDataBaseModelSpecialPlan.prototype.getInsuranceTypesCount = function () {
            return this.insuranceTypesCount;
        };
    
        /**
         * Setter for InsuranceTypesCount
         * 
         * @param {int} value 
         */
        ExtraDataBaseModelSpecialPlan.prototype.setInsuranceTypesCount = function (value) {
            this.insuranceTypesCount = value;
        };
    
        return ExtraDataBaseModelSpecialPlan;
    }

}(angular));
