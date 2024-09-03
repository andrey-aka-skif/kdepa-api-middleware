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


import ApiClient from "../ApiClient";
import ChannelType from '../model/ChannelType';
import ChartPoint from '../model/ChartPoint';
import ChartResult from '../model/ChartResult';
import ChartType from '../model/ChartType';
import CreateSurveyRequest from '../model/CreateSurveyRequest';
import ProblemDetails from '../model/ProblemDetails';
import SurveyDto from '../model/SurveyDto';
import SurveyDtoSurveysQueryFilterDtoPagedItemsDto from '../model/SurveyDtoSurveysQueryFilterDtoPagedItemsDto';
import SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto from '../model/SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto';
import UpdateSurveyRequest from '../model/UpdateSurveyRequest';

/**
* Surveys service.
* @module api/SurveysApi
* @version 0.1.0
*/
export default class SurveysApi {

    /**
    * Constructs a new SurveysApi. 
    * @alias module:api/SurveysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Получить расширенный пагинированый список Обследований
     * @param {Object} opts Optional parameters
     * @param {Number} [pageSize = 10)] 
     * @param {Number} [pageIndex = 0)] 
     * @param {String} [sortBy] 
     * @param {Boolean} [ascending] 
     * @param {Array.<Number>} [positionIds] 
     * @param {Date} [dateFrom] 
     * @param {Date} [dateTo] 
     * @param {Boolean} [hasElectricChannel] 
     * @param {Boolean} [hasTorqueChannel] 
     * @param {Boolean} [hasActualAssembly] 
     * @param {Boolean} [hasArchivalAssembly] 
     * @param {Boolean} [isSynched] 
     * @param {Boolean} [isSliced] 
     * @param {Boolean} [isAnalyzed] 
     * @param {Boolean} [hasStatAnalysis] 
     * @param {Boolean} [hasTorqueAnalysis] 
     * @param {Boolean} [hasTrend] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto} and HTTP response
     */
    surveysExtendedGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageIndex': opts['pageIndex'],
        'SortBy': opts['sortBy'],
        'Ascending': opts['ascending'],
        'PositionIds': this.apiClient.buildCollectionParam(opts['positionIds'], 'multi'),
        'DateFrom': opts['dateFrom'],
        'DateTo': opts['dateTo'],
        'HasElectricChannel': opts['hasElectricChannel'],
        'HasTorqueChannel': opts['hasTorqueChannel'],
        'HasActualAssembly': opts['hasActualAssembly'],
        'HasArchivalAssembly': opts['hasArchivalAssembly'],
        'IsSynched': opts['isSynched'],
        'IsSliced': opts['isSliced'],
        'IsAnalyzed': opts['isAnalyzed'],
        'HasStatAnalysis': opts['hasStatAnalysis'],
        'HasTorqueAnalysis': opts['hasTorqueAnalysis'],
        'HasTrend': opts['hasTrend']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto;
      return this.apiClient.callApi(
        '/Surveys/extended', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить расширенный пагинированый список Обследований
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 10)
     * @param {Number} opts.pageIndex  (default to 0)
     * @param {String} opts.sortBy 
     * @param {Boolean} opts.ascending 
     * @param {Array.<Number>} opts.positionIds 
     * @param {Date} opts.dateFrom 
     * @param {Date} opts.dateTo 
     * @param {Boolean} opts.hasElectricChannel 
     * @param {Boolean} opts.hasTorqueChannel 
     * @param {Boolean} opts.hasActualAssembly 
     * @param {Boolean} opts.hasArchivalAssembly 
     * @param {Boolean} opts.isSynched 
     * @param {Boolean} opts.isSliced 
     * @param {Boolean} opts.isAnalyzed 
     * @param {Boolean} opts.hasStatAnalysis 
     * @param {Boolean} opts.hasTorqueAnalysis 
     * @param {Boolean} opts.hasTrend 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SurveyExtendedDtoSurveysExtendedQueryFilterDtoPagedItemsDto}
     */
    surveysExtendedGet(opts) {
      return this.surveysExtendedGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить пагинированый список Обследований
     * @param {Object} opts Optional parameters
     * @param {Number} [pageSize = 10)] 
     * @param {Number} [pageIndex = 0)] 
     * @param {String} [sortBy] 
     * @param {Boolean} [ascending] 
     * @param {Object.<String, Object>} [filter] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SurveyDtoSurveysQueryFilterDtoPagedItemsDto} and HTTP response
     */
    surveysGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageIndex': opts['pageIndex'],
        'SortBy': opts['sortBy'],
        'Ascending': opts['ascending'],
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SurveyDtoSurveysQueryFilterDtoPagedItemsDto;
      return this.apiClient.callApi(
        '/Surveys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить пагинированый список Обследований
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 10)
     * @param {Number} opts.pageIndex  (default to 0)
     * @param {String} opts.sortBy 
     * @param {Boolean} opts.ascending 
     * @param {Object.<String, Object>} opts.filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SurveyDtoSurveysQueryFilterDtoPagedItemsDto}
     */
    surveysGet(opts) {
      return this.surveysGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить график по id Обследования и типу канала
     * @param {Number} id 
     * @param {module:model/ChannelType} channel 
     * @param {Object} opts Optional parameters
     * @param {String} [region] 
     * @param {Number} [regionPadding] 
     * @param {Number} [from] 
     * @param {Number} [to] 
     * @param {String} [spectrum] 
     * @param {String} [envelope] 
     * @param {String} [decimation] 
     * @param {Number} [decimationSamples] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChartResult} and HTTP response
     */
    surveysIdChannelChannelGetWithHttpInfo(id, channel, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling surveysIdChannelChannelGet");
      }
      // verify the required parameter 'channel' is set
      if (channel === undefined || channel === null) {
        throw new Error("Missing the required parameter 'channel' when calling surveysIdChannelChannelGet");
      }

      let pathParams = {
        'id': id,
        'channel': channel
      };
      let queryParams = {
        'Region': opts['region'],
        'RegionPadding': opts['regionPadding'],
        'From': opts['from'],
        'To': opts['to'],
        'Spectrum': opts['spectrum'],
        'Envelope': opts['envelope'],
        'Decimation': opts['decimation'],
        'DecimationSamples': opts['decimationSamples']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ChartResult;
      return this.apiClient.callApi(
        '/Surveys/{id}/channel/{channel}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить график по id Обследования и типу канала
     * @param {Number} id 
     * @param {module:model/ChannelType} channel 
     * @param {Object} opts Optional parameters
     * @param {String} opts.region 
     * @param {Number} opts.regionPadding 
     * @param {Number} opts.from 
     * @param {Number} opts.to 
     * @param {String} opts.spectrum 
     * @param {String} opts.envelope 
     * @param {String} opts.decimation 
     * @param {Number} opts.decimationSamples 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChartResult}
     */
    surveysIdChannelChannelGet(id, channel, opts) {
      return this.surveysIdChannelChannelGetWithHttpInfo(id, channel, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить график канала по id Обследования и channelId канала
     * @param {Number} id 
     * @param {Number} channelId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChartType} [type] 
     * @param {Number} [from] 
     * @param {Number} [to] 
     * @param {Number} [samples] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ChartPoint>} and HTTP response
     */
    surveysIdChannelsChannelIdGetWithHttpInfo(id, channelId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling surveysIdChannelsChannelIdGet");
      }
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling surveysIdChannelsChannelIdGet");
      }

      let pathParams = {
        'id': id,
        'channelId': channelId
      };
      let queryParams = {
        'Type': opts['type'],
        'From': opts['from'],
        'To': opts['to'],
        'Samples': opts['samples']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [ChartPoint];
      return this.apiClient.callApi(
        '/Surveys/{id}/channels/{channelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить график канала по id Обследования и channelId канала
     * @param {Number} id 
     * @param {Number} channelId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChartType} opts.type 
     * @param {Number} opts.from 
     * @param {Number} opts.to 
     * @param {Number} opts.samples 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ChartPoint>}
     */
    surveysIdChannelsChannelIdGet(id, channelId, opts) {
      return this.surveysIdChannelsChannelIdGetWithHttpInfo(id, channelId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Удалить Обследование
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    surveysIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling surveysIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/Surveys/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Удалить Обследование
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    surveysIdDelete(id) {
      return this.surveysIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Создать Диагностирование для Обследования
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SurveyDto} and HTTP response
     */
    surveysIdDiagnosticsPostWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling surveysIdDiagnosticsPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SurveyDto;
      return this.apiClient.callApi(
        '/Surveys/{id}/diagnostics', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Создать Диагностирование для Обследования
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SurveyDto}
     */
    surveysIdDiagnosticsPost(id) {
      return this.surveysIdDiagnosticsPostWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить Обследование по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SurveyDto} and HTTP response
     */
    surveysIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling surveysIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SurveyDto;
      return this.apiClient.callApi(
        '/Surveys/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить Обследование по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SurveyDto}
     */
    surveysIdGet(id) {
      return this.surveysIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Обновить Обследование
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateSurveyRequest} [updateSurveyRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SurveyDto} and HTTP response
     */
    surveysIdPutWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateSurveyRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling surveysIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SurveyDto;
      return this.apiClient.callApi(
        '/Surveys/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Обновить Обследование
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateSurveyRequest} opts.updateSurveyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SurveyDto}
     */
    surveysIdPut(id, opts) {
      return this.surveysIdPutWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Создать Обследование
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSurveyRequest} [createSurveyRequest] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SurveyDto} and HTTP response
     */
    surveysPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createSurveyRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SurveyDto;
      return this.apiClient.callApi(
        '/Surveys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Создать Обследование
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSurveyRequest} opts.createSurveyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SurveyDto}
     */
    surveysPost(opts) {
      return this.surveysPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
