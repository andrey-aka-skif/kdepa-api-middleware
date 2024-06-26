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
import DescriptionValuePareDto from './DescriptionValuePareDto';
import SummaryShortPreviousDto from './SummaryShortPreviousDto';

/**
 * The SummaryShortDto model module.
 * @module model/SummaryShortDto
 * @version 0.1.0
 */
class SummaryShortDto {
    /**
     * Constructs a new <code>SummaryShortDto</code>.
     * @alias module:model/SummaryShortDto
     */
    constructor() { 
        
        SummaryShortDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SummaryShortDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SummaryShortDto} obj Optional instance to populate.
     * @return {module:model/SummaryShortDto} The populated <code>SummaryShortDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SummaryShortDto();

            if (data.hasOwnProperty('open')) {
                obj['open'] = DescriptionValuePareDto.constructFromObject(data['open']);
            }
            if (data.hasOwnProperty('close')) {
                obj['close'] = DescriptionValuePareDto.constructFromObject(data['close']);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = SummaryShortPreviousDto.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('torque')) {
                obj['torque'] = DescriptionValuePareDto.constructFromObject(data['torque']);
            }
            if (data.hasOwnProperty('recommend')) {
                obj['recommend'] = ApiClient.convertToType(data['recommend'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SummaryShortDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SummaryShortDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `open`
        if (data['open']) { // data not null
          DescriptionValuePareDto.validateJSON(data['open']);
        }
        // validate the optional field `close`
        if (data['close']) { // data not null
          DescriptionValuePareDto.validateJSON(data['close']);
        }
        // validate the optional field `previous`
        if (data['previous']) { // data not null
          SummaryShortPreviousDto.validateJSON(data['previous']);
        }
        // validate the optional field `torque`
        if (data['torque']) { // data not null
          DescriptionValuePareDto.validateJSON(data['torque']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['recommend'])) {
            throw new Error("Expected the field `recommend` to be an array in the JSON data but got " + data['recommend']);
        }

        return true;
    }


}



/**
 * @member {module:model/DescriptionValuePareDto} open
 */
SummaryShortDto.prototype['open'] = undefined;

/**
 * @member {module:model/DescriptionValuePareDto} close
 */
SummaryShortDto.prototype['close'] = undefined;

/**
 * @member {module:model/SummaryShortPreviousDto} previous
 */
SummaryShortDto.prototype['previous'] = undefined;

/**
 * @member {module:model/DescriptionValuePareDto} torque
 */
SummaryShortDto.prototype['torque'] = undefined;

/**
 * @member {Array.<String>} recommend
 */
SummaryShortDto.prototype['recommend'] = undefined;






export default SummaryShortDto;

