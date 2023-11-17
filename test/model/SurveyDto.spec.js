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
    instance = new KdepaApi.SurveyDto();
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

  describe('SurveyDto', function() {
    it('should create an instance of SurveyDto', function() {
      // uncomment below and update the code to test SurveyDto
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be.a(KdepaApi.SurveyDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property assemblyId (base name: "assemblyId")', function() {
      // uncomment below and update the code to test the property assemblyId
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property dateTime (base name: "dateTime")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property resistance (base name: "resistance")', function() {
      // uncomment below and update the code to test the property resistance
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property mvo (base name: "mvo")', function() {
      // uncomment below and update the code to test the property mvo
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property mvz (base name: "mvz")', function() {
      // uncomment below and update the code to test the property mvz
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

    it('should have the property slicing (base name: "slicing")', function() {
      // uncomment below and update the code to test the property slicing
      //var instance = new KdepaApi.SurveyDto();
      //expect(instance).to.be();
    });

  });

}));
