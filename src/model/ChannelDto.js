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
import TimeRangeDto from './TimeRangeDto';

/**
 * The ChannelDto model module.
 * @module model/ChannelDto
 * @version 0.1.0
 */
class ChannelDto {
    /**
     * Constructs a new <code>ChannelDto</code>.
     * @alias module:model/ChannelDto
     */
    constructor() { 
        
        ChannelDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelDto} obj Optional instance to populate.
     * @return {module:model/ChannelDto} The populated <code>ChannelDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('surveyId')) {
                obj['surveyId'] = ApiClient.convertToType(data['surveyId'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('sampleRate')) {
                obj['sampleRate'] = ApiClient.convertToType(data['sampleRate'], 'Number');
            }
            if (data.hasOwnProperty('sumCoeff')) {
                obj['sumCoeff'] = ApiClient.convertToType(data['sumCoeff'], 'Number');
            }
            if (data.hasOwnProperty('devCoeff')) {
                obj['devCoeff'] = ApiClient.convertToType(data['devCoeff'], 'Number');
            }
            if (data.hasOwnProperty('samplesCount')) {
                obj['samplesCount'] = ApiClient.convertToType(data['samplesCount'], 'Number');
            }
            if (data.hasOwnProperty('offsetFromZero')) {
                obj['offsetFromZero'] = ApiClient.convertToType(data['offsetFromZero'], 'Number');
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = TimeRangeDto.constructFromObject(data['range']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChannelDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChannelDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
            throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
        }
        // validate the optional field `range`
        if (data['range']) { // data not null
          TimeRangeDto.validateJSON(data['range']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ChannelDto.prototype['id'] = undefined;

/**
 * @member {Number} surveyId
 */
ChannelDto.prototype['surveyId'] = undefined;

/**
 * @member {String} type
 */
ChannelDto.prototype['type'] = undefined;

/**
 * @member {String} name
 */
ChannelDto.prototype['name'] = undefined;

/**
 * @member {String} unit
 */
ChannelDto.prototype['unit'] = undefined;

/**
 * @member {Number} sampleRate
 */
ChannelDto.prototype['sampleRate'] = undefined;

/**
 * @member {Number} sumCoeff
 */
ChannelDto.prototype['sumCoeff'] = undefined;

/**
 * @member {Number} devCoeff
 */
ChannelDto.prototype['devCoeff'] = undefined;

/**
 * @member {Number} samplesCount
 */
ChannelDto.prototype['samplesCount'] = undefined;

/**
 * @member {Number} offsetFromZero
 */
ChannelDto.prototype['offsetFromZero'] = undefined;

/**
 * @member {module:model/TimeRangeDto} range
 */
ChannelDto.prototype['range'] = undefined;






export default ChannelDto;

