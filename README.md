# Getting started

EasyBimehConnect 

 یک ساب برند از ایزی بیمه است که وظیفه ارائه خدمات

 B2B و B2B2C

را برپایه وب سرویس و وایت لیبل بر عهده دارد. اگر اپلیکیشن و یا سایت غیر بیمه‌ای دارید و تمایل به فروش بیمه نامه دارید از امروز میتوانید با کمترین هزینه و کمترین زمان به زنجیره نوآوری در صنعت بیمه متصل شوید و تجارت جدیدی بسازید

به دلیل گستردگی پروژه و برای دسترسی بهتر، این پروژه به بخش های مختلف تقسیم شده است

و هر بخش در 10 پلتفرم مختلف، ارایه شده است

در این بخش، به وب سرویس های مربوط به صفحه ی لندینگ مرکز بیمه، دسترسی خواهید داشت که 

اطلاعات هر پلتفرم را میتوانید بصورت تجمیعی در آدرس زیر مشاهده نمایید

https://www.apimatic.io/apidocs/easybimehlanding

و یا بصورت مجزا در آدرس های زیر قابل درسترس می باشند

1- Android: https://github.com/kmelodi/EasyBimehLanding_Android

2- .Net: https://github.com/kmelodi/EasyBimehLanding_.NET

3- Ios: https://github.com/kmelodi/EasyBimehLanding_IOS

4- Java: https://github.com/kmelodi/EasyBimehLanding_JAVA

5- Php: https://github.com/kmelodi/EasyBimehLanding_PHP

6- Python: https://github.com/kmelodi/EasyBimehLanding_Python

7- Ruby: https://github.com/kmelodi/EasyBimehLanding_Ruby

8- Angular: https://github.com/kmelodi/EasyBimehLanding_Angular

9- NodeJs: https://github.com/kmelodi/EasyBimehLanding_NodeJs

10- Go: https://github.com/kmelodi/EasyBimehLanding_Go


برای اطلاعات بیشتر به آدرس زیر مراجعه نمایید

https://easybimeh.com/ebconnect

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `EasyBimehLandingLib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Easy%20Bimeh%20Landing-Angular&projectName=EasyBimehLandingLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Easy%20Bimeh%20Landing-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Easy%20Bimeh%20Landing-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/EasyBimehLandingLib/Module.js"></script>
    <script src="scripts/EasyBimehLandingLib/Configuration.js"></script>
    <script src="scripts/EasyBimehLandingLib/ModelFactory.js"></script>
    <script src="scripts/EasyBimehLandingLib/ObjectMapper.js"></script>
    <script src="scripts/EasyBimehLandingLib/APIHelper.js"></script>
    <script src="scripts/EasyBimehLandingLib/Http/Client/HttpContext.js"></script>
    <script src="scripts/EasyBimehLandingLib/Http/Client/HttpClient.js"></script>
    <script src="scripts/EasyBimehLandingLib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/EasyBimehLandingLib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/EasyBimehLandingLib/Controllers/BaseController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/FileManagerController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/LiabilityDoctorInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/CarBodyController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/ElectronicEquipmentInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/OtherInsuranceTypesController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/ThirdPartyInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/MotorcycleInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/FireInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/EarthquakeInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/TravelInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/ElevatorInsuranceController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/MainController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/ComboDataController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/TrackingDamageController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/FooterController.js"></script>
    <script src="scripts/EasyBimehLandingLib/Controllers/InsurancePolicyPlanController.js"></script>


    <!-- Models -->
    <script src="scripts/EasyBimehLandingLib/Models/BaseModel.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelUpload.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Upload.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelLiabilityDoctorInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/LiabilityDoctorInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ActivityArea.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Expertise.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/CommitmentCeiling.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceCompany.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceRiskLevel.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsurancePolicyTerm.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Province.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ShippingType.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/PostType.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsurancePolicyCondition.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceDataLiabilityDoctorInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/LiabilityDoctorInsurancePolicyExtendView.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/LiabilityDoctorInsurancePolicyFilter.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelMedicalSpecialties.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ComboDataModel.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/CarBrand.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelElectronicEquipmentInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/CarBrandTips.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/CarBrandTipsModel.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/HasPlan.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ElectronicEquipmentInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Franchisee.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/DeviceType.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceData.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ElectronicEquipmentInsurancePolicyExtendView.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ElectronicEquipmentInsurancePolicyFilter.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelDeviceBrandTypes.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/DeviceBrandTypes.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelDiviceFranchisee.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/DiviceFranchisee.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/OtherInsuranceTypes.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/SendSmsToken.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ExtraData.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Status200.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/GetAccessTokenUserInfo.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Exception.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TargetSite.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/CarBrands.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/RiskLevel.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/CarUses.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelFireInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/FireInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceExtraCoverage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceExtraCoverageExtraData.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/EverySquareMeterCoverage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceDataFireInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/FireInsurancePolicyExtendView.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/FireInsurancePolicyFilter.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelEarthquake.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Earthquake.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelTravelInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TravelInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Zone.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TravelDuration.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TravelAge.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceDataTravelInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TravelInsurancePolicyExtendView.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TravelInsurancePolicyExtend.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TravelInsurancePolicyFilter.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelElevatorInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ElevatorInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ElevatorType.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/DefectOrganCoverage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/DeathCapitalCoverage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/FinancialCoverage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/MedicalCostCoverage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceDataElevatorInsurance.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ElevatorInsurancePolicyExtendView.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ElevatorInsurancePolicyFilter.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelPortalLandingPage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/PortalLandingPage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceGroup.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/SummaryCard.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/SummaryNotic.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ImageAlbum.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/PopupImageGalleryie.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/GalleryDetail.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/VideoGallery.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceCentre.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceCentrePortal.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ExtraDataBaseModelPortalLandingPage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelInsuranceCentrePolicyTypes.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceCentrePolicyTypes.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ExtraDataBaseModelInsuranceCentrePolicyTypes.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelDamageType.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/DamageType.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceTypes.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceCompanies.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelTrakingCode.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TrackingCode.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TrackingDamageStatusTrackingCode.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TrackingDamageFileTrackinCode.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TrackingDamageRequest.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TrackingDamageStatus.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TrackingDamageFile.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/TrackingDamage.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelStatusStatusCollections.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/StatusStatusCollections.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelStatus.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/Status.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelPortalLandingContactAbout.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/PortalLandingContactAbout.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsuranceCentreData.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelFaqInsuranceCentre.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/FaqInsuranceCentre.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelInsurancePolicyTracking.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/InsurancePolicyTracking.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/BaseModelSpecialPlan.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/SpecialPlan.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/ExtraDataBaseModelSpecialPlan.js"></script>
    <script src="scripts/EasyBimehLandingLib/Models/CarBrandModel.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['EasyBimehLandingLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [EasyBimehLandingLib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### 




# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [FileManagerController](#file_manager_controller)
* [LiabilityDoctorInsuranceController](#liability_doctor_insurance_controller)
* [CarBodyController](#car_body_controller)
* [ElectronicEquipmentInsuranceController](#electronic_equipment_insurance_controller)
* [OtherInsuranceTypesController](#other_insurance_types_controller)
* [ThirdPartyInsuranceController](#third_party_insurance_controller)
* [MotorcycleInsuranceController](#motorcycle_insurance_controller)
* [FireInsuranceController](#fire_insurance_controller)
* [EarthquakeInsuranceController](#earthquake_insurance_controller)
* [TravelInsuranceController](#travel_insurance_controller)
* [ElevatorInsuranceController](#elevator_insurance_controller)
* [MainController](#main_controller)
* [ComboDataController](#combo_data_controller)
* [TrackingDamageController](#tracking_damage_controller)
* [FooterController](#footer_controller)
* [InsurancePolicyPlanController](#insurance_policy_plan_controller)

## <a name="file_manager_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FileManagerController") FileManagerController

### Get singleton instance

The singleton instance of the ``` FileManagerController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, FileManagerController, BaseModelUpload){
	});
```

### <a name="upload"></a>![Method: ](https://apidocs.io/img/method.png ".FileManagerController.upload") upload

> آپلود فایل در ایزی بیمه
> بعد از آپلود، ادرس فایل باید در api های بعدی ارسال شود.


```javascript
function upload(subDomain, xApiKey, file)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |
| file |  ``` Required ```  | فایل ارسالی |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FileManagerController, BaseModelUpload){
        var subDomain = 'hfz1';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';
        var file = '';


		var result = FileManagerController.upload(subDomain, xApiKey, file);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="liability_doctor_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LiabilityDoctorInsuranceController") LiabilityDoctorInsuranceController

### Get singleton instance

The singleton instance of the ``` LiabilityDoctorInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, LiabilityDoctorInsuranceController, BaseModelLiabilityDoctorInsurance, BaseModelMedicalSpecialties){
	});
```

### <a name="get_liability_doctor_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".LiabilityDoctorInsuranceController.getLiabilityDoctorInsurance") getLiabilityDoctorInsurance

> در یافت اطلاعات اولیه برای استعلام بیمه مسئولیت پزشکان


```javascript
function getLiabilityDoctorInsurance(subDomain, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LiabilityDoctorInsuranceController, BaseModelLiabilityDoctorInsurance){
        var subDomain = 'hfz1';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = LiabilityDoctorInsuranceController.getLiabilityDoctorInsurance(subDomain, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_medical_specialties"></a>![Method: ](https://apidocs.io/img/method.png ".LiabilityDoctorInsuranceController.getMedicalSpecialties") getMedicalSpecialties

> دریافت لیست تخصص های پزشکی


```javascript
function getMedicalSpecialties(id, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | نوع تخصص => ParamedicalExpertise => پیراپزشکی MedicalExpertise => پزشکی |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, LiabilityDoctorInsuranceController, BaseModelMedicalSpecialties){
        var id = 'ParamedicalExpertise';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = LiabilityDoctorInsuranceController.getMedicalSpecialties(id, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="car_body_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarBodyController") CarBodyController

### Get singleton instance

The singleton instance of the ``` CarBodyController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CarBodyController, CarBrand, CarBrandTips, HasPlan){
	});
```

### <a name="get_car_brand"></a>![Method: ](https://apidocs.io/img/method.png ".CarBodyController.getCarBrand") getCarBrand

> دریافت برند خودرو


```javascript
function getCarBrand(xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | شناسه ی اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarBodyController, CarBrand){
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = CarBodyController.getCarBrand(xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_car_brand_tips"></a>![Method: ](https://apidocs.io/img/method.png ".CarBodyController.getCarBrandTips") getCarBrandTips

> دریافت لیست تیپ خودرو


```javascript
function getCarBrandTips(carBrandId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carBrandId |  ``` Required ```  | شناسه ی برند خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarBodyController, CarBrandTips){
        var carBrandId = 190;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = CarBodyController.getCarBrandTips(carBrandId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_has_plan"></a>![Method: ](https://apidocs.io/img/method.png ".CarBodyController.getHasPlan") getHasPlan

> آیا این نوع بیمه نامه، طرح بیمه ای دارد؟


```javascript
function getHasPlan(subDomain, insurancePolicyType, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه => بیمه بدنه=2 |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CarBodyController, HasPlan){
        var subDomain = 'hfz1';
        var insurancePolicyType = 2;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = CarBodyController.getHasPlan(subDomain, insurancePolicyType, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="electronic_equipment_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ElectronicEquipmentInsuranceController") ElectronicEquipmentInsuranceController

### Get singleton instance

The singleton instance of the ``` ElectronicEquipmentInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ElectronicEquipmentInsuranceController, BaseModelElectronicEquipmentInsurance, BaseModelDeviceBrandTypes, BaseModelDiviceFranchisee){
	});
```

### <a name="get_electronic_equipment_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".ElectronicEquipmentInsuranceController.getElectronicEquipmentInsurance") getElectronicEquipmentInsurance

> دریافت اطلاعات اولیه استعلام بیمه نامه ی تجهیزات الکترونیک


```javascript
function getElectronicEquipmentInsurance(subDomain, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ElectronicEquipmentInsuranceController, BaseModelElectronicEquipmentInsurance){
        var subDomain = 'subDomain';
        var xApiKey = 'x-api-key';


		var result = ElectronicEquipmentInsuranceController.getElectronicEquipmentInsurance(subDomain, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_device_brand_types"></a>![Method: ](https://apidocs.io/img/method.png ".ElectronicEquipmentInsuranceController.getDeviceBrandTypes") getDeviceBrandTypes

> دریافت لیست نوع برند دستگاه


```javascript
function getDeviceBrandTypes(deviceGroup, deviceTypeId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| deviceGroup |  ``` Required ```  | شناسه ی گروه دستگاه |
| deviceTypeId |  ``` Required ```  | شناسه ی نوع دستگاه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ElectronicEquipmentInsuranceController, BaseModelDeviceBrandTypes){
        var deviceGroup = 1;
        var deviceTypeId = 1;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ElectronicEquipmentInsuranceController.getDeviceBrandTypes(deviceGroup, deviceTypeId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_divice_franchisee"></a>![Method: ](https://apidocs.io/img/method.png ".ElectronicEquipmentInsuranceController.getDiviceFranchisee") getDiviceFranchisee

> دریافت لیست فرانشیر استعلام بیمه نامه ی تجهیزات الکترونیک


```javascript
function getDiviceFranchisee(deviceModelId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| deviceModelId |  ``` Required ```  | شناسه ی مدل دستگاه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ElectronicEquipmentInsuranceController, BaseModelDiviceFranchisee){
        var deviceModelId = 1340;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ElectronicEquipmentInsuranceController.getDiviceFranchisee(deviceModelId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="other_insurance_types_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OtherInsuranceTypesController") OtherInsuranceTypesController

### Get singleton instance

The singleton instance of the ``` OtherInsuranceTypesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, OtherInsuranceTypesController, OtherInsuranceTypes, SendSmsToken, Status200){
	});
```

### <a name="get_other_insurance_types"></a>![Method: ](https://apidocs.io/img/method.png ".OtherInsuranceTypesController.getOtherInsuranceTypes") getOtherInsuranceTypes

> دریافت لیست سایر بیمه نامه ها


```javascript
function getOtherInsuranceTypes(subDomain, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, OtherInsuranceTypesController, OtherInsuranceTypes){
        var subDomain = 'hfz1';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = OtherInsuranceTypesController.getOtherInsuranceTypes(subDomain, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_send_sms_token"></a>![Method: ](https://apidocs.io/img/method.png ".OtherInsuranceTypesController.getSendSmsToken") getSendSmsToken

> ارسال توکن تایید شماره تماس، برای احراز هویت کاربر


```javascript
function getSendSmsToken(mobile, insuranceCentreSubDomain, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mobile |  ``` Required ```  | شماره موبایل |
| insuranceCentreSubDomain |  ``` Required ```  | دامنه یا زیردامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, OtherInsuranceTypesController, SendSmsToken){
        var mobile = '09018318086';
        var insuranceCentreSubDomain = 'hfz1';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = OtherInsuranceTypesController.getSendSmsToken(mobile, insuranceCentreSubDomain, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_verify_sms_token"></a>![Method: ](https://apidocs.io/img/method.png ".OtherInsuranceTypesController.getVerifySmsToken") getVerifySmsToken

> تایید توکن پیامک شده به کاربر، برای احراز هویت


```javascript
function getVerifySmsToken(mobile, token, insuranceCentreSubDomain, aliasName, resource, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mobile |  ``` Required ```  | شماره موبایل |
| token |  ``` Required ```  | توکن دریافتی کاربر از پیامک |
| insuranceCentreSubDomain |  ``` Required ```  | دامنه یا زیر دامنه ی اختصاصی مرکز بیمه |
| aliasName |  ``` Required ```  | نام و نام خانوادگی کاربر |
| resource |  ``` Required ```  | دامنه ی درخواست دهنده |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, OtherInsuranceTypesController, Status200){
        var mobile = '09018318086';
        var token = 27763;
        var insuranceCentreSubDomain = 'hfz1';
        var aliasName = 'علی موسوی';
        var resource = 'https://hfz1.easybimeh.com';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = OtherInsuranceTypesController.getVerifySmsToken(mobile, token, insuranceCentreSubDomain, aliasName, resource, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |




[Back to List of Controllers](#list_of_controllers)

## <a name="third_party_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ThirdPartyInsuranceController") ThirdPartyInsuranceController

### Get singleton instance

The singleton instance of the ``` ThirdPartyInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ThirdPartyInsuranceController, CarBrands, RiskLevel, CarBrandTips, CarUses, HasPlan){
	});
```

### <a name="get_car_brands"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getCarBrands") getCarBrands

> دریافت لیست برند خودرو ها


```javascript
function getCarBrands(carTypeGroup, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carTypeGroup |  ``` Required ```  | شناسه ی گروه خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ThirdPartyInsuranceController, CarBrands){
        var carTypeGroup = 1;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ThirdPartyInsuranceController.getCarBrands(carTypeGroup, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_risk_level"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getRiskLevel") getRiskLevel

> دریافت لیست تخفیف های بیمه


```javascript
function getRiskLevel(insurancePolicyType, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ThirdPartyInsuranceController, RiskLevel){
        var insurancePolicyType = 0;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ThirdPartyInsuranceController.getRiskLevel(insurancePolicyType, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_car_brand_tips"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getCarBrandTips") getCarBrandTips

> دریافت لیست تیپ خودرو


```javascript
function getCarBrandTips(carBrandId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carBrandId |  ``` Required ```  | شناسه ی برند خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ThirdPartyInsuranceController, CarBrandTips){
        var carBrandId = 190;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ThirdPartyInsuranceController.getCarBrandTips(carBrandId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_car_uses"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getCarUses") getCarUses

> دریافت لیست نوع کاربری خودرو


```javascript
function getCarUses(carTypeId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carTypeId |  ``` Required ```  | شناسه ی نوع خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ThirdPartyInsuranceController, CarUses){
        var carTypeId = 103;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ThirdPartyInsuranceController.getCarUses(carTypeId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_has_plan"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getHasPlan") getHasPlan

> آیا این نوع بیمه نامه، طرح بیمه ای دارد؟


```javascript
function getHasPlan(subDomain, insurancePolicyType, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ThirdPartyInsuranceController, HasPlan){
        var subDomain = 'hfz1';
        var insurancePolicyType = 0;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ThirdPartyInsuranceController.getHasPlan(subDomain, insurancePolicyType, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="motorcycle_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MotorcycleInsuranceController") MotorcycleInsuranceController

### Get singleton instance

The singleton instance of the ``` MotorcycleInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, MotorcycleInsuranceController, CarBrands, CarBrandTips, HasPlan){
	});
```

### <a name="get_car_brands"></a>![Method: ](https://apidocs.io/img/method.png ".MotorcycleInsuranceController.getCarBrands") getCarBrands

> دریافت لیست برند موتور سیکلت


```javascript
function getCarBrands(carTypeGroup, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carTypeGroup |  ``` Required ```  | شناسه ی گروه خودرویی، موتور سیکلت =>0 |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MotorcycleInsuranceController, CarBrands){
        var carTypeGroup = 0;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = MotorcycleInsuranceController.getCarBrands(carTypeGroup, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_car_brand_tips"></a>![Method: ](https://apidocs.io/img/method.png ".MotorcycleInsuranceController.getCarBrandTips") getCarBrandTips

> دریافت لیست تیپ موتور سیکلت


```javascript
function getCarBrandTips(carBrandId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carBrandId |  ``` Required ```  | شناسه ی برند موتور سیکلت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MotorcycleInsuranceController, CarBrandTips){
        var carBrandId = 472;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = MotorcycleInsuranceController.getCarBrandTips(carBrandId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_has_plan"></a>![Method: ](https://apidocs.io/img/method.png ".MotorcycleInsuranceController.getHasPlan") getHasPlan

> آیا این نوع بیمه نامه، طرح بیمه ای دارد؟


```javascript
function getHasPlan(subDomain, insurancePolicyType, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MotorcycleInsuranceController, HasPlan){
        var subDomain = 'hfz1';
        var insurancePolicyType = 7;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = MotorcycleInsuranceController.getHasPlan(subDomain, insurancePolicyType, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="fire_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FireInsuranceController") FireInsuranceController

### Get singleton instance

The singleton instance of the ``` FireInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, FireInsuranceController, BaseModelFireInsurance){
	});
```

### <a name="get_fire_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".FireInsuranceController.getFireInsurance") getFireInsurance

> دریافت اطلاعات پایه بیمه ی آتش سوزی


```javascript
function getFireInsurance(subDomain, insurancePolicyId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FireInsuranceController, BaseModelFireInsurance){
        var subDomain = 'hfz1';
        var insurancePolicyId = 0;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = FireInsuranceController.getFireInsurance(subDomain, insurancePolicyId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="earthquake_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EarthquakeInsuranceController") EarthquakeInsuranceController

### Get singleton instance

The singleton instance of the ``` EarthquakeInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, EarthquakeInsuranceController, BaseModelEarthquake){
	});
```

### <a name="get_earthquake"></a>![Method: ](https://apidocs.io/img/method.png ".EarthquakeInsuranceController.getEarthquake") getEarthquake

> دریافت اطلاعات پایه ی بیمه ی زلزله


```javascript
function getEarthquake(subDomain, insurancePolicyId, insurancePolicyType, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EarthquakeInsuranceController, BaseModelEarthquake){
        var subDomain = 'hfz1';
        var insurancePolicyId = 0;
        var insurancePolicyType = 6;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = EarthquakeInsuranceController.getEarthquake(subDomain, insurancePolicyId, insurancePolicyType, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="travel_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TravelInsuranceController") TravelInsuranceController

### Get singleton instance

The singleton instance of the ``` TravelInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TravelInsuranceController, BaseModelTravelInsurance){
	});
```

### <a name="get_travel_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".TravelInsuranceController.getTravelInsurance") getTravelInsurance

> TODO: Add Description


```javascript
function getTravelInsurance(subDomain, insurancePolicyId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TravelInsuranceController, BaseModelTravelInsurance){
        var subDomain = 'hfz1';
        var insurancePolicyId = 0;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = TravelInsuranceController.getTravelInsurance(subDomain, insurancePolicyId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="elevator_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ElevatorInsuranceController") ElevatorInsuranceController

### Get singleton instance

The singleton instance of the ``` ElevatorInsuranceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ElevatorInsuranceController, BaseModelElevatorInsurance){
	});
```

### <a name="get_elevator_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".ElevatorInsuranceController.getElevatorInsurance") getElevatorInsurance

> دریافت اطلاعات پایه ی بیمه نامه ی آسانسور


```javascript
function getElevatorInsurance(subDomain, insurancePolicyId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ElevatorInsuranceController, BaseModelElevatorInsurance){
        var subDomain = 'hfz1';
        var insurancePolicyId = 0;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ElevatorInsuranceController.getElevatorInsurance(subDomain, insurancePolicyId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="main_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MainController") MainController

### Get singleton instance

The singleton instance of the ``` MainController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, MainController, BaseModelPortalLandingPage, BaseModelInsuranceCentrePolicyTypes){
	});
```

### <a name="get_portal_landing_page"></a>![Method: ](https://apidocs.io/img/method.png ".MainController.getPortalLandingPage") getPortalLandingPage

> در یافت اطلاعات لندینگ مراکز بیمه


```javascript
function getPortalLandingPage(id, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MainController, BaseModelPortalLandingPage){
        var id = 'hfz1';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = MainController.getPortalLandingPage(id, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_insurance_centre_policy_types"></a>![Method: ](https://apidocs.io/img/method.png ".MainController.getInsuranceCentrePolicyTypes") getInsuranceCentrePolicyTypes

> دریافت لیست بیمه ی های ارائه شده توسط مرکز بیمه


```javascript
function getInsuranceCentrePolicyTypes(subDomain, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MainController, BaseModelInsuranceCentrePolicyTypes){
        var subDomain = 'hfz1';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = MainController.getInsuranceCentrePolicyTypes(subDomain, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="combo_data_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ComboDataController") ComboDataController

### Get singleton instance

The singleton instance of the ``` ComboDataController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ComboDataController, BaseModelDamageType, InsuranceTypes, InsuranceCompanies){
	});
```

### <a name="get_damage_type"></a>![Method: ](https://apidocs.io/img/method.png ".ComboDataController.getDamageType") getDamageType

> دریافت لیست نوع خسارت


```javascript
function getDamageType(xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComboDataController, BaseModelDamageType){
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ComboDataController.getDamageType(xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_insurance_types"></a>![Method: ](https://apidocs.io/img/method.png ".ComboDataController.getInsuranceTypes") getInsuranceTypes

> دریافت لیست نوع بیمه نامه


```javascript
function getInsuranceTypes(subDomain, issueInsurance, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| issueInsurance |  ``` Required ```  | دریافت بیمه نامه های قابل صدور |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComboDataController, InsuranceTypes){
        var subDomain = 'hfz1';
        var issueInsurance = false;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ComboDataController.getInsuranceTypes(subDomain, issueInsurance, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_insurance_companies"></a>![Method: ](https://apidocs.io/img/method.png ".ComboDataController.getInsuranceCompanies") getInsuranceCompanies

> دریافت لیست شرکت های بیمه


```javascript
function getInsuranceCompanies(subDomain, insuranceTypeId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insuranceTypeId |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComboDataController, InsuranceCompanies){
        var subDomain = 'hfz1';
        var insuranceTypeId = 1;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = ComboDataController.getInsuranceCompanies(subDomain, insuranceTypeId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="tracking_damage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TrackingDamageController") TrackingDamageController

### Get singleton instance

The singleton instance of the ``` TrackingDamageController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, TrackingDamageController, BaseModelTrakingCode, TrackingDamage, BaseModelStatusStatusCollections, BaseModelStatus){
	});
```

### <a name="get_tracking_code"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.getTrackingCode") getTrackingCode

> استعلام وضعیت خسارت


```javascript
function getTrackingCode(mTrackingCode, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mTrackingCode |  ``` Required ```  | کد پیگیری خسارت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TrackingDamageController, BaseModelTrakingCode){
        var mTrackingCode = /{TrackingCode};
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = TrackingDamageController.getTrackingCode(mTrackingCode, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |




### <a name="create_tracking_damage"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.createTrackingDamage") createTrackingDamage

> ثبت خسارت بیمه


```javascript
function createTrackingDamage(body, xApiKey, contentType)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | اطلاعات خسارت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TrackingDamageController, TrackingDamage){
        var body = new TrackingDamageRequest({
  "personalityType": 0,
  "trackingDamageStatus": [
    {
      "trackingDamageFile": [
        {
          "id": 162747,
          "url": "https://media.easybimeh.com//Easybimeh/FileManager/InsuranceCentre/hfz1/637089119345134776.jpeg",
          "title": "کارت شناسایی"
        }
      ]
    }
  ],
  "description": "بدنه ی خودرو خسارت دیده",
  "insuranceTypeId": 1,
  "insuranceCompanyId": 34,
  "insurancePolicyNumber": "123456",
  "damageType": "مالی",
  "name": "کاظم",
  "nationalCode": "3080118383",
  "mobile": "09018318086",
  "insuredProfile": "پژو 405",
  "subDomain": "hfz1"
});
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';
        var contentType = 'application/json';


		var result = TrackingDamageController.createTrackingDamage(body, xApiKey, contentType);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_status_status_collections"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.getStatusStatusCollections") getStatusStatusCollections

> دریافت لیست وضعیت های خسارت


```javascript
function getStatusStatusCollections(statusType, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| statusType |  ``` Required ```  | نوع وضعیت ها ی خسارت => 0 |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TrackingDamageController, BaseModelStatusStatusCollections){
        var statusType = 0;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = TrackingDamageController.getStatusStatusCollections(statusType, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_status"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.getStatus") getStatus

> دریافت اطلاعات وضعیت


```javascript
function getStatus(entityId, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| entityId |  ``` Required ```  | شناسه ی وضعیت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, TrackingDamageController, BaseModelStatus){
        var entityId = 1129;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = TrackingDamageController.getStatus(entityId, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="footer_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FooterController") FooterController

### Get singleton instance

The singleton instance of the ``` FooterController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, FooterController, BaseModelPortalLandingContactAbout, BaseModelFaqInsuranceCentre, BaseModelInsurancePolicyTracking){
	});
```

### <a name="get_portal_landing_contact_about"></a>![Method: ](https://apidocs.io/img/method.png ".FooterController.getPortalLandingContactAbout") getPortalLandingContactAbout

> دریافت اطلاعات درباره ی ما


```javascript
function getPortalLandingContactAbout(xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FooterController, BaseModelPortalLandingContactAbout){
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = FooterController.getPortalLandingContactAbout(xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_faq_insurance_centre"></a>![Method: ](https://apidocs.io/img/method.png ".FooterController.getFaqInsuranceCentre") getFaqInsuranceCentre

> دریافت لیست سوالات متداول


```javascript
function getFaqInsuranceCentre(xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FooterController, BaseModelFaqInsuranceCentre){
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = FooterController.getFaqInsuranceCentre(xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_insurance_policy_tracking"></a>![Method: ](https://apidocs.io/img/method.png ".FooterController.getInsurancePolicyTracking") getInsurancePolicyTracking

> پیگیری وضعیت بیمه نامه


```javascript
function getInsurancePolicyTracking(trackingCode, nationalCode, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| trackingCode |  ``` Required ```  | شماره ی پیگیری بیمه نامه |
| nationalCode |  ``` Required ```  | کد ملی کاربر |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, FooterController, BaseModelInsurancePolicyTracking){
        var trackingCode = 213981083;
        var nationalCode = 3080115309;
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = FooterController.getInsurancePolicyTracking(trackingCode, nationalCode, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 500 | Internal Server Error |




[Back to List of Controllers](#list_of_controllers)

## <a name="insurance_policy_plan_controller"></a>![Class: ](https://apidocs.io/img/class.png ".InsurancePolicyPlanController") InsurancePolicyPlanController

### Get singleton instance

The singleton instance of the ``` InsurancePolicyPlanController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, InsurancePolicyPlanController, BaseModelSpecialPlan){
	});
```

### <a name="get_special_plan"></a>![Method: ](https://apidocs.io/img/method.png ".InsurancePolicyPlanController.getSpecialPlan") getSpecialPlan

> دریافت لیست طرح های بیمه ای


```javascript
function getSpecialPlan(subDomain, xApiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript


	app.controller("testController", function($scope, InsurancePolicyPlanController, BaseModelSpecialPlan){
        var subDomain = 'hfz1';
        var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';


		var result = InsurancePolicyPlanController.getSpecialPlan(subDomain, xApiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



