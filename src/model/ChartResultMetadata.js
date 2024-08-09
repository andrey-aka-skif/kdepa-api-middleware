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
 * The ChartResultMetadata model module.
 * @module model/ChartResultMetadata
 * @version 0.1.0
 */
class ChartResultMetadata {
    /**
     * Constructs a new <code>ChartResultMetadata</code>.
     * @alias module:model/ChartResultMetadata
     */
    constructor() { 
        
        ChartResultMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChartResultMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChartResultMetadata} obj Optional instance to populate.
     * @return {module:model/ChartResultMetadata} The populated <code>ChartResultMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChartResultMetadata();

            if (data.hasOwnProperty('sampleRate')) {
                obj['sampleRate'] = ApiClient.convertToType(data['sampleRate'], 'Number');
            }
            if (data.hasOwnProperty('postProcessing')) {
                obj['postProcessing'] = ApiClient.convertToType(data['postProcessing'], 'String');
            }
            if (data.hasOwnProperty('decimation')) {
                obj['decimation'] = ApiClient.convertToType(data['decimation'], 'String');
            }
            if (data.hasOwnProperty('decimationSamples')) {
                obj['decimationSamples'] = ApiClient.convertToType(data['decimationSamples'], 'Number');
            }
            if (data.hasOwnProperty('decimationRatio')) {
                obj['decimationRatio'] = ApiClient.convertToType(data['decimationRatio'], 'Number');
            }
            if (data.hasOwnProperty('fromTime')) {
                obj['fromTime'] = ApiClient.convertToType(data['fromTime'], 'Number');
            }
            if (data.hasOwnProperty('toTime')) {
                obj['toTime'] = ApiClient.convertToType(data['toTime'], 'Number');
            }
            if (data.hasOwnProperty('channelName')) {
                obj['channelName'] = ApiClient.convertToType(data['channelName'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChartResultMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChartResultMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['postProcessing'] && !(typeof data['postProcessing'] === 'string' || data['postProcessing'] instanceof String)) {
            throw new Error("Expected the field `postProcessing` to be a primitive type in the JSON string but got " + data['postProcessing']);
        }
        // ensure the json data is a string
        if (data['decimation'] && !(typeof data['decimation'] === 'string' || data['decimation'] instanceof String)) {
            throw new Error("Expected the field `decimation` to be a primitive type in the JSON string but got " + data['decimation']);
        }
        // ensure the json data is a string
        if (data['channelName'] && !(typeof data['channelName'] === 'string' || data['channelName'] instanceof String)) {
            throw new Error("Expected the field `channelName` to be a primitive type in the JSON string but got " + data['channelName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }

        return true;
    }


}



/**
 * @member {Number} sampleRate
 */
ChartResultMetadata.prototype['sampleRate'] = undefined;

/**
 * @member {String} postProcessing
 */
ChartResultMetadata.prototype['postProcessing'] = undefined;

/**
 * @member {String} decimation
 */
ChartResultMetadata.prototype['decimation'] = undefined;

/**
 * @member {Number} decimationSamples
 */
ChartResultMetadata.prototype['decimationSamples'] = undefined;

/**
 * @member {Number} decimationRatio
 */
ChartResultMetadata.prototype['decimationRatio'] = undefined;

/**
 * @member {Number} fromTime
 */
ChartResultMetadata.prototype['fromTime'] = undefined;

/**
 * @member {Number} toTime
 */
ChartResultMetadata.prototype['toTime'] = undefined;

/**
 * @member {String} channelName
 */
ChartResultMetadata.prototype['channelName'] = undefined;

/**
 * @member {Array.<String>} errors
 */
ChartResultMetadata.prototype['errors'] = undefined;






export default ChartResultMetadata;

