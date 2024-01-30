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
import RegulatoryDocumentDto from '../model/RegulatoryDocumentDto';
import RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto from '../model/RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto';

/**
* RegulatoryDocuments service.
* @module api/RegulatoryDocumentsApi
* @version 0.1.0
*/
export default class RegulatoryDocumentsApi {

    /**
    * Constructs a new RegulatoryDocumentsApi. 
    * @alias module:api/RegulatoryDocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Получить пагинированный список Документов
     * @param {Object} opts Optional parameters
     * @param {Number} [pageSize = 10)] 
     * @param {Number} [pageIndex = 0)] 
     * @param {String} [sortBy] 
     * @param {Boolean} [ascending] 
     * @param {Array.<Number>} [ids] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto} and HTTP response
     */
    regulatoryDocumentsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageIndex': opts['pageIndex'],
        'SortBy': opts['sortBy'],
        'Ascending': opts['ascending'],
        'Ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto;
      return this.apiClient.callApi(
        '/RegulatoryDocuments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить пагинированный список Документов
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 10)
     * @param {Number} opts.pageIndex  (default to 0)
     * @param {String} opts.sortBy 
     * @param {Boolean} opts.ascending 
     * @param {Array.<Number>} opts.ids 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto}
     */
    regulatoryDocumentsGet(opts) {
      return this.regulatoryDocumentsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Получить Документ по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RegulatoryDocumentDto} and HTTP response
     */
    regulatoryDocumentsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling regulatoryDocumentsIdGet");
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
      let returnType = RegulatoryDocumentDto;
      return this.apiClient.callApi(
        '/RegulatoryDocuments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Получить Документ по id
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RegulatoryDocumentDto}
     */
    regulatoryDocumentsIdGet(id) {
      return this.regulatoryDocumentsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
