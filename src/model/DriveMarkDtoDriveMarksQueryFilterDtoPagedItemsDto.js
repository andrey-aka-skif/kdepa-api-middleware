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
import DriveMarkDto from './DriveMarkDto';
import DriveMarksQueryFilterDto from './DriveMarksQueryFilterDto';
import SortDto from './SortDto';

/**
 * The DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto model module.
 * @module model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto
 * @version 0.1.0
 */
class DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto {
    /**
     * Constructs a new <code>DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto</code>.
     * @alias module:model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto
     */
    constructor() { 
        
        DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto} obj Optional instance to populate.
     * @return {module:model/DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto} The populated <code>DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto();

            if (data.hasOwnProperty('pageIndex')) {
                obj['pageIndex'] = ApiClient.convertToType(data['pageIndex'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('totalItems')) {
                obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [DriveMarkDto]);
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = SortDto.constructFromObject(data['sort']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = DriveMarksQueryFilterDto.constructFromObject(data['filter']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                DriveMarkDto.validateJSON(item);
            };
        }
        // validate the optional field `sort`
        if (data['sort']) { // data not null
          SortDto.validateJSON(data['sort']);
        }
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          DriveMarksQueryFilterDto.validateJSON(data['filter']);
        }

        return true;
    }


}



/**
 * @member {Number} pageIndex
 */
DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.prototype['pageIndex'] = undefined;

/**
 * @member {Number} pageSize
 */
DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalItems
 */
DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.prototype['totalItems'] = undefined;

/**
 * @member {Number} totalPages
 */
DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.prototype['totalPages'] = undefined;

/**
 * @member {Array.<module:model/DriveMarkDto>} items
 */
DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.prototype['items'] = undefined;

/**
 * @member {module:model/SortDto} sort
 */
DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.prototype['sort'] = undefined;

/**
 * @member {module:model/DriveMarksQueryFilterDto} filter
 */
DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto.prototype['filter'] = undefined;






export default DriveMarkDtoDriveMarksQueryFilterDtoPagedItemsDto;

