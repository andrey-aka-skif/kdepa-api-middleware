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
import ChannelRawDto from './ChannelRawDto';

/**
 * The SurveyRawDto model module.
 * @module model/SurveyRawDto
 * @version 0.1.0
 */
class SurveyRawDto {
    /**
     * Constructs a new <code>SurveyRawDto</code>.
     * @alias module:model/SurveyRawDto
     */
    constructor() { 
        
        SurveyRawDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SurveyRawDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SurveyRawDto} obj Optional instance to populate.
     * @return {module:model/SurveyRawDto} The populated <code>SurveyRawDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SurveyRawDto();

            if (data.hasOwnProperty('fileGuid')) {
                obj['fileGuid'] = ApiClient.convertToType(data['fileGuid'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
            if (data.hasOwnProperty('dateTime')) {
                obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'Date');
            }
            if (data.hasOwnProperty('resistance')) {
                obj['resistance'] = ApiClient.convertToType(data['resistance'], 'Number');
            }
            if (data.hasOwnProperty('mvo')) {
                obj['mvo'] = ApiClient.convertToType(data['mvo'], 'Number');
            }
            if (data.hasOwnProperty('mvz')) {
                obj['mvz'] = ApiClient.convertToType(data['mvz'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [ChannelRawDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SurveyRawDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SurveyRawDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fileGuid'] && !(typeof data['fileGuid'] === 'string' || data['fileGuid'] instanceof String)) {
            throw new Error("Expected the field `fileGuid` to be a primitive type in the JSON string but got " + data['fileGuid']);
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        if (data['channels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['channels'])) {
                throw new Error("Expected the field `channels` to be an array in the JSON data but got " + data['channels']);
            }
            // validate the optional field `channels` (array)
            for (const item of data['channels']) {
                ChannelRawDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} fileGuid
 */
SurveyRawDto.prototype['fileGuid'] = undefined;

/**
 * @member {String} fileName
 */
SurveyRawDto.prototype['fileName'] = undefined;

/**
 * @member {String} position
 */
SurveyRawDto.prototype['position'] = undefined;

/**
 * @member {Date} dateTime
 */
SurveyRawDto.prototype['dateTime'] = undefined;

/**
 * @member {Number} resistance
 */
SurveyRawDto.prototype['resistance'] = undefined;

/**
 * @member {Number} mvo
 */
SurveyRawDto.prototype['mvo'] = undefined;

/**
 * @member {Number} mvz
 */
SurveyRawDto.prototype['mvz'] = undefined;

/**
 * @member {String} direction
 */
SurveyRawDto.prototype['direction'] = undefined;

/**
 * @member {String} comment
 */
SurveyRawDto.prototype['comment'] = undefined;

/**
 * @member {Array.<module:model/ChannelRawDto>} channels
 */
SurveyRawDto.prototype['channels'] = undefined;






export default SurveyRawDto;

