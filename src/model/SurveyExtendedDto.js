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

import ApiClient from '../ApiClient';

/**
 * The SurveyExtendedDto model module.
 * @module model/SurveyExtendedDto
 * @version 0.1.0
 */
class SurveyExtendedDto {
    /**
     * Constructs a new <code>SurveyExtendedDto</code>.
     * @alias module:model/SurveyExtendedDto
     */
    constructor() { 
        
        SurveyExtendedDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SurveyExtendedDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SurveyExtendedDto} obj Optional instance to populate.
     * @return {module:model/SurveyExtendedDto} The populated <code>SurveyExtendedDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SurveyExtendedDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('dateTime')) {
                obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'Date');
            }
            if (data.hasOwnProperty('positionId')) {
                obj['positionId'] = ApiClient.convertToType(data['positionId'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
            if (data.hasOwnProperty('channelEl')) {
                obj['channelEl'] = ApiClient.convertToType(data['channelEl'], 'Boolean');
            }
            if (data.hasOwnProperty('channelTorque')) {
                obj['channelTorque'] = ApiClient.convertToType(data['channelTorque'], 'Boolean');
            }
            if (data.hasOwnProperty('channelsInfo')) {
                obj['channelsInfo'] = ApiClient.convertToType(data['channelsInfo'], 'String');
            }
            if (data.hasOwnProperty('isArchivalAssembly')) {
                obj['isArchivalAssembly'] = ApiClient.convertToType(data['isArchivalAssembly'], 'Boolean');
            }
            if (data.hasOwnProperty('phaseSynched')) {
                obj['phaseSynched'] = ApiClient.convertToType(data['phaseSynched'], 'Boolean');
            }
            if (data.hasOwnProperty('phaseSliced')) {
                obj['phaseSliced'] = ApiClient.convertToType(data['phaseSliced'], 'Boolean');
            }
            if (data.hasOwnProperty('phaseAnalized')) {
                obj['phaseAnalized'] = ApiClient.convertToType(data['phaseAnalized'], 'Boolean');
            }
            if (data.hasOwnProperty('phasesInfo')) {
                obj['phasesInfo'] = ApiClient.convertToType(data['phasesInfo'], 'String');
            }
            if (data.hasOwnProperty('extraStat')) {
                obj['extraStat'] = ApiClient.convertToType(data['extraStat'], 'Boolean');
            }
            if (data.hasOwnProperty('extraTorque')) {
                obj['extraTorque'] = ApiClient.convertToType(data['extraTorque'], 'Boolean');
            }
            if (data.hasOwnProperty('extraTrend')) {
                obj['extraTrend'] = ApiClient.convertToType(data['extraTrend'], 'Boolean');
            }
            if (data.hasOwnProperty('extraInfo')) {
                obj['extraInfo'] = ApiClient.convertToType(data['extraInfo'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SurveyExtendedDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SurveyExtendedDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }
        // ensure the json data is a string
        if (data['channelsInfo'] && !(typeof data['channelsInfo'] === 'string' || data['channelsInfo'] instanceof String)) {
            throw new Error("Expected the field `channelsInfo` to be a primitive type in the JSON string but got " + data['channelsInfo']);
        }
        // ensure the json data is a string
        if (data['phasesInfo'] && !(typeof data['phasesInfo'] === 'string' || data['phasesInfo'] instanceof String)) {
            throw new Error("Expected the field `phasesInfo` to be a primitive type in the JSON string but got " + data['phasesInfo']);
        }
        // ensure the json data is a string
        if (data['extraInfo'] && !(typeof data['extraInfo'] === 'string' || data['extraInfo'] instanceof String)) {
            throw new Error("Expected the field `extraInfo` to be a primitive type in the JSON string but got " + data['extraInfo']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
SurveyExtendedDto.prototype['id'] = undefined;

/**
 * @member {Date} dateTime
 */
SurveyExtendedDto.prototype['dateTime'] = undefined;

/**
 * @member {Number} positionId
 */
SurveyExtendedDto.prototype['positionId'] = undefined;

/**
 * @member {String} position
 */
SurveyExtendedDto.prototype['position'] = undefined;

/**
 * @member {Boolean} channelEl
 */
SurveyExtendedDto.prototype['channelEl'] = undefined;

/**
 * @member {Boolean} channelTorque
 */
SurveyExtendedDto.prototype['channelTorque'] = undefined;

/**
 * @member {String} channelsInfo
 */
SurveyExtendedDto.prototype['channelsInfo'] = undefined;

/**
 * @member {Boolean} isArchivalAssembly
 */
SurveyExtendedDto.prototype['isArchivalAssembly'] = undefined;

/**
 * @member {Boolean} phaseSynched
 */
SurveyExtendedDto.prototype['phaseSynched'] = undefined;

/**
 * @member {Boolean} phaseSliced
 */
SurveyExtendedDto.prototype['phaseSliced'] = undefined;

/**
 * @member {Boolean} phaseAnalized
 */
SurveyExtendedDto.prototype['phaseAnalized'] = undefined;

/**
 * @member {String} phasesInfo
 */
SurveyExtendedDto.prototype['phasesInfo'] = undefined;

/**
 * @member {Boolean} extraStat
 */
SurveyExtendedDto.prototype['extraStat'] = undefined;

/**
 * @member {Boolean} extraTorque
 */
SurveyExtendedDto.prototype['extraTorque'] = undefined;

/**
 * @member {Boolean} extraTrend
 */
SurveyExtendedDto.prototype['extraTrend'] = undefined;

/**
 * @member {String} extraInfo
 */
SurveyExtendedDto.prototype['extraInfo'] = undefined;

/**
 * @member {String} comment
 */
SurveyExtendedDto.prototype['comment'] = undefined;






export default SurveyExtendedDto;

