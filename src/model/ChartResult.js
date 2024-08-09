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
import ChartResultMetadata from './ChartResultMetadata';
import Point from './Point';

/**
 * The ChartResult model module.
 * @module model/ChartResult
 * @version 0.1.0
 */
class ChartResult {
    /**
     * Constructs a new <code>ChartResult</code>.
     * @alias module:model/ChartResult
     */
    constructor() { 
        
        ChartResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChartResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChartResult} obj Optional instance to populate.
     * @return {module:model/ChartResult} The populated <code>ChartResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChartResult();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ChartResultMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('chartPoints')) {
                obj['chartPoints'] = ApiClient.convertToType(data['chartPoints'], [Point]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChartResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChartResult</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          ChartResultMetadata.validateJSON(data['metadata']);
        }
        if (data['chartPoints']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['chartPoints'])) {
                throw new Error("Expected the field `chartPoints` to be an array in the JSON data but got " + data['chartPoints']);
            }
            // validate the optional field `chartPoints` (array)
            for (const item of data['chartPoints']) {
                Point.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/ChartResultMetadata} metadata
 */
ChartResult.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Point>} chartPoints
 */
ChartResult.prototype['chartPoints'] = undefined;






export default ChartResult;

