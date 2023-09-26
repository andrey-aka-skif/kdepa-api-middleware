/**
 * КДЭПА CRUD
 * КДЭПА CRUD API
 *
 * The version of the OpenAPI document: v0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SimpleQueryFilter from './SimpleQueryFilter';
import SortDto from './SortDto';
import Station from './Station';

/**
 * The StationPaginatedItemsViewModel model module.
 * @module model/StationPaginatedItemsViewModel
 * @version v0.1
 */
class StationPaginatedItemsViewModel {
    /**
     * Constructs a new <code>StationPaginatedItemsViewModel</code>.
     * @alias module:model/StationPaginatedItemsViewModel
     */
    constructor() { 
        
        StationPaginatedItemsViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StationPaginatedItemsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StationPaginatedItemsViewModel} obj Optional instance to populate.
     * @return {module:model/StationPaginatedItemsViewModel} The populated <code>StationPaginatedItemsViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StationPaginatedItemsViewModel();

            if (data.hasOwnProperty('pageIndex')) {
                obj['pageIndex'] = ApiClient.convertToType(data['pageIndex'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('itemsPerPage')) {
                obj['itemsPerPage'] = ApiClient.convertToType(data['itemsPerPage'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Station]);
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = SortDto.constructFromObject(data['sort']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = SimpleQueryFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StationPaginatedItemsViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StationPaginatedItemsViewModel</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                Station.validateJSON(item);
            };
        }
        // validate the optional field `sort`
        if (data['sort']) { // data not null
          SortDto.validateJSON(data['sort']);
        }
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          SimpleQueryFilter.validateJSON(data['filter']);
        }

        return true;
    }


}



/**
 * @member {Number} pageIndex
 */
StationPaginatedItemsViewModel.prototype['pageIndex'] = undefined;

/**
 * @member {Number} totalPages
 */
StationPaginatedItemsViewModel.prototype['totalPages'] = undefined;

/**
 * @member {Number} itemsPerPage
 */
StationPaginatedItemsViewModel.prototype['itemsPerPage'] = undefined;

/**
 * @member {Array.<module:model/Station>} items
 */
StationPaginatedItemsViewModel.prototype['items'] = undefined;

/**
 * @member {module:model/SortDto} sort
 */
StationPaginatedItemsViewModel.prototype['sort'] = undefined;

/**
 * @member {module:model/SimpleQueryFilter} filter
 */
StationPaginatedItemsViewModel.prototype['filter'] = undefined;






export default StationPaginatedItemsViewModel;

