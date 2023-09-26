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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Crud);
  }
}(this, function(expect, Crud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Crud.StationsApi();
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

  describe('StationsApi', function() {
    describe('apiVversionStationsDefaultGet', function() {
      it('should call apiVversionStationsDefaultGet successfully', function(done) {
        //uncomment below and update the code to test apiVversionStationsDefaultGet
        //instance.apiVversionStationsDefaultGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiVversionStationsGet', function() {
      it('should call apiVversionStationsGet successfully', function(done) {
        //uncomment below and update the code to test apiVversionStationsGet
        //instance.apiVversionStationsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiVversionStationsIdDelete', function() {
      it('should call apiVversionStationsIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiVversionStationsIdDelete
        //instance.apiVversionStationsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiVversionStationsIdGet', function() {
      it('should call apiVversionStationsIdGet successfully', function(done) {
        //uncomment below and update the code to test apiVversionStationsIdGet
        //instance.apiVversionStationsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiVversionStationsPost', function() {
      it('should call apiVversionStationsPost successfully', function(done) {
        //uncomment below and update the code to test apiVversionStationsPost
        //instance.apiVversionStationsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiVversionStationsPut', function() {
      it('should call apiVversionStationsPut successfully', function(done) {
        //uncomment below and update the code to test apiVversionStationsPut
        //instance.apiVversionStationsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
