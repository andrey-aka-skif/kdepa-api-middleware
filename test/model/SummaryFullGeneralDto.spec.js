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
    instance = new KdepaApi.SummaryFullGeneralDto();
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

  describe('SummaryFullGeneralDto', function() {
    it('should create an instance of SummaryFullGeneralDto', function() {
      // uncomment below and update the code to test SummaryFullGeneralDto
      //var instance = new KdepaApi.SummaryFullGeneralDto();
      //expect(instance).to.be.a(KdepaApi.SummaryFullGeneralDto);
    });

    it('should have the property val01 (base name: "val01")', function() {
      // uncomment below and update the code to test the property val01
      //var instance = new KdepaApi.SummaryFullGeneralDto();
      //expect(instance).to.be();
    });

    it('should have the property val02 (base name: "val02")', function() {
      // uncomment below and update the code to test the property val02
      //var instance = new KdepaApi.SummaryFullGeneralDto();
      //expect(instance).to.be();
    });

    it('should have the property val03 (base name: "val03")', function() {
      // uncomment below and update the code to test the property val03
      //var instance = new KdepaApi.SummaryFullGeneralDto();
      //expect(instance).to.be();
    });

  });

}));
