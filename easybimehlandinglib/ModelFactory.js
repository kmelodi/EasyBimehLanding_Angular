/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';
angular.module('EasyBimehLandingLib')
    .factory('ModelFactory', ['BaseModelUpload',
        'Upload',
        'BaseModelLiabilityDoctorInsurance',
        'LiabilityDoctorInsurance',
        'ActivityArea',
        'Expertise',
        'CommitmentCeiling',
        'InsuranceCompany',
        'InsuranceRiskLevel',
        'InsurancePolicyTerm',
        'Province',
        'ShippingType',
        'PostType',
        'InsurancePolicyCondition',
        'InsuranceDataLiabilityDoctorInsurance',
        'LiabilityDoctorInsurancePolicyExtendView',
        'LiabilityDoctorInsurancePolicyFilter',
        'BaseModelMedicalSpecialties',
        'ComboDataModel',
        'CarBrand',
        'BaseModelElectronicEquipmentInsurance',
        'CarBrandTips',
        'CarBrandTipsModel',
        'HasPlan',
        'ElectronicEquipmentInsurance',
        'Franchisee',
        'DeviceType',
        'InsuranceData',
        'ElectronicEquipmentInsurancePolicyExtendView',
        'ElectronicEquipmentInsurancePolicyFilter',
        'BaseModelDeviceBrandTypes',
        'DeviceBrandTypes',
        'BaseModelDiviceFranchisee',
        'DiviceFranchisee',
        'OtherInsuranceTypes',
        'SendSmsToken',
        'ExtraData',
        'Status200',
        'GetAccessTokenUserInfo',
        'Exception',
        'TargetSite',
        'CarBrands',
        'RiskLevel',
        'CarUses',
        'BaseModelFireInsurance',
        'FireInsurance',
        'InsuranceExtraCoverage',
        'InsuranceExtraCoverageExtraData',
        'EverySquareMeterCoverage',
        'InsuranceDataFireInsurance',
        'FireInsurancePolicyExtendView',
        'FireInsurancePolicyFilter',
        'BaseModelEarthquake',
        'Earthquake',
        'BaseModelTravelInsurance',
        'TravelInsurance',
        'Zone',
        'TravelDuration',
        'TravelAge',
        'InsuranceDataTravelInsurance',
        'TravelInsurancePolicyExtendView',
        'TravelInsurancePolicyExtend',
        'TravelInsurancePolicyFilter',
        'BaseModelElevatorInsurance',
        'ElevatorInsurance',
        'ElevatorType',
        'DefectOrganCoverage',
        'DeathCapitalCoverage',
        'FinancialCoverage',
        'MedicalCostCoverage',
        'InsuranceDataElevatorInsurance',
        'ElevatorInsurancePolicyExtendView',
        'ElevatorInsurancePolicyFilter',
        'BaseModelPortalLandingPage',
        'PortalLandingPage',
        'InsuranceGroup',
        'SummaryCard',
        'SummaryNotic',
        'ImageAlbum',
        'PopupImageGalleryie',
        'GalleryDetail',
        'VideoGallery',
        'InsuranceCentre',
        'InsuranceCentrePortal',
        'ExtraDataBaseModelPortalLandingPage',
        'BaseModelInsuranceCentrePolicyTypes',
        'InsuranceCentrePolicyTypes',
        'ExtraDataBaseModelInsuranceCentrePolicyTypes',
        'BaseModelDamageType',
        'DamageType',
        'InsuranceTypes',
        'InsuranceCompanies',
        'BaseModelTrakingCode',
        'TrackingCode',
        'TrackingDamageStatusTrackingCode',
        'TrackingDamageFileTrackinCode',
        'TrackingDamageRequest',
        'TrackingDamageStatus',
        'TrackingDamageFile',
        'TrackingDamage',
        'BaseModelStatusStatusCollections',
        'StatusStatusCollections',
        'BaseModelStatus',
        'Status',
        'BaseModelPortalLandingContactAbout',
        'PortalLandingContactAbout',
        'InsuranceCentreData',
        'BaseModelFaqInsuranceCentre',
        'FaqInsuranceCentre',
        'BaseModelInsurancePolicyTracking',
        'InsurancePolicyTracking',
        'BaseModelSpecialPlan',
        'SpecialPlan',
        'ExtraDataBaseModelSpecialPlan',
        'CarBrandModel',
        ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(BaseModelUpload,
        Upload,
        BaseModelLiabilityDoctorInsurance,
        LiabilityDoctorInsurance,
        ActivityArea,
        Expertise,
        CommitmentCeiling,
        InsuranceCompany,
        InsuranceRiskLevel,
        InsurancePolicyTerm,
        Province,
        ShippingType,
        PostType,
        InsurancePolicyCondition,
        InsuranceDataLiabilityDoctorInsurance,
        LiabilityDoctorInsurancePolicyExtendView,
        LiabilityDoctorInsurancePolicyFilter,
        BaseModelMedicalSpecialties,
        ComboDataModel,
        CarBrand,
        BaseModelElectronicEquipmentInsurance,
        CarBrandTips,
        CarBrandTipsModel,
        HasPlan,
        ElectronicEquipmentInsurance,
        Franchisee,
        DeviceType,
        InsuranceData,
        ElectronicEquipmentInsurancePolicyExtendView,
        ElectronicEquipmentInsurancePolicyFilter,
        BaseModelDeviceBrandTypes,
        DeviceBrandTypes,
        BaseModelDiviceFranchisee,
        DiviceFranchisee,
        OtherInsuranceTypes,
        SendSmsToken,
        ExtraData,
        Status200,
        GetAccessTokenUserInfo,
        Exception,
        TargetSite,
        CarBrands,
        RiskLevel,
        CarUses,
        BaseModelFireInsurance,
        FireInsurance,
        InsuranceExtraCoverage,
        InsuranceExtraCoverageExtraData,
        EverySquareMeterCoverage,
        InsuranceDataFireInsurance,
        FireInsurancePolicyExtendView,
        FireInsurancePolicyFilter,
        BaseModelEarthquake,
        Earthquake,
        BaseModelTravelInsurance,
        TravelInsurance,
        Zone,
        TravelDuration,
        TravelAge,
        InsuranceDataTravelInsurance,
        TravelInsurancePolicyExtendView,
        TravelInsurancePolicyExtend,
        TravelInsurancePolicyFilter,
        BaseModelElevatorInsurance,
        ElevatorInsurance,
        ElevatorType,
        DefectOrganCoverage,
        DeathCapitalCoverage,
        FinancialCoverage,
        MedicalCostCoverage,
        InsuranceDataElevatorInsurance,
        ElevatorInsurancePolicyExtendView,
        ElevatorInsurancePolicyFilter,
        BaseModelPortalLandingPage,
        PortalLandingPage,
        InsuranceGroup,
        SummaryCard,
        SummaryNotic,
        ImageAlbum,
        PopupImageGalleryie,
        GalleryDetail,
        VideoGallery,
        InsuranceCentre,
        InsuranceCentrePortal,
        ExtraDataBaseModelPortalLandingPage,
        BaseModelInsuranceCentrePolicyTypes,
        InsuranceCentrePolicyTypes,
        ExtraDataBaseModelInsuranceCentrePolicyTypes,
        BaseModelDamageType,
        DamageType,
        InsuranceTypes,
        InsuranceCompanies,
        BaseModelTrakingCode,
        TrackingCode,
        TrackingDamageStatusTrackingCode,
        TrackingDamageFileTrackinCode,
        TrackingDamageRequest,
        TrackingDamageStatus,
        TrackingDamageFile,
        TrackingDamage,
        BaseModelStatusStatusCollections,
        StatusStatusCollections,
        BaseModelStatus,
        Status,
        BaseModelPortalLandingContactAbout,
        PortalLandingContactAbout,
        InsuranceCentreData,
        BaseModelFaqInsuranceCentre,
        FaqInsuranceCentre,
        BaseModelInsurancePolicyTracking,
        InsurancePolicyTracking,
        BaseModelSpecialPlan,
        SpecialPlan,
        ExtraDataBaseModelSpecialPlan,
        CarBrandModel) {

		var classMap = {
            BaseModelUpload: BaseModelUpload,
            Upload: Upload,
            BaseModelLiabilityDoctorInsurance: BaseModelLiabilityDoctorInsurance,
            LiabilityDoctorInsurance: LiabilityDoctorInsurance,
            ActivityArea: ActivityArea,
            Expertise: Expertise,
            CommitmentCeiling: CommitmentCeiling,
            InsuranceCompany: InsuranceCompany,
            InsuranceRiskLevel: InsuranceRiskLevel,
            InsurancePolicyTerm: InsurancePolicyTerm,
            Province: Province,
            ShippingType: ShippingType,
            PostType: PostType,
            InsurancePolicyCondition: InsurancePolicyCondition,
            InsuranceDataLiabilityDoctorInsurance: InsuranceDataLiabilityDoctorInsurance,
            LiabilityDoctorInsurancePolicyExtendView: LiabilityDoctorInsurancePolicyExtendView,
            LiabilityDoctorInsurancePolicyFilter: LiabilityDoctorInsurancePolicyFilter,
            BaseModelMedicalSpecialties: BaseModelMedicalSpecialties,
            ComboDataModel: ComboDataModel,
            CarBrand: CarBrand,
            BaseModelElectronicEquipmentInsurance: BaseModelElectronicEquipmentInsurance,
            CarBrandTips: CarBrandTips,
            CarBrandTipsModel: CarBrandTipsModel,
            HasPlan: HasPlan,
            ElectronicEquipmentInsurance: ElectronicEquipmentInsurance,
            Franchisee: Franchisee,
            DeviceType: DeviceType,
            InsuranceData: InsuranceData,
            ElectronicEquipmentInsurancePolicyExtendView: ElectronicEquipmentInsurancePolicyExtendView,
            ElectronicEquipmentInsurancePolicyFilter: ElectronicEquipmentInsurancePolicyFilter,
            BaseModelDeviceBrandTypes: BaseModelDeviceBrandTypes,
            DeviceBrandTypes: DeviceBrandTypes,
            BaseModelDiviceFranchisee: BaseModelDiviceFranchisee,
            DiviceFranchisee: DiviceFranchisee,
            OtherInsuranceTypes: OtherInsuranceTypes,
            SendSmsToken: SendSmsToken,
            ExtraData: ExtraData,
            Status200: Status200,
            GetAccessTokenUserInfo: GetAccessTokenUserInfo,
            Exception: Exception,
            TargetSite: TargetSite,
            CarBrands: CarBrands,
            RiskLevel: RiskLevel,
            CarUses: CarUses,
            BaseModelFireInsurance: BaseModelFireInsurance,
            FireInsurance: FireInsurance,
            InsuranceExtraCoverage: InsuranceExtraCoverage,
            InsuranceExtraCoverageExtraData: InsuranceExtraCoverageExtraData,
            EverySquareMeterCoverage: EverySquareMeterCoverage,
            InsuranceDataFireInsurance: InsuranceDataFireInsurance,
            FireInsurancePolicyExtendView: FireInsurancePolicyExtendView,
            FireInsurancePolicyFilter: FireInsurancePolicyFilter,
            BaseModelEarthquake: BaseModelEarthquake,
            Earthquake: Earthquake,
            BaseModelTravelInsurance: BaseModelTravelInsurance,
            TravelInsurance: TravelInsurance,
            Zone: Zone,
            TravelDuration: TravelDuration,
            TravelAge: TravelAge,
            InsuranceDataTravelInsurance: InsuranceDataTravelInsurance,
            TravelInsurancePolicyExtendView: TravelInsurancePolicyExtendView,
            TravelInsurancePolicyExtend: TravelInsurancePolicyExtend,
            TravelInsurancePolicyFilter: TravelInsurancePolicyFilter,
            BaseModelElevatorInsurance: BaseModelElevatorInsurance,
            ElevatorInsurance: ElevatorInsurance,
            ElevatorType: ElevatorType,
            DefectOrganCoverage: DefectOrganCoverage,
            DeathCapitalCoverage: DeathCapitalCoverage,
            FinancialCoverage: FinancialCoverage,
            MedicalCostCoverage: MedicalCostCoverage,
            InsuranceDataElevatorInsurance: InsuranceDataElevatorInsurance,
            ElevatorInsurancePolicyExtendView: ElevatorInsurancePolicyExtendView,
            ElevatorInsurancePolicyFilter: ElevatorInsurancePolicyFilter,
            BaseModelPortalLandingPage: BaseModelPortalLandingPage,
            PortalLandingPage: PortalLandingPage,
            InsuranceGroup: InsuranceGroup,
            SummaryCard: SummaryCard,
            SummaryNotic: SummaryNotic,
            ImageAlbum: ImageAlbum,
            PopupImageGalleryie: PopupImageGalleryie,
            GalleryDetail: GalleryDetail,
            VideoGallery: VideoGallery,
            InsuranceCentre: InsuranceCentre,
            InsuranceCentrePortal: InsuranceCentrePortal,
            ExtraDataBaseModelPortalLandingPage: ExtraDataBaseModelPortalLandingPage,
            BaseModelInsuranceCentrePolicyTypes: BaseModelInsuranceCentrePolicyTypes,
            InsuranceCentrePolicyTypes: InsuranceCentrePolicyTypes,
            ExtraDataBaseModelInsuranceCentrePolicyTypes: ExtraDataBaseModelInsuranceCentrePolicyTypes,
            BaseModelDamageType: BaseModelDamageType,
            DamageType: DamageType,
            InsuranceTypes: InsuranceTypes,
            InsuranceCompanies: InsuranceCompanies,
            BaseModelTrakingCode: BaseModelTrakingCode,
            TrackingCode: TrackingCode,
            TrackingDamageStatusTrackingCode: TrackingDamageStatusTrackingCode,
            TrackingDamageFileTrackinCode: TrackingDamageFileTrackinCode,
            TrackingDamageRequest: TrackingDamageRequest,
            TrackingDamageStatus: TrackingDamageStatus,
            TrackingDamageFile: TrackingDamageFile,
            TrackingDamage: TrackingDamage,
            BaseModelStatusStatusCollections: BaseModelStatusStatusCollections,
            StatusStatusCollections: StatusStatusCollections,
            BaseModelStatus: BaseModelStatus,
            Status: Status,
            BaseModelPortalLandingContactAbout: BaseModelPortalLandingContactAbout,
            PortalLandingContactAbout: PortalLandingContactAbout,
            InsuranceCentreData: InsuranceCentreData,
            BaseModelFaqInsuranceCentre: BaseModelFaqInsuranceCentre,
            FaqInsuranceCentre: FaqInsuranceCentre,
            BaseModelInsurancePolicyTracking: BaseModelInsurancePolicyTracking,
            InsurancePolicyTracking: InsurancePolicyTracking,
            BaseModelSpecialPlan: BaseModelSpecialPlan,
            SpecialPlan: SpecialPlan,
            ExtraDataBaseModelSpecialPlan: ExtraDataBaseModelSpecialPlan,
            CarBrandModel: CarBrandModel
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
