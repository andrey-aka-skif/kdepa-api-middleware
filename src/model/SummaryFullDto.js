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
import SummaryFullCloseDto from './SummaryFullCloseDto';
import SummaryFullGeneralDto from './SummaryFullGeneralDto';
import SummaryFullOpenDto from './SummaryFullOpenDto';

/**
 * The SummaryFullDto model module.
 * @module model/SummaryFullDto
 * @version 0.1.0
 */
class SummaryFullDto {
    /**
     * Constructs a new <code>SummaryFullDto</code>.
     * @alias module:model/SummaryFullDto
     */
    constructor() { 
        
        SummaryFullDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SummaryFullDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SummaryFullDto} obj Optional instance to populate.
     * @return {module:model/SummaryFullDto} The populated <code>SummaryFullDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SummaryFullDto();

            if (data.hasOwnProperty('general')) {
                obj['general'] = SummaryFullGeneralDto.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('open')) {
                obj['open'] = SummaryFullOpenDto.constructFromObject(data['open']);
            }
            if (data.hasOwnProperty('close')) {
                obj['close'] = SummaryFullCloseDto.constructFromObject(data['close']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SummaryFullDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SummaryFullDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `general`
        if (data['general']) { // data not null
          SummaryFullGeneralDto.validateJSON(data['general']);
        }
        // validate the optional field `open`
        if (data['open']) { // data not null
          SummaryFullOpenDto.validateJSON(data['open']);
        }
        // validate the optional field `close`
        if (data['close']) { // data not null
          SummaryFullCloseDto.validateJSON(data['close']);
        }

        return true;
    }


}



/**
 * @member {module:model/SummaryFullGeneralDto} general
 */
SummaryFullDto.prototype['general'] = undefined;

/**
 * @member {module:model/SummaryFullOpenDto} open
 */
SummaryFullDto.prototype['open'] = undefined;

/**
 * @member {module:model/SummaryFullCloseDto} close
 */
SummaryFullDto.prototype['close'] = undefined;






export default SummaryFullDto;
