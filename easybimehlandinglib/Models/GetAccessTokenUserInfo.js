/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GetAccessTokenUserInfo
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('GetAccessTokenUserInfo', ['BaseModel', GetAccessTokenUserInfoModel]);

    function GetAccessTokenUserInfoModel(BaseModel) {
        var GetAccessTokenUserInfo = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.id = this.getValue(obj.id);
            this.accessToken = this.getValue(obj.accessToken);
            this.expiresIn = this.getValue(obj.expiresIn);
            this.refreshToken = this.getValue(obj.refreshToken);
            this.error = this.getValue(obj.error);
            this.userName = this.getValue(obj.userName);
            this.insuranceCentreName = this.getValue(obj.insuranceCentreName);
            this.insuranceCentreLogo = this.getValue(obj.insuranceCentreLogo);
            this.insuranceCentreFavicon = this.getValue(obj.insuranceCentreFavicon);
            this.licensed = this.getValue(obj.licensed);
            this.email = this.getValue(obj.email);
            this.insuranceCentreType = this.getValue(obj.insuranceCentreType);
            this.avatarUrl = this.getValue(obj.avatarUrl);
            this.aliasName = this.getValue(obj.aliasName);
            this.userGroup = this.getValue(obj.userGroup);
            this.userGroupTitle = this.getValue(obj.userGroupTitle);
            this.roleIds = this.getValue(obj.roleIds);
            this.roleTitles = this.getValue(obj.roleTitles);
            this.unlimitedAccount = this.getValue(obj.unlimitedAccount);
            this.rolePermissions = this.getValue(obj.rolePermissions);
        };

        GetAccessTokenUserInfo.prototype = new BaseModel();
        GetAccessTokenUserInfo.prototype.constructor = GetAccessTokenUserInfo;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        GetAccessTokenUserInfo.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'id', realName: 'id' },
                { name: 'accessToken', realName: 'access_token' },
                { name: 'expiresIn', realName: 'expires_in' },
                { name: 'refreshToken', realName: 'refresh_token' },
                { name: 'error', realName: 'error' },
                { name: 'userName', realName: 'userName' },
                { name: 'insuranceCentreName', realName: 'insuranceCentreName' },
                { name: 'insuranceCentreLogo', realName: 'insuranceCentreLogo' },
                { name: 'insuranceCentreFavicon', realName: 'insuranceCentreFavicon' },
                { name: 'licensed', realName: 'licensed' },
                { name: 'email', realName: 'email' },
                { name: 'insuranceCentreType', realName: 'insuranceCentreType' },
                { name: 'avatarUrl', realName: 'avatarUrl' },
                { name: 'aliasName', realName: 'aliasName' },
                { name: 'userGroup', realName: 'userGroup' },
                { name: 'userGroupTitle', realName: 'userGroupTitle' },
                { name: 'roleIds', realName: 'roleIds', array: true },
                { name: 'roleTitles', realName: 'roleTitles' },
                { name: 'unlimitedAccount', realName: 'unlimitedAccount' },
                { name: 'rolePermissions', realName: 'rolePermissions' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        GetAccessTokenUserInfo.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getAccessToken = function () {
            return this.accessToken;
        };
    
        /**
         * Setter for AccessToken
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setAccessToken = function (value) {
            this.accessToken = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getExpiresIn = function () {
            return this.expiresIn;
        };
    
        /**
         * Setter for ExpiresIn
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setExpiresIn = function (value) {
            this.expiresIn = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getRefreshToken = function () {
            return this.refreshToken;
        };
    
        /**
         * Setter for RefreshToken
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setRefreshToken = function (value) {
            this.refreshToken = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GetAccessTokenUserInfo.prototype.getError = function () {
            return this.error;
        };
    
        /**
         * Setter for Error
         * 
         * @param {string|null} value 
         */
        GetAccessTokenUserInfo.prototype.setError = function (value) {
            this.error = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getUserName = function () {
            return this.userName;
        };
    
        /**
         * Setter for UserName
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setUserName = function (value) {
            this.userName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getInsuranceCentreName = function () {
            return this.insuranceCentreName;
        };
    
        /**
         * Setter for InsuranceCentreName
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setInsuranceCentreName = function (value) {
            this.insuranceCentreName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getInsuranceCentreLogo = function () {
            return this.insuranceCentreLogo;
        };
    
        /**
         * Setter for InsuranceCentreLogo
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setInsuranceCentreLogo = function (value) {
            this.insuranceCentreLogo = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GetAccessTokenUserInfo.prototype.getInsuranceCentreFavicon = function () {
            return this.insuranceCentreFavicon;
        };
    
        /**
         * Setter for InsuranceCentreFavicon
         * 
         * @param {string|null} value 
         */
        GetAccessTokenUserInfo.prototype.setInsuranceCentreFavicon = function (value) {
            this.insuranceCentreFavicon = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        GetAccessTokenUserInfo.prototype.getLicensed = function () {
            return this.licensed;
        };
    
        /**
         * Setter for Licensed
         * 
         * @param {bool} value 
         */
        GetAccessTokenUserInfo.prototype.setLicensed = function (value) {
            this.licensed = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getEmail = function () {
            return this.email;
        };
    
        /**
         * Setter for Email
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setEmail = function (value) {
            this.email = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        GetAccessTokenUserInfo.prototype.getInsuranceCentreType = function () {
            return this.insuranceCentreType;
        };
    
        /**
         * Setter for InsuranceCentreType
         * 
         * @param {int} value 
         */
        GetAccessTokenUserInfo.prototype.setInsuranceCentreType = function (value) {
            this.insuranceCentreType = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getAvatarUrl = function () {
            return this.avatarUrl;
        };
    
        /**
         * Setter for AvatarUrl
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setAvatarUrl = function (value) {
            this.avatarUrl = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getAliasName = function () {
            return this.aliasName;
        };
    
        /**
         * Setter for AliasName
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setAliasName = function (value) {
            this.aliasName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        GetAccessTokenUserInfo.prototype.getUserGroup = function () {
            return this.userGroup;
        };
    
        /**
         * Setter for UserGroup
         * 
         * @param {int} value 
         */
        GetAccessTokenUserInfo.prototype.setUserGroup = function (value) {
            this.userGroup = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getUserGroupTitle = function () {
            return this.userGroupTitle;
        };
    
        /**
         * Setter for UserGroupTitle
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setUserGroupTitle = function (value) {
            this.userGroupTitle = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        GetAccessTokenUserInfo.prototype.getRoleIds = function () {
            return this.roleIds;
        };
    
        /**
         * Setter for RoleIds
         * 
         * @param {array} value 
         */
        GetAccessTokenUserInfo.prototype.setRoleIds = function (value) {
            this.roleIds = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        GetAccessTokenUserInfo.prototype.getRoleTitles = function () {
            return this.roleTitles;
        };
    
        /**
         * Setter for RoleTitles
         * 
         * @param {string} value 
         */
        GetAccessTokenUserInfo.prototype.setRoleTitles = function (value) {
            this.roleTitles = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        GetAccessTokenUserInfo.prototype.getUnlimitedAccount = function () {
            return this.unlimitedAccount;
        };
    
        /**
         * Setter for UnlimitedAccount
         * 
         * @param {bool} value 
         */
        GetAccessTokenUserInfo.prototype.setUnlimitedAccount = function (value) {
            this.unlimitedAccount = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GetAccessTokenUserInfo.prototype.getRolePermissions = function () {
            return this.rolePermissions;
        };
    
        /**
         * Setter for RolePermissions
         * 
         * @param {string|null} value 
         */
        GetAccessTokenUserInfo.prototype.setRolePermissions = function (value) {
            this.rolePermissions = value;
        };
    
        return GetAccessTokenUserInfo;
    }

}(angular));
