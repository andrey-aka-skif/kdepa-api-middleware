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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KdepaApi);
  }
}(this, function(expect, KdepaApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto', function() {
    it('should create an instance of RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto', function() {
      // uncomment below and update the code to test RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be.a(KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto);
    });

    it('should have the property pageIndex (base name: "pageIndex")', function() {
      // uncomment below and update the code to test the property pageIndex
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be();
    });

    it('should have the property totalItems (base name: "totalItems")', function() {
      // uncomment below and update the code to test the property totalItems
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "totalPages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instance = new KdepaApi.RegulatoryDocumentDtoQueryIdsFilterDtoPagedItemsDto();
      //expect(instance).to.be();
    });

  });

}));
