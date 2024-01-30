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
import SingleParamRowDto from './SingleParamRowDto';
import TripleParamRowDto from './TripleParamRowDto';

/**
 * The SummaryFullOpenDto model module.
 * @module model/SummaryFullOpenDto
 * @version 0.1.0
 */
class SummaryFullOpenDto {
    /**
     * Constructs a new <code>SummaryFullOpenDto</code>.
     * @alias module:model/SummaryFullOpenDto
     */
    constructor() { 
        
        SummaryFullOpenDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SummaryFullOpenDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SummaryFullOpenDto} obj Optional instance to populate.
     * @return {module:model/SummaryFullOpenDto} The populated <code>SummaryFullOpenDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SummaryFullOpenDto();

            if (data.hasOwnProperty('val01')) {
                obj['val01'] = SingleParamRowDto.constructFromObject(data['val01']);
            }
            if (data.hasOwnProperty('val02')) {
                obj['val02'] = TripleParamRowDto.constructFromObject(data['val02']);
            }
            if (data.hasOwnProperty('val03')) {
                obj['val03'] = SingleParamRowDto.constructFromObject(data['val03']);
            }
            if (data.hasOwnProperty('val04')) {
                obj['val04'] = TripleParamRowDto.constructFromObject(data['val04']);
            }
            if (data.hasOwnProperty('val05')) {
                obj['val05'] = SingleParamRowDto.constructFromObject(data['val05']);
            }
            if (data.hasOwnProperty('val06')) {
                obj['val06'] = TripleParamRowDto.constructFromObject(data['val06']);
            }
            if (data.hasOwnProperty('val07')) {
                obj['val07'] = SingleParamRowDto.constructFromObject(data['val07']);
            }
            if (data.hasOwnProperty('val08')) {
                obj['val08'] = TripleParamRowDto.constructFromObject(data['val08']);
            }
            if (data.hasOwnProperty('val09')) {
                obj['val09'] = TripleParamRowDto.constructFromObject(data['val09']);
            }
            if (data.hasOwnProperty('val10')) {
                obj['val10'] = TripleParamRowDto.constructFromObject(data['val10']);
            }
            if (data.hasOwnProperty('val11')) {
                obj['val11'] = SingleParamRowDto.constructFromObject(data['val11']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SummaryFullOpenDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SummaryFullOpenDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `val01`
        if (data['val01']) { // data not null
          SingleParamRowDto.validateJSON(data['val01']);
        }
        // validate the optional field `val02`
        if (data['val02']) { // data not null
          TripleParamRowDto.validateJSON(data['val02']);
        }
        // validate the optional field `val03`
        if (data['val03']) { // data not null
          SingleParamRowDto.validateJSON(data['val03']);
        }
        // validate the optional field `val04`
        if (data['val04']) { // data not null
          TripleParamRowDto.validateJSON(data['val04']);
        }
        // validate the optional field `val05`
        if (data['val05']) { // data not null
          SingleParamRowDto.validateJSON(data['val05']);
        }
        // validate the optional field `val06`
        if (data['val06']) { // data not null
          TripleParamRowDto.validateJSON(data['val06']);
        }
        // validate the optional field `val07`
        if (data['val07']) { // data not null
          SingleParamRowDto.validateJSON(data['val07']);
        }
        // validate the optional field `val08`
        if (data['val08']) { // data not null
          TripleParamRowDto.validateJSON(data['val08']);
        }
        // validate the optional field `val09`
        if (data['val09']) { // data not null
          TripleParamRowDto.validateJSON(data['val09']);
        }
        // validate the optional field `val10`
        if (data['val10']) { // data not null
          TripleParamRowDto.validateJSON(data['val10']);
        }
        // validate the optional field `val11`
        if (data['val11']) { // data not null
          SingleParamRowDto.validateJSON(data['val11']);
        }

        return true;
    }


}



/**
 * @member {module:model/SingleParamRowDto} val01
 */
SummaryFullOpenDto.prototype['val01'] = undefined;

/**
 * @member {module:model/TripleParamRowDto} val02
 */
SummaryFullOpenDto.prototype['val02'] = undefined;

/**
 * @member {module:model/SingleParamRowDto} val03
 */
SummaryFullOpenDto.prototype['val03'] = undefined;

/**
 * @member {module:model/TripleParamRowDto} val04
 */
SummaryFullOpenDto.prototype['val04'] = undefined;

/**
 * @member {module:model/SingleParamRowDto} val05
 */
SummaryFullOpenDto.prototype['val05'] = undefined;

/**
 * @member {module:model/TripleParamRowDto} val06
 */
SummaryFullOpenDto.prototype['val06'] = undefined;

/**
 * @member {module:model/SingleParamRowDto} val07
 */
SummaryFullOpenDto.prototype['val07'] = undefined;

/**
 * @member {module:model/TripleParamRowDto} val08
 */
SummaryFullOpenDto.prototype['val08'] = undefined;

/**
 * @member {module:model/TripleParamRowDto} val09
 */
SummaryFullOpenDto.prototype['val09'] = undefined;

/**
 * @member {module:model/TripleParamRowDto} val10
 */
SummaryFullOpenDto.prototype['val10'] = undefined;

/**
 * @member {module:model/SingleParamRowDto} val11
 */
SummaryFullOpenDto.prototype['val11'] = undefined;






export default SummaryFullOpenDto;

