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
    instance = new KdepaApi.FactoriesQueryFilterDto();
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

  describe('FactoriesQueryFilterDto', function() {
    it('should create an instance of FactoriesQueryFilterDto', function() {
      // uncomment below and update the code to test FactoriesQueryFilterDto
      //var instance = new KdepaApi.FactoriesQueryFilterDto();
      //expect(instance).to.be.a(KdepaApi.FactoriesQueryFilterDto);
    });

    it('should have the property ids (base name: "ids")', function() {
      // uncomment below and update the code to test the property ids
      //var instance = new KdepaApi.FactoriesQueryFilterDto();
      //expect(instance).to.be();
    });

    it('should have the property factorySearchString (base name: "factorySearchString")', function() {
      // uncomment below and update the code to test the property factorySearchString
      //var instance = new KdepaApi.FactoriesQueryFilterDto();
      //expect(instance).to.be();
    });

  });

}));
