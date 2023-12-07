# KdepaApi.LookUpApi

All URIs are relative to *http://127.0.0.1:5005/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lookUpAtmosphereTypesGet**](LookUpApi.md#lookUpAtmosphereTypesGet) | **GET** /LookUp/atmosphere-types | Получить Типы атмосферы по ГОСТ 15150
[**lookUpClimaticExecutionsGet**](LookUpApi.md#lookUpClimaticExecutionsGet) | **GET** /LookUp/climatic-executions | Получить Климатические исполнения по ГОСТ 15150
[**lookUpEquipmentGroupsGet**](LookUpApi.md#lookUpEquipmentGroupsGet) | **GET** /LookUp/equipment-groups | Получить Группы безопасности по НП-089-15
[**lookUpMediumsGet**](LookUpApi.md#lookUpMediumsGet) | **GET** /LookUp/mediums | Получить типы Сред
[**lookUpSafetyClassesGet**](LookUpApi.md#lookUpSafetyClassesGet) | **GET** /LookUp/safety-classes | Получить Классы безопасности по НП-001-15
[**lookUpSeismicCategoriesGet**](LookUpApi.md#lookUpSeismicCategoriesGet) | **GET** /LookUp/seismic-categories | Получить Категории сейсмостойкости по НП-031-01
[**lookUpUsingClassesGet**](LookUpApi.md#lookUpUsingClassesGet) | **GET** /LookUp/using-classes | Получить Классификации арматуры по назначению и условиям эксплуатации в соответствии с НП-068-05
[**lookUpValveDesignsGet**](LookUpApi.md#lookUpValveDesignsGet) | **GET** /LookUp/valve-designs | Получить Типы арматуры по исполнению по НП-068
[**lookUpValveTypesGet**](LookUpApi.md#lookUpValveTypesGet) | **GET** /LookUp/valve-types | Получить Виды арматуры по назначению по НП-068



## lookUpAtmosphereTypesGet

> [AtmosphereTypeDto] lookUpAtmosphereTypesGet()

Получить Типы атмосферы по ГОСТ 15150

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpAtmosphereTypesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[AtmosphereTypeDto]**](AtmosphereTypeDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpClimaticExecutionsGet

> [ClimaticExecutionDto] lookUpClimaticExecutionsGet()

Получить Климатические исполнения по ГОСТ 15150

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpClimaticExecutionsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ClimaticExecutionDto]**](ClimaticExecutionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpEquipmentGroupsGet

> [EquipmentGroupDto] lookUpEquipmentGroupsGet()

Получить Группы безопасности по НП-089-15

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpEquipmentGroupsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EquipmentGroupDto]**](EquipmentGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpMediumsGet

> [MediumDto] lookUpMediumsGet()

Получить типы Сред

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpMediumsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MediumDto]**](MediumDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpSafetyClassesGet

> [SafetyClassDto] lookUpSafetyClassesGet()

Получить Классы безопасности по НП-001-15

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpSafetyClassesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SafetyClassDto]**](SafetyClassDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpSeismicCategoriesGet

> [SeismicCategoryDto] lookUpSeismicCategoriesGet()

Получить Категории сейсмостойкости по НП-031-01

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpSeismicCategoriesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SeismicCategoryDto]**](SeismicCategoryDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpUsingClassesGet

> [UsingClassDto] lookUpUsingClassesGet()

Получить Классификации арматуры по назначению и условиям эксплуатации в соответствии с НП-068-05

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpUsingClassesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[UsingClassDto]**](UsingClassDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpValveDesignsGet

> [ValveDesignDto] lookUpValveDesignsGet()

Получить Типы арматуры по исполнению по НП-068

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpValveDesignsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ValveDesignDto]**](ValveDesignDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## lookUpValveTypesGet

> [ValveTypeDto] lookUpValveTypesGet()

Получить Виды арматуры по назначению по НП-068

### Example

```javascript
import KdepaApi from 'kdepa_api';

let apiInstance = new KdepaApi.LookUpApi();
apiInstance.lookUpValveTypesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ValveTypeDto]**](ValveTypeDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

