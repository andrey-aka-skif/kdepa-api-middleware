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
    instance = new KdepaApi.Statistics();
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

  describe('Statistics', function() {
    it('should create an instance of Statistics', function() {
      // uncomment below and update the code to test Statistics
      //var instance = new KdepaApi.Statistics();
      //expect(instance).to.be.a(KdepaApi.Statistics);
    });

    it('should have the property min (base name: "min")', function() {
      // uncomment below and update the code to test the property min
      //var instance = new KdepaApi.Statistics();
      //expect(instance).to.be();
    });

    it('should have the property max (base name: "max")', function() {
      // uncomment below and update the code to test the property max
      //var instance = new KdepaApi.Statistics();
      //expect(instance).to.be();
    });

    it('should have the property p (base name: "p")', function() {
      // uncomment below and update the code to test the property p
      //var instance = new KdepaApi.Statistics();
      //expect(instance).to.be();
    });

    it('should have the property fine (base name: "fine")', function() {
      // uncomment below and update the code to test the property fine
      //var instance = new KdepaApi.Statistics();
      //expect(instance).to.be();
    });

  });

}));
