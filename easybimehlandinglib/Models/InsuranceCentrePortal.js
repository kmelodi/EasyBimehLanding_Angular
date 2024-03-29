/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of InsuranceCentrePortal
 *
 * @constructor
 */
angular.module('EasyBimehLandingLib')
    .factory('InsuranceCentrePortal', ['BaseModel', InsuranceCentrePortalModel]);

    function InsuranceCentrePortalModel(BaseModel) {
        var InsuranceCentrePortal = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.insuranceCentreId = this.getValue(obj.insuranceCentreId);
            this.centreName = this.getValue(obj.centreName);
            this.subDomainName = this.getValue(obj.subDomainName);
            this.title = this.getValue(obj.title);
            this.subTitle = this.getValue(obj.subTitle);
            this.contactUs = this.getValue(obj.contactUs);
            this.aboutUs = this.getValue(obj.aboutUs);
            this.ourService = this.getValue(obj.ourService);
            this.termsConditions = this.getValue(obj.termsConditions);
            this.copyright = this.getValue(obj.copyright);
            this.headerTitle = this.getValue(obj.headerTitle);
            this.headerBody = this.getValue(obj.headerBody);
            this.footerColor = this.getValue(obj.footerColor);
            this.backgroundColor = this.getValue(obj.backgroundColor);
            this.licensed = this.getValue(obj.licensed);
            this.defaultLogo = this.getValue(obj.defaultLogo);
            this.titleColor = this.getValue(obj.titleColor);
            this.subTitleColor = this.getValue(obj.subTitleColor);
            this.eTrustSymbol = this.getValue(obj.eTrustSymbol);
            this.digitalMediaOrganizerSymbol = this.getValue(obj.digitalMediaOrganizerSymbol);
            this.googlePlus = this.getValue(obj.googlePlus);
            this.telegram = this.getValue(obj.telegram);
            this.instagram = this.getValue(obj.instagram);
            this.faceBook = this.getValue(obj.faceBook);
            this.twitter = this.getValue(obj.twitter);
            this.saturdayToWednesdayFromHour = this.getValue(obj.saturdayToWednesdayFromHour);
            this.saturdayToWednesdayToHour = this.getValue(obj.saturdayToWednesdayToHour);
            this.thursdayFromHour = this.getValue(obj.thursdayFromHour);
            this.thursdayToHour = this.getValue(obj.thursdayToHour);
            this.fridayFromHour = this.getValue(obj.fridayFromHour);
            this.fridayToHour = this.getValue(obj.fridayToHour);
            this.metaMediaFileHeaderId = this.getValue(obj.metaMediaFileHeaderId);
            this.metaMediaFileHeaderUrl = this.getValue(obj.metaMediaFileHeaderUrl);
            this.metaMediaFileLogoId = this.getValue(obj.metaMediaFileLogoId);
            this.metaMediaFileLogoUrl = this.getValue(obj.metaMediaFileLogoUrl);
            this.metaMediaFileFaviconId = this.getValue(obj.metaMediaFileFaviconId);
            this.metaMediaFileFaviconUrl = this.getValue(obj.metaMediaFileFaviconUrl);
            this.metaMediaFileFooterId = this.getValue(obj.metaMediaFileFooterId);
            this.metaMediaFileFooterUrl = this.getValue(obj.metaMediaFileFooterUrl);
        };

        InsuranceCentrePortal.prototype = new BaseModel();
        InsuranceCentrePortal.prototype.constructor = InsuranceCentrePortal;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        InsuranceCentrePortal.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'insuranceCentreId', realName: 'insuranceCentreId' },
                { name: 'centreName', realName: 'centreName' },
                { name: 'subDomainName', realName: 'subDomainName' },
                { name: 'title', realName: 'title' },
                { name: 'subTitle', realName: 'subTitle' },
                { name: 'contactUs', realName: 'contactUs' },
                { name: 'aboutUs', realName: 'aboutUs' },
                { name: 'ourService', realName: 'ourService' },
                { name: 'termsConditions', realName: 'termsConditions' },
                { name: 'copyright', realName: 'copyright' },
                { name: 'headerTitle', realName: 'headerTitle' },
                { name: 'headerBody', realName: 'headerBody' },
                { name: 'footerColor', realName: 'footerColor' },
                { name: 'backgroundColor', realName: 'backgroundColor' },
                { name: 'licensed', realName: 'licensed' },
                { name: 'defaultLogo', realName: 'defaultLogo' },
                { name: 'titleColor', realName: 'titleColor' },
                { name: 'subTitleColor', realName: 'subTitleColor' },
                { name: 'eTrustSymbol', realName: 'eTrustSymbol' },
                { name: 'digitalMediaOrganizerSymbol', realName: 'digitalMediaOrganizerSymbol' },
                { name: 'googlePlus', realName: 'googlePlus' },
                { name: 'telegram', realName: 'telegram' },
                { name: 'instagram', realName: 'instagram' },
                { name: 'faceBook', realName: 'faceBook' },
                { name: 'twitter', realName: 'twitter' },
                { name: 'saturdayToWednesdayFromHour', realName: 'saturdayToWednesdayFromHour' },
                { name: 'saturdayToWednesdayToHour', realName: 'saturdayToWednesdayToHour' },
                { name: 'thursdayFromHour', realName: 'thursdayFromHour' },
                { name: 'thursdayToHour', realName: 'thursdayToHour' },
                { name: 'fridayFromHour', realName: 'fridayFromHour' },
                { name: 'fridayToHour', realName: 'fridayToHour' },
                { name: 'metaMediaFileHeaderId', realName: 'metaMediaFileHeaderId' },
                { name: 'metaMediaFileHeaderUrl', realName: 'metaMediaFileHeaderUrl' },
                { name: 'metaMediaFileLogoId', realName: 'metaMediaFileLogoId' },
                { name: 'metaMediaFileLogoUrl', realName: 'metaMediaFileLogoUrl' },
                { name: 'metaMediaFileFaviconId', realName: 'metaMediaFileFaviconId' },
                { name: 'metaMediaFileFaviconUrl', realName: 'metaMediaFileFaviconUrl' },
                { name: 'metaMediaFileFooterId', realName: 'metaMediaFileFooterId' },
                { name: 'metaMediaFileFooterUrl', realName: 'metaMediaFileFooterUrl' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        InsuranceCentrePortal.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceCentrePortal.prototype.getInsuranceCentreId = function () {
            return this.insuranceCentreId;
        };
    
        /**
         * Setter for InsuranceCentreId
         * 
         * @param {int} value 
         */
        InsuranceCentrePortal.prototype.setInsuranceCentreId = function (value) {
            this.insuranceCentreId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getCentreName = function () {
            return this.centreName;
        };
    
        /**
         * Setter for CentreName
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setCentreName = function (value) {
            this.centreName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getSubDomainName = function () {
            return this.subDomainName;
        };
    
        /**
         * Setter for SubDomainName
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setSubDomainName = function (value) {
            this.subDomainName = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getSubTitle = function () {
            return this.subTitle;
        };
    
        /**
         * Setter for SubTitle
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setSubTitle = function (value) {
            this.subTitle = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getContactUs = function () {
            return this.contactUs;
        };
    
        /**
         * Setter for ContactUs
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setContactUs = function (value) {
            this.contactUs = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getAboutUs = function () {
            return this.aboutUs;
        };
    
        /**
         * Setter for AboutUs
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setAboutUs = function (value) {
            this.aboutUs = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getOurService = function () {
            return this.ourService;
        };
    
        /**
         * Setter for OurService
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setOurService = function (value) {
            this.ourService = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getTermsConditions = function () {
            return this.termsConditions;
        };
    
        /**
         * Setter for TermsConditions
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setTermsConditions = function (value) {
            this.termsConditions = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getCopyright = function () {
            return this.copyright;
        };
    
        /**
         * Setter for Copyright
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setCopyright = function (value) {
            this.copyright = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getHeaderTitle = function () {
            return this.headerTitle;
        };
    
        /**
         * Setter for HeaderTitle
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setHeaderTitle = function (value) {
            this.headerTitle = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getHeaderBody = function () {
            return this.headerBody;
        };
    
        /**
         * Setter for HeaderBody
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setHeaderBody = function (value) {
            this.headerBody = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getFooterColor = function () {
            return this.footerColor;
        };
    
        /**
         * Setter for FooterColor
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setFooterColor = function (value) {
            this.footerColor = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getBackgroundColor = function () {
            return this.backgroundColor;
        };
    
        /**
         * Setter for BackgroundColor
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setBackgroundColor = function (value) {
            this.backgroundColor = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {bool}
         */
        InsuranceCentrePortal.prototype.getLicensed = function () {
            return this.licensed;
        };
    
        /**
         * Setter for Licensed
         * 
         * @param {bool} value 
         */
        InsuranceCentrePortal.prototype.setLicensed = function (value) {
            this.licensed = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getDefaultLogo = function () {
            return this.defaultLogo;
        };
    
        /**
         * Setter for DefaultLogo
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setDefaultLogo = function (value) {
            this.defaultLogo = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getTitleColor = function () {
            return this.titleColor;
        };
    
        /**
         * Setter for TitleColor
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setTitleColor = function (value) {
            this.titleColor = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getSubTitleColor = function () {
            return this.subTitleColor;
        };
    
        /**
         * Setter for SubTitleColor
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setSubTitleColor = function (value) {
            this.subTitleColor = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getETrustSymbol = function () {
            return this.eTrustSymbol;
        };
    
        /**
         * Setter for ETrustSymbol
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setETrustSymbol = function (value) {
            this.eTrustSymbol = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getDigitalMediaOrganizerSymbol = function () {
            return this.digitalMediaOrganizerSymbol;
        };
    
        /**
         * Setter for DigitalMediaOrganizerSymbol
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setDigitalMediaOrganizerSymbol = function (value) {
            this.digitalMediaOrganizerSymbol = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getGooglePlus = function () {
            return this.googlePlus;
        };
    
        /**
         * Setter for GooglePlus
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setGooglePlus = function (value) {
            this.googlePlus = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getTelegram = function () {
            return this.telegram;
        };
    
        /**
         * Setter for Telegram
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setTelegram = function (value) {
            this.telegram = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getInstagram = function () {
            return this.instagram;
        };
    
        /**
         * Setter for Instagram
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setInstagram = function (value) {
            this.instagram = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getFaceBook = function () {
            return this.faceBook;
        };
    
        /**
         * Setter for FaceBook
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setFaceBook = function (value) {
            this.faceBook = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getTwitter = function () {
            return this.twitter;
        };
    
        /**
         * Setter for Twitter
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setTwitter = function (value) {
            this.twitter = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getSaturdayToWednesdayFromHour = function () {
            return this.saturdayToWednesdayFromHour;
        };
    
        /**
         * Setter for SaturdayToWednesdayFromHour
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setSaturdayToWednesdayFromHour = function (value) {
            this.saturdayToWednesdayFromHour = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getSaturdayToWednesdayToHour = function () {
            return this.saturdayToWednesdayToHour;
        };
    
        /**
         * Setter for SaturdayToWednesdayToHour
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setSaturdayToWednesdayToHour = function (value) {
            this.saturdayToWednesdayToHour = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getThursdayFromHour = function () {
            return this.thursdayFromHour;
        };
    
        /**
         * Setter for ThursdayFromHour
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setThursdayFromHour = function (value) {
            this.thursdayFromHour = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getThursdayToHour = function () {
            return this.thursdayToHour;
        };
    
        /**
         * Setter for ThursdayToHour
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setThursdayToHour = function (value) {
            this.thursdayToHour = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getFridayFromHour = function () {
            return this.fridayFromHour;
        };
    
        /**
         * Setter for FridayFromHour
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setFridayFromHour = function (value) {
            this.fridayFromHour = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getFridayToHour = function () {
            return this.fridayToHour;
        };
    
        /**
         * Setter for FridayToHour
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setFridayToHour = function (value) {
            this.fridayToHour = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileHeaderId = function () {
            return this.metaMediaFileHeaderId;
        };
    
        /**
         * Setter for MetaMediaFileHeaderId
         * 
         * @param {int} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileHeaderId = function (value) {
            this.metaMediaFileHeaderId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileHeaderUrl = function () {
            return this.metaMediaFileHeaderUrl;
        };
    
        /**
         * Setter for MetaMediaFileHeaderUrl
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileHeaderUrl = function (value) {
            this.metaMediaFileHeaderUrl = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileLogoId = function () {
            return this.metaMediaFileLogoId;
        };
    
        /**
         * Setter for MetaMediaFileLogoId
         * 
         * @param {int} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileLogoId = function (value) {
            this.metaMediaFileLogoId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileLogoUrl = function () {
            return this.metaMediaFileLogoUrl;
        };
    
        /**
         * Setter for MetaMediaFileLogoUrl
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileLogoUrl = function (value) {
            this.metaMediaFileLogoUrl = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileFaviconId = function () {
            return this.metaMediaFileFaviconId;
        };
    
        /**
         * Setter for MetaMediaFileFaviconId
         * 
         * @param {int} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileFaviconId = function (value) {
            this.metaMediaFileFaviconId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileFaviconUrl = function () {
            return this.metaMediaFileFaviconUrl;
        };
    
        /**
         * Setter for MetaMediaFileFaviconUrl
         * 
         * @param {string} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileFaviconUrl = function (value) {
            this.metaMediaFileFaviconUrl = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileFooterId = function () {
            return this.metaMediaFileFooterId;
        };
    
        /**
         * Setter for MetaMediaFileFooterId
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileFooterId = function (value) {
            this.metaMediaFileFooterId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        InsuranceCentrePortal.prototype.getMetaMediaFileFooterUrl = function () {
            return this.metaMediaFileFooterUrl;
        };
    
        /**
         * Setter for MetaMediaFileFooterUrl
         * 
         * @param {string|null} value 
         */
        InsuranceCentrePortal.prototype.setMetaMediaFileFooterUrl = function (value) {
            this.metaMediaFileFooterUrl = value;
        };
    
        return InsuranceCentrePortal;
    }

}(angular));
