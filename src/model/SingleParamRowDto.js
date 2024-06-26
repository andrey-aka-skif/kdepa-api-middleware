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
import DocDto from './DocDto';
import SingleParamDto from './SingleParamDto';
import StatisticsDto from './StatisticsDto';

/**
 * The SingleParamRowDto model module.
 * @module model/SingleParamRowDto
 * @version 0.1.0
 */
class SingleParamRowDto {
    /**
     * Constructs a new <code>SingleParamRowDto</code>.
     * @alias module:model/SingleParamRowDto
     */
    constructor() { 
        
        SingleParamRowDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SingleParamRowDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SingleParamRowDto} obj Optional instance to populate.
     * @return {module:model/SingleParamRowDto} The populated <code>SingleParamRowDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleParamRowDto();

            if (data.hasOwnProperty('parameter')) {
                obj['parameter'] = SingleParamDto.constructFromObject(data['parameter']);
            }
            if (data.hasOwnProperty('docs')) {
                obj['docs'] = ApiClient.convertToType(data['docs'], [DocDto]);
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = StatisticsDto.constructFromObject(data['statistics']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SingleParamRowDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SingleParamRowDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `parameter`
        if (data['parameter']) { // data not null
          SingleParamDto.validateJSON(data['parameter']);
        }
        if (data['docs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['docs'])) {
                throw new Error("Expected the field `docs` to be an array in the JSON data but got " + data['docs']);
            }
            // validate the optional field `docs` (array)
            for (const item of data['docs']) {
                DocDto.validateJSON(item);
            };
        }
        // validate the optional field `statistics`
        if (data['statistics']) { // data not null
          StatisticsDto.validateJSON(data['statistics']);
        }

        return true;
    }


}



/**
 * @member {module:model/SingleParamDto} parameter
 */
SingleParamRowDto.prototype['parameter'] = undefined;

/**
 * @member {Array.<module:model/DocDto>} docs
 */
SingleParamRowDto.prototype['docs'] = undefined;

/**
 * @member {module:model/StatisticsDto} statistics
 */
SingleParamRowDto.prototype['statistics'] = undefined;






export default SingleParamRowDto;

