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
    instance = new KdepaApi.DriveMarksQueryFilterDto();
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

  describe('DriveMarksQueryFilterDto', function() {
    it('should create an instance of DriveMarksQueryFilterDto', function() {
      // uncomment below and update the code to test DriveMarksQueryFilterDto
      //var instance = new KdepaApi.DriveMarksQueryFilterDto();
      //expect(instance).to.be.a(KdepaApi.DriveMarksQueryFilterDto);
    });

    it('should have the property ids (base name: "ids")', function() {
      // uncomment below and update the code to test the property ids
      //var instance = new KdepaApi.DriveMarksQueryFilterDto();
      //expect(instance).to.be();
    });

    it('should have the property nameSearchString (base name: "nameSearchString")', function() {
      // uncomment below and update the code to test the property nameSearchString
      //var instance = new KdepaApi.DriveMarksQueryFilterDto();
      //expect(instance).to.be();
    });

  });

}));
