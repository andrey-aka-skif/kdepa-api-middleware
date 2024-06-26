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
    instance = new KdepaApi.CabinetsApi();
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

  describe('CabinetsApi', function() {
    describe('cabinetsGet', function() {
      it('should call cabinetsGet successfully', function(done) {
        //uncomment below and update the code to test cabinetsGet
        //instance.cabinetsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetsIdDelete', function() {
      it('should call cabinetsIdDelete successfully', function(done) {
        //uncomment below and update the code to test cabinetsIdDelete
        //instance.cabinetsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetsIdGet', function() {
      it('should call cabinetsIdGet successfully', function(done) {
        //uncomment below and update the code to test cabinetsIdGet
        //instance.cabinetsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetsIdPut', function() {
      it('should call cabinetsIdPut successfully', function(done) {
        //uncomment below and update the code to test cabinetsIdPut
        //instance.cabinetsIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetsPost', function() {
      it('should call cabinetsPost successfully', function(done) {
        //uncomment below and update the code to test cabinetsPost
        //instance.cabinetsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
