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
 * The UpdateChannelSubRequest model module.
 * @module model/UpdateChannelSubRequest
 * @version 0.1.0
 */
class UpdateChannelSubRequest {
    /**
     * Constructs a new <code>UpdateChannelSubRequest</code>.
     * @alias module:model/UpdateChannelSubRequest
     */
    constructor() { 
        
        UpdateChannelSubRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateChannelSubRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateChannelSubRequest} obj Optional instance to populate.
     * @return {module:model/UpdateChannelSubRequest} The populated <code>UpdateChannelSubRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateChannelSubRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('surveyId')) {
                obj['surveyId'] = ApiClient.convertToType(data['surveyId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sampleRate')) {
                obj['sampleRate'] = ApiClient.convertToType(data['sampleRate'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('sumCoeff')) {
                obj['sumCoeff'] = ApiClient.convertToType(data['sumCoeff'], 'Number');
            }
            if (data.hasOwnProperty('devCoeff')) {
                obj['devCoeff'] = ApiClient.convertToType(data['devCoeff'], 'Number');
            }
            if (data.hasOwnProperty('offsetFromZero')) {
                obj['offsetFromZero'] = ApiClient.convertToType(data['offsetFromZero'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateChannelSubRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateChannelSubRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
            throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
UpdateChannelSubRequest.prototype['id'] = undefined;

/**
 * @member {Number} surveyId
 */
UpdateChannelSubRequest.prototype['surveyId'] = undefined;

/**
 * @member {String} name
 */
UpdateChannelSubRequest.prototype['name'] = undefined;

/**
 * @member {Number} sampleRate
 */
UpdateChannelSubRequest.prototype['sampleRate'] = undefined;

/**
 * @member {String} unit
 */
UpdateChannelSubRequest.prototype['unit'] = undefined;

/**
 * @member {String} type
 */
UpdateChannelSubRequest.prototype['type'] = undefined;

/**
 * @member {Number} sumCoeff
 */
UpdateChannelSubRequest.prototype['sumCoeff'] = undefined;

/**
 * @member {Number} devCoeff
 */
UpdateChannelSubRequest.prototype['devCoeff'] = undefined;

/**
 * @member {Number} offsetFromZero
 */
UpdateChannelSubRequest.prototype['offsetFromZero'] = undefined;






export default UpdateChannelSubRequest;
