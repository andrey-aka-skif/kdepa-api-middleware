/**
 * kdepa-api
 * КДЭПА CRUD API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AssembliesQueryFilterDto from './model/AssembliesQueryFilterDto';
import AssemblyDto from './model/AssemblyDto';
import AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto from './model/AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto';
import AtmosphereTypeDto from './model/AtmosphereTypeDto';
import BlockDto from './model/BlockDto';
import BlockDtoBlocksQueryFilterDtoPagedItemsDto from './model/BlockDtoBlocksQueryFilterDtoPagedItemsDto';
import BlocksQueryFilterDto from './model/BlocksQueryFilterDto';
import CabinetDto from './model/CabinetDto';
import CabinetDtoCabinetsQueryFilterDtoPagedItemsDto from './model/CabinetDtoCabinetsQueryFilterDtoPagedItemsDto';
import CabinetsQueryFilterDto from './model/CabinetsQueryFilterDto';
import ChannelDto from './model/ChannelDto';
import ChannelRawDto from './model/ChannelRawDto';
import ChartPoint from './model/ChartPoint';
import ChartType from './model/ChartType';
import ClimaticExecutionDto from './model/ClimaticExecutionDto';
import CreateChannelSubRequest from './model/CreateChannelSubRequest';
import CreateOrUpdateAssemblyRequest from './model/CreateOrUpdateAssemblyRequest';
import CreateOrUpdateBlockRequest from './model/CreateOrUpdateBlockRequest';
import CreateOrUpdateCabinetRequest from './model/CreateOrUpdateCabinetRequest';
import CreateOrUpdateDriveMarkRequest from './model/CreateOrUpdateDriveMarkRequest';
import CreateOrUpdateDriveRequest from './model/CreateOrUpdateDriveRequest';
import CreateOrUpdateFactoryRequest from './model/CreateOrUpdateFactoryRequest';
import CreateOrUpdateMotorMarkRequest from './model/CreateOrUpdateMotorMarkRequest';
import CreateOrUpdateMotorRequest from './model/CreateOrUpdateMotorRequest';
import CreateOrUpdatePositionRequest from './model/CreateOrUpdatePositionRequest';
import CreateOrUpdateShopRequest from './model/CreateOrUpdateShopRequest';
import CreateOrUpdateStationRequest from './model/CreateOrUpdateStationRequest';
import CreateOrUpdateStationSystemRequest from './model/CreateOrUpdateStationSystemRequest';
import CreateOrUpdateValveMarkRequest from './model/CreateOrUpdateValveMarkRequest';
import CreateOrUpdateValveRequest from './model/CreateOrUpdateValveRequest';
import CreateSurveyRequest from './model/CreateSurveyRequest';
import DocFileDto from './model/DocFileDto';
import DocFileDtoQueryIdsFilterDtoPagedItemsDto from './model/DocFileDtoQueryIdsFilterDtoPagedItemsDto';
import DriveDto from './model/DriveDto';
import DriveDtoDrivesQueryFilterDtoPagedItemsDto from './model/DriveDtoDrivesQueryFilterDtoPagedItemsDto';
import DriveMarkDto from './model/DriveMarkDto';
import DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto from './model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto';
import DriveMarksQueryFilterDto from './model/DriveMarksQueryFilterDto';
import DrivesQueryFilterDto from './model/DrivesQueryFilterDto';
import EquipmentGroupDto from './model/EquipmentGroupDto';
import FactoriesQueryFilterDto from './model/FactoriesQueryFilterDto';
import FactoryDto from './model/FactoryDto';
import FactoryDtoFactoriesQueryFilterDtoPagedItemsDto from './model/FactoryDtoFactoriesQueryFilterDtoPagedItemsDto';
import MediumDto from './model/MediumDto';
import MotorDto from './model/MotorDto';
import MotorDtoMotorsQueryFilterDtoPagedItemsDto from './model/MotorDtoMotorsQueryFilterDtoPagedItemsDto';
import MotorMarkDto from './model/MotorMarkDto';
import MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto from './model/MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto';
import MotorMarksQueryFilterDto from './model/MotorMarksQueryFilterDto';
import MotorsQueryFilterDto from './model/MotorsQueryFilterDto';
import PositionDto from './model/PositionDto';
import PositionDtoPositionsQueryFilterDtoPagedItemsDto from './model/PositionDtoPositionsQueryFilterDtoPagedItemsDto';
import PositionExtendedDto from './model/PositionExtendedDto';
import PositionsQueryFilterDto from './model/PositionsQueryFilterDto';
import ProblemDetails from './model/ProblemDetails';
import QueryIdsFilterDto from './model/QueryIdsFilterDto';
import SafetyClassDto from './model/SafetyClassDto';
import SeismicCategoryDto from './model/SeismicCategoryDto';
import ShopDto from './model/ShopDto';
import ShopDtoShopsQueryFilterDtoPagedItemsDto from './model/ShopDtoShopsQueryFilterDtoPagedItemsDto';
import ShopsQueryFilterDto from './model/ShopsQueryFilterDto';
import SlicingDto from './model/SlicingDto';
import SlicingRequest from './model/SlicingRequest';
import SortDto from './model/SortDto';
import StationDto from './model/StationDto';
import StationDtoQueryIdsFilterDtoPagedItemsDto from './model/StationDtoQueryIdsFilterDtoPagedItemsDto';
import StationSystemDto from './model/StationSystemDto';
import StationSystemDtoSystemsQueryFilterDtoPagedItemsDto from './model/StationSystemDtoSystemsQueryFilterDtoPagedItemsDto';
import SurveyDto from './model/SurveyDto';
import SurveyDtoSurveysQueryFilterDtoPagedItemsDto from './model/SurveyDtoSurveysQueryFilterDtoPagedItemsDto';
import SurveyExtendedDto from './model/SurveyExtendedDto';
import SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto from './model/SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto';
import SurveyRawDto from './model/SurveyRawDto';
import SurveysExtendedQueryFilterDto from './model/SurveysExtendedQueryFilterDto';
import SystemsQueryFilterDto from './model/SystemsQueryFilterDto';
import TimeRangeDto from './model/TimeRangeDto';
import TimeSpan from './model/TimeSpan';
import UpdateChannelSubRequest from './model/UpdateChannelSubRequest';
import UpdateSurveyRequest from './model/UpdateSurveyRequest';
import UsingClassDto from './model/UsingClassDto';
import ValveDesignDto from './model/ValveDesignDto';
import ValveDto from './model/ValveDto';
import ValveDtoValvesQueryFilterDtoPagedItemsDto from './model/ValveDtoValvesQueryFilterDtoPagedItemsDto';
import ValveMarkDto from './model/ValveMarkDto';
import ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto from './model/ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto';
import ValveMarkExtendedDto from './model/ValveMarkExtendedDto';
import ValveMarksQueryFilterDto from './model/ValveMarksQueryFilterDto';
import ValveTypeDto from './model/ValveTypeDto';
import ValvesQueryFilterDto from './model/ValvesQueryFilterDto';
import AssembliesApi from './api/AssembliesApi';
import BlocksApi from './api/BlocksApi';
import CabinetsApi from './api/CabinetsApi';
import DebugApi from './api/DebugApi';
import DocsApi from './api/DocsApi';
import DriveMarksApi from './api/DriveMarksApi';
import DrivesApi from './api/DrivesApi';
import FactoriesApi from './api/FactoriesApi';
import LookUpApi from './api/LookUpApi';
import MotorMarksApi from './api/MotorMarksApi';
import MotorsApi from './api/MotorsApi';
import OkmpConnectionsApi from './api/OkmpConnectionsApi';
import PositionsApi from './api/PositionsApi';
import ShopsApi from './api/ShopsApi';
import StationsApi from './api/StationsApi';
import SurveysApi from './api/SurveysApi';
import SurveysRawApi from './api/SurveysRawApi';
import SystemsApi from './api/SystemsApi';
import ValveMarksApi from './api/ValveMarksApi';
import ValvesApi from './api/ValvesApi';


/**
* КДЭПА CRUD API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var KdepaApi = require('index'); // See note below*.
* var xxxSvc = new KdepaApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new KdepaApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new KdepaApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new KdepaApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AssembliesQueryFilterDto model constructor.
     * @property {module:model/AssembliesQueryFilterDto}
     */
    AssembliesQueryFilterDto,

    /**
     * The AssemblyDto model constructor.
     * @property {module:model/AssemblyDto}
     */
    AssemblyDto,

    /**
     * The AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto}
     */
    AssemblyDtoAssembliesQueryFilterDtoPagedItemsDto,

    /**
     * The AtmosphereTypeDto model constructor.
     * @property {module:model/AtmosphereTypeDto}
     */
    AtmosphereTypeDto,

    /**
     * The BlockDto model constructor.
     * @property {module:model/BlockDto}
     */
    BlockDto,

    /**
     * The BlockDtoBlocksQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/BlockDtoBlocksQueryFilterDtoPagedItemsDto}
     */
    BlockDtoBlocksQueryFilterDtoPagedItemsDto,

    /**
     * The BlocksQueryFilterDto model constructor.
     * @property {module:model/BlocksQueryFilterDto}
     */
    BlocksQueryFilterDto,

    /**
     * The CabinetDto model constructor.
     * @property {module:model/CabinetDto}
     */
    CabinetDto,

    /**
     * The CabinetDtoCabinetsQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/CabinetDtoCabinetsQueryFilterDtoPagedItemsDto}
     */
    CabinetDtoCabinetsQueryFilterDtoPagedItemsDto,

    /**
     * The CabinetsQueryFilterDto model constructor.
     * @property {module:model/CabinetsQueryFilterDto}
     */
    CabinetsQueryFilterDto,

    /**
     * The ChannelDto model constructor.
     * @property {module:model/ChannelDto}
     */
    ChannelDto,

    /**
     * The ChannelRawDto model constructor.
     * @property {module:model/ChannelRawDto}
     */
    ChannelRawDto,

    /**
     * The ChartPoint model constructor.
     * @property {module:model/ChartPoint}
     */
    ChartPoint,

    /**
     * The ChartType model constructor.
     * @property {module:model/ChartType}
     */
    ChartType,

    /**
     * The ClimaticExecutionDto model constructor.
     * @property {module:model/ClimaticExecutionDto}
     */
    ClimaticExecutionDto,

    /**
     * The CreateChannelSubRequest model constructor.
     * @property {module:model/CreateChannelSubRequest}
     */
    CreateChannelSubRequest,

    /**
     * The CreateOrUpdateAssemblyRequest model constructor.
     * @property {module:model/CreateOrUpdateAssemblyRequest}
     */
    CreateOrUpdateAssemblyRequest,

    /**
     * The CreateOrUpdateBlockRequest model constructor.
     * @property {module:model/CreateOrUpdateBlockRequest}
     */
    CreateOrUpdateBlockRequest,

    /**
     * The CreateOrUpdateCabinetRequest model constructor.
     * @property {module:model/CreateOrUpdateCabinetRequest}
     */
    CreateOrUpdateCabinetRequest,

    /**
     * The CreateOrUpdateDriveMarkRequest model constructor.
     * @property {module:model/CreateOrUpdateDriveMarkRequest}
     */
    CreateOrUpdateDriveMarkRequest,

    /**
     * The CreateOrUpdateDriveRequest model constructor.
     * @property {module:model/CreateOrUpdateDriveRequest}
     */
    CreateOrUpdateDriveRequest,

    /**
     * The CreateOrUpdateFactoryRequest model constructor.
     * @property {module:model/CreateOrUpdateFactoryRequest}
     */
    CreateOrUpdateFactoryRequest,

    /**
     * The CreateOrUpdateMotorMarkRequest model constructor.
     * @property {module:model/CreateOrUpdateMotorMarkRequest}
     */
    CreateOrUpdateMotorMarkRequest,

    /**
     * The CreateOrUpdateMotorRequest model constructor.
     * @property {module:model/CreateOrUpdateMotorRequest}
     */
    CreateOrUpdateMotorRequest,

    /**
     * The CreateOrUpdatePositionRequest model constructor.
     * @property {module:model/CreateOrUpdatePositionRequest}
     */
    CreateOrUpdatePositionRequest,

    /**
     * The CreateOrUpdateShopRequest model constructor.
     * @property {module:model/CreateOrUpdateShopRequest}
     */
    CreateOrUpdateShopRequest,

    /**
     * The CreateOrUpdateStationRequest model constructor.
     * @property {module:model/CreateOrUpdateStationRequest}
     */
    CreateOrUpdateStationRequest,

    /**
     * The CreateOrUpdateStationSystemRequest model constructor.
     * @property {module:model/CreateOrUpdateStationSystemRequest}
     */
    CreateOrUpdateStationSystemRequest,

    /**
     * The CreateOrUpdateValveMarkRequest model constructor.
     * @property {module:model/CreateOrUpdateValveMarkRequest}
     */
    CreateOrUpdateValveMarkRequest,

    /**
     * The CreateOrUpdateValveRequest model constructor.
     * @property {module:model/CreateOrUpdateValveRequest}
     */
    CreateOrUpdateValveRequest,

    /**
     * The CreateSurveyRequest model constructor.
     * @property {module:model/CreateSurveyRequest}
     */
    CreateSurveyRequest,

    /**
     * The DocFileDto model constructor.
     * @property {module:model/DocFileDto}
     */
    DocFileDto,

    /**
     * The DocFileDtoQueryIdsFilterDtoPagedItemsDto model constructor.
     * @property {module:model/DocFileDtoQueryIdsFilterDtoPagedItemsDto}
     */
    DocFileDtoQueryIdsFilterDtoPagedItemsDto,

    /**
     * The DriveDto model constructor.
     * @property {module:model/DriveDto}
     */
    DriveDto,

    /**
     * The DriveDtoDrivesQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/DriveDtoDrivesQueryFilterDtoPagedItemsDto}
     */
    DriveDtoDrivesQueryFilterDtoPagedItemsDto,

    /**
     * The DriveMarkDto model constructor.
     * @property {module:model/DriveMarkDto}
     */
    DriveMarkDto,

    /**
     * The DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto}
     */
    DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto,

    /**
     * The DriveMarksQueryFilterDto model constructor.
     * @property {module:model/DriveMarksQueryFilterDto}
     */
    DriveMarksQueryFilterDto,

    /**
     * The DrivesQueryFilterDto model constructor.
     * @property {module:model/DrivesQueryFilterDto}
     */
    DrivesQueryFilterDto,

    /**
     * The EquipmentGroupDto model constructor.
     * @property {module:model/EquipmentGroupDto}
     */
    EquipmentGroupDto,

    /**
     * The FactoriesQueryFilterDto model constructor.
     * @property {module:model/FactoriesQueryFilterDto}
     */
    FactoriesQueryFilterDto,

    /**
     * The FactoryDto model constructor.
     * @property {module:model/FactoryDto}
     */
    FactoryDto,

    /**
     * The FactoryDtoFactoriesQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/FactoryDtoFactoriesQueryFilterDtoPagedItemsDto}
     */
    FactoryDtoFactoriesQueryFilterDtoPagedItemsDto,

    /**
     * The MediumDto model constructor.
     * @property {module:model/MediumDto}
     */
    MediumDto,

    /**
     * The MotorDto model constructor.
     * @property {module:model/MotorDto}
     */
    MotorDto,

    /**
     * The MotorDtoMotorsQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/MotorDtoMotorsQueryFilterDtoPagedItemsDto}
     */
    MotorDtoMotorsQueryFilterDtoPagedItemsDto,

    /**
     * The MotorMarkDto model constructor.
     * @property {module:model/MotorMarkDto}
     */
    MotorMarkDto,

    /**
     * The MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto}
     */
    MotorMarkDtoMotorMarksQueryFilterDtoPagedItemsDto,

    /**
     * The MotorMarksQueryFilterDto model constructor.
     * @property {module:model/MotorMarksQueryFilterDto}
     */
    MotorMarksQueryFilterDto,

    /**
     * The MotorsQueryFilterDto model constructor.
     * @property {module:model/MotorsQueryFilterDto}
     */
    MotorsQueryFilterDto,

    /**
     * The PositionDto model constructor.
     * @property {module:model/PositionDto}
     */
    PositionDto,

    /**
     * The PositionDtoPositionsQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/PositionDtoPositionsQueryFilterDtoPagedItemsDto}
     */
    PositionDtoPositionsQueryFilterDtoPagedItemsDto,

    /**
     * The PositionExtendedDto model constructor.
     * @property {module:model/PositionExtendedDto}
     */
    PositionExtendedDto,

    /**
     * The PositionsQueryFilterDto model constructor.
     * @property {module:model/PositionsQueryFilterDto}
     */
    PositionsQueryFilterDto,

    /**
     * The ProblemDetails model constructor.
     * @property {module:model/ProblemDetails}
     */
    ProblemDetails,

    /**
     * The QueryIdsFilterDto model constructor.
     * @property {module:model/QueryIdsFilterDto}
     */
    QueryIdsFilterDto,

    /**
     * The SafetyClassDto model constructor.
     * @property {module:model/SafetyClassDto}
     */
    SafetyClassDto,

    /**
     * The SeismicCategoryDto model constructor.
     * @property {module:model/SeismicCategoryDto}
     */
    SeismicCategoryDto,

    /**
     * The ShopDto model constructor.
     * @property {module:model/ShopDto}
     */
    ShopDto,

    /**
     * The ShopDtoShopsQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/ShopDtoShopsQueryFilterDtoPagedItemsDto}
     */
    ShopDtoShopsQueryFilterDtoPagedItemsDto,

    /**
     * The ShopsQueryFilterDto model constructor.
     * @property {module:model/ShopsQueryFilterDto}
     */
    ShopsQueryFilterDto,

    /**
     * The SlicingDto model constructor.
     * @property {module:model/SlicingDto}
     */
    SlicingDto,

    /**
     * The SlicingRequest model constructor.
     * @property {module:model/SlicingRequest}
     */
    SlicingRequest,

    /**
     * The SortDto model constructor.
     * @property {module:model/SortDto}
     */
    SortDto,

    /**
     * The StationDto model constructor.
     * @property {module:model/StationDto}
     */
    StationDto,

    /**
     * The StationDtoQueryIdsFilterDtoPagedItemsDto model constructor.
     * @property {module:model/StationDtoQueryIdsFilterDtoPagedItemsDto}
     */
    StationDtoQueryIdsFilterDtoPagedItemsDto,

    /**
     * The StationSystemDto model constructor.
     * @property {module:model/StationSystemDto}
     */
    StationSystemDto,

    /**
     * The StationSystemDtoSystemsQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/StationSystemDtoSystemsQueryFilterDtoPagedItemsDto}
     */
    StationSystemDtoSystemsQueryFilterDtoPagedItemsDto,

    /**
     * The SurveyDto model constructor.
     * @property {module:model/SurveyDto}
     */
    SurveyDto,

    /**
     * The SurveyDtoSurveysQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/SurveyDtoSurveysQueryFilterDtoPagedItemsDto}
     */
    SurveyDtoSurveysQueryFilterDtoPagedItemsDto,

    /**
     * The SurveyExtendedDto model constructor.
     * @property {module:model/SurveyExtendedDto}
     */
    SurveyExtendedDto,

    /**
     * The SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto}
     */
    SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto,

    /**
     * The SurveyRawDto model constructor.
     * @property {module:model/SurveyRawDto}
     */
    SurveyRawDto,

    /**
     * The SurveysExtendedQueryFilterDto model constructor.
     * @property {module:model/SurveysExtendedQueryFilterDto}
     */
    SurveysExtendedQueryFilterDto,

    /**
     * The SystemsQueryFilterDto model constructor.
     * @property {module:model/SystemsQueryFilterDto}
     */
    SystemsQueryFilterDto,

    /**
     * The TimeRangeDto model constructor.
     * @property {module:model/TimeRangeDto}
     */
    TimeRangeDto,

    /**
     * The TimeSpan model constructor.
     * @property {module:model/TimeSpan}
     */
    TimeSpan,

    /**
     * The UpdateChannelSubRequest model constructor.
     * @property {module:model/UpdateChannelSubRequest}
     */
    UpdateChannelSubRequest,

    /**
     * The UpdateSurveyRequest model constructor.
     * @property {module:model/UpdateSurveyRequest}
     */
    UpdateSurveyRequest,

    /**
     * The UsingClassDto model constructor.
     * @property {module:model/UsingClassDto}
     */
    UsingClassDto,

    /**
     * The ValveDesignDto model constructor.
     * @property {module:model/ValveDesignDto}
     */
    ValveDesignDto,

    /**
     * The ValveDto model constructor.
     * @property {module:model/ValveDto}
     */
    ValveDto,

    /**
     * The ValveDtoValvesQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/ValveDtoValvesQueryFilterDtoPagedItemsDto}
     */
    ValveDtoValvesQueryFilterDtoPagedItemsDto,

    /**
     * The ValveMarkDto model constructor.
     * @property {module:model/ValveMarkDto}
     */
    ValveMarkDto,

    /**
     * The ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto model constructor.
     * @property {module:model/ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto}
     */
    ValveMarkDtoValveMarksQueryFilterDtoPagedItemsDto,

    /**
     * The ValveMarkExtendedDto model constructor.
     * @property {module:model/ValveMarkExtendedDto}
     */
    ValveMarkExtendedDto,

    /**
     * The ValveMarksQueryFilterDto model constructor.
     * @property {module:model/ValveMarksQueryFilterDto}
     */
    ValveMarksQueryFilterDto,

    /**
     * The ValveTypeDto model constructor.
     * @property {module:model/ValveTypeDto}
     */
    ValveTypeDto,

    /**
     * The ValvesQueryFilterDto model constructor.
     * @property {module:model/ValvesQueryFilterDto}
     */
    ValvesQueryFilterDto,

    /**
    * The AssembliesApi service constructor.
    * @property {module:api/AssembliesApi}
    */
    AssembliesApi,

    /**
    * The BlocksApi service constructor.
    * @property {module:api/BlocksApi}
    */
    BlocksApi,

    /**
    * The CabinetsApi service constructor.
    * @property {module:api/CabinetsApi}
    */
    CabinetsApi,

    /**
    * The DebugApi service constructor.
    * @property {module:api/DebugApi}
    */
    DebugApi,

    /**
    * The DocsApi service constructor.
    * @property {module:api/DocsApi}
    */
    DocsApi,

    /**
    * The DriveMarksApi service constructor.
    * @property {module:api/DriveMarksApi}
    */
    DriveMarksApi,

    /**
    * The DrivesApi service constructor.
    * @property {module:api/DrivesApi}
    */
    DrivesApi,

    /**
    * The FactoriesApi service constructor.
    * @property {module:api/FactoriesApi}
    */
    FactoriesApi,

    /**
    * The LookUpApi service constructor.
    * @property {module:api/LookUpApi}
    */
    LookUpApi,

    /**
    * The MotorMarksApi service constructor.
    * @property {module:api/MotorMarksApi}
    */
    MotorMarksApi,

    /**
    * The MotorsApi service constructor.
    * @property {module:api/MotorsApi}
    */
    MotorsApi,

    /**
    * The OkmpConnectionsApi service constructor.
    * @property {module:api/OkmpConnectionsApi}
    */
    OkmpConnectionsApi,

    /**
    * The PositionsApi service constructor.
    * @property {module:api/PositionsApi}
    */
    PositionsApi,

    /**
    * The ShopsApi service constructor.
    * @property {module:api/ShopsApi}
    */
    ShopsApi,

    /**
    * The StationsApi service constructor.
    * @property {module:api/StationsApi}
    */
    StationsApi,

    /**
    * The SurveysApi service constructor.
    * @property {module:api/SurveysApi}
    */
    SurveysApi,

    /**
    * The SurveysRawApi service constructor.
    * @property {module:api/SurveysRawApi}
    */
    SurveysRawApi,

    /**
    * The SystemsApi service constructor.
    * @property {module:api/SystemsApi}
    */
    SystemsApi,

    /**
    * The ValveMarksApi service constructor.
    * @property {module:api/ValveMarksApi}
    */
    ValveMarksApi,

    /**
    * The ValvesApi service constructor.
    * @property {module:api/ValvesApi}
    */
    ValvesApi
};
