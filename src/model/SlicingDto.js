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
 * The SlicingDto model module.
 * @module model/SlicingDto
 * @version 0.1.0
 */
class SlicingDto {
    /**
     * Constructs a new <code>SlicingDto</code>.
     * @alias module:model/SlicingDto
     */
    constructor() { 
        
        SlicingDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SlicingDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlicingDto} obj Optional instance to populate.
     * @return {module:model/SlicingDto} The populated <code>SlicingDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SlicingDto();

            if (data.hasOwnProperty('cyclO')) {
                obj['cyclO'] = TimeRangeDto.constructFromObject(data['cyclO']);
            }
            if (data.hasOwnProperty('puskO')) {
                obj['puskO'] = TimeRangeDto.constructFromObject(data['puskO']);
            }
            if (data.hasOwnProperty('luftEO')) {
                obj['luftEO'] = TimeRangeDto.constructFromObject(data['luftEO']);
            }
            if (data.hasOwnProperty('luftHO')) {
                obj['luftHO'] = TimeRangeDto.constructFromObject(data['luftHO']);
            }
            if (data.hasOwnProperty('luftZO')) {
                obj['luftZO'] = TimeRangeDto.constructFromObject(data['luftZO']);
            }
            if (data.hasOwnProperty('sryv')) {
                obj['sryv'] = TimeRangeDto.constructFromObject(data['sryv']);
            }
            if (data.hasOwnProperty('hodO')) {
                obj['hodO'] = TimeRangeDto.constructFromObject(data['hodO']);
            }
            if (data.hasOwnProperty('otklO')) {
                obj['otklO'] = TimeRangeDto.constructFromObject(data['otklO']);
            }
            if (data.hasOwnProperty('cyclZ')) {
                obj['cyclZ'] = TimeRangeDto.constructFromObject(data['cyclZ']);
            }
            if (data.hasOwnProperty('puskZ')) {
                obj['puskZ'] = TimeRangeDto.constructFromObject(data['puskZ']);
            }
            if (data.hasOwnProperty('luftEZ')) {
                obj['luftEZ'] = TimeRangeDto.constructFromObject(data['luftEZ']);
            }
            if (data.hasOwnProperty('luftHZ')) {
                obj['luftHZ'] = TimeRangeDto.constructFromObject(data['luftHZ']);
            }
            if (data.hasOwnProperty('luftZZ')) {
                obj['luftZZ'] = TimeRangeDto.constructFromObject(data['luftZZ']);
            }
            if (data.hasOwnProperty('hodZ')) {
                obj['hodZ'] = TimeRangeDto.constructFromObject(data['hodZ']);
            }
            if (data.hasOwnProperty('zat')) {
                obj['zat'] = TimeRangeDto.constructFromObject(data['zat']);
            }
            if (data.hasOwnProperty('otklZ')) {
                obj['otklZ'] = TimeRangeDto.constructFromObject(data['otklZ']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SlicingDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SlicingDto</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cyclO`
        if (data['cyclO']) { // data not null
          TimeRangeDto.validateJSON(data['cyclO']);
        }
        // validate the optional field `puskO`
        if (data['puskO']) { // data not null
          TimeRangeDto.validateJSON(data['puskO']);
        }
        // validate the optional field `luftEO`
        if (data['luftEO']) { // data not null
          TimeRangeDto.validateJSON(data['luftEO']);
        }
        // validate the optional field `luftHO`
        if (data['luftHO']) { // data not null
          TimeRangeDto.validateJSON(data['luftHO']);
        }
        // validate the optional field `luftZO`
        if (data['luftZO']) { // data not null
          TimeRangeDto.validateJSON(data['luftZO']);
        }
        // validate the optional field `sryv`
        if (data['sryv']) { // data not null
          TimeRangeDto.validateJSON(data['sryv']);
        }
        // validate the optional field `hodO`
        if (data['hodO']) { // data not null
          TimeRangeDto.validateJSON(data['hodO']);
        }
        // validate the optional field `otklO`
        if (data['otklO']) { // data not null
          TimeRangeDto.validateJSON(data['otklO']);
        }
        // validate the optional field `cyclZ`
        if (data['cyclZ']) { // data not null
          TimeRangeDto.validateJSON(data['cyclZ']);
        }
        // validate the optional field `puskZ`
        if (data['puskZ']) { // data not null
          TimeRangeDto.validateJSON(data['puskZ']);
        }
        // validate the optional field `luftEZ`
        if (data['luftEZ']) { // data not null
          TimeRangeDto.validateJSON(data['luftEZ']);
        }
        // validate the optional field `luftHZ`
        if (data['luftHZ']) { // data not null
          TimeRangeDto.validateJSON(data['luftHZ']);
        }
        // validate the optional field `luftZZ`
        if (data['luftZZ']) { // data not null
          TimeRangeDto.validateJSON(data['luftZZ']);
        }
        // validate the optional field `hodZ`
        if (data['hodZ']) { // data not null
          TimeRangeDto.validateJSON(data['hodZ']);
        }
        // validate the optional field `zat`
        if (data['zat']) { // data not null
          TimeRangeDto.validateJSON(data['zat']);
        }
        // validate the optional field `otklZ`
        if (data['otklZ']) { // data not null
          TimeRangeDto.validateJSON(data['otklZ']);
        }

        return true;
    }


}



/**
 * @member {module:model/TimeRangeDto} cyclO
 */
SlicingDto.prototype['cyclO'] = undefined;

/**
 * @member {module:model/TimeRangeDto} puskO
 */
SlicingDto.prototype['puskO'] = undefined;

/**
 * @member {module:model/TimeRangeDto} luftEO
 */
SlicingDto.prototype['luftEO'] = undefined;

/**
 * @member {module:model/TimeRangeDto} luftHO
 */
SlicingDto.prototype['luftHO'] = undefined;

/**
 * @member {module:model/TimeRangeDto} luftZO
 */
SlicingDto.prototype['luftZO'] = undefined;

/**
 * @member {module:model/TimeRangeDto} sryv
 */
SlicingDto.prototype['sryv'] = undefined;

/**
 * @member {module:model/TimeRangeDto} hodO
 */
SlicingDto.prototype['hodO'] = undefined;

/**
 * @member {module:model/TimeRangeDto} otklO
 */
SlicingDto.prototype['otklO'] = undefined;

/**
 * @member {module:model/TimeRangeDto} cyclZ
 */
SlicingDto.prototype['cyclZ'] = undefined;

/**
 * @member {module:model/TimeRangeDto} puskZ
 */
SlicingDto.prototype['puskZ'] = undefined;

/**
 * @member {module:model/TimeRangeDto} luftEZ
 */
SlicingDto.prototype['luftEZ'] = undefined;

/**
 * @member {module:model/TimeRangeDto} luftHZ
 */
SlicingDto.prototype['luftHZ'] = undefined;

/**
 * @member {module:model/TimeRangeDto} luftZZ
 */
SlicingDto.prototype['luftZZ'] = undefined;

/**
 * @member {module:model/TimeRangeDto} hodZ
 */
SlicingDto.prototype['hodZ'] = undefined;

/**
 * @member {module:model/TimeRangeDto} zat
 */
SlicingDto.prototype['zat'] = undefined;

/**
 * @member {module:model/TimeRangeDto} otklZ
 */
SlicingDto.prototype['otklZ'] = undefined;






export default SlicingDto;

