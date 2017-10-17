'use strict';

const async = require('async');

module.exports = function(Drug) {
  var app = require('../../server/server');

  // Drug.disableRemoteMethodByName('replaceOrCreate', true);
  Drug.disableRemoteMethodByName('patchOrCreate', true);
  // Drug.disableRemoteMethodByName('findById', true);
  // Drug.disableRemoteMethodByName('destroyById', true);
  Drug.disableRemoteMethodByName('exists', true);
  Drug.disableRemoteMethodByName('findOne', true);
  Drug.disableRemoteMethodByName('count', true)
  Drug.disableRemoteMethodByName('replaceById', true)
  Drug.disableRemoteMethodByName('createChangeStream', true)
  Drug.disableRemoteMethodByName("updateAll", true);
  Drug.disableRemoteMethodByName("replaceOrCreate", false);
  Drug.disableRemoteMethodByName('replaceById', true);
  Drug.disableRemoteMethodByName('upsertWithWhere', true);
  Drug.disableRemoteMethodByName("prototype.patchAttributes", false);


  Drug.remoteMethod (
      'getDrugs',
      {
        http    : { path: '/getDrugs', verb: 'post'},
        accepts : { arg: 'query', type: 'string' },
        returns : { arg: "Drugs", type: 'array' }
      }
  );

  Drug.getDrugs = function(ctx, cb) {
    Drug.find({}, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }


  Drug.remoteMethod (
      'saveDrugs',
      {
        http    : { path: '/saveDrugs', verb: 'post'},
        accepts : { arg: 'data', type: 'object', http: { source: 'body' }},
        returns : { arg: 'data', type: 'object', http: { source: 'body' }}
      }
  );

  Drug.remoteMethod(
    'drugsMeta',
    {
      description: 'Get meta informations for Drug tables',
      http : { path: '/DrugMetas', verb: 'get'},
      accepts : { arg: 'query', type: 'string' },
      returns: [
        { 
          arg: 'countryOfOrigins',
          type: 'array',
          root: true,
        },
        {
          arg: 'manufactures',
          type: 'array',
          root: true,
        },
        {
          arg: 'distributors',
          type: 'array',
          root: true,
        },
        {
          arg: 'sellerClassifications',
          type: 'array',
          root: true,
        },
        {
          arg: 'fdaCategories',
          type: 'array',
          root: true,
        },
        {
          arg: 'sideEffects',
          type: 'array',
          root: true,
        }
      ]
    }
  );

  Drug.drugsMeta = function(ctx, cb) {
    const CountryOfOrigins = app.models.CountryOfOrigin;
    const Manufacturer = app.models.Manufacturer;
    const Distributor = app.models.Distributor;
    const SellerClassification = app.models.SellerClassification;
    const FdaCategory = app.models.FdaCategory;
    const SideEffect = app.models.SideEffect;

    const getCountries = cb => CountryOfOrigins.find({}, (err, result) => cb(err, result));
    const manufacturers = cb => Manufacturer.find({}, (err, result) => cb(err, result));
    const distributors = cb => Distributor.find({}, (err, result) => cb(err, result));
    const sellerClassifications = cb => SellerClassification.find({}, (err, result) => cb(err, result));
    const fdaCategories = cb => FdaCategory.find({}, (err, result) => cb(err, result));
    const sideEffects = cb => SideEffect.find({}, (err, result) => cb(err, result));
   
    const resources = {
      countryOfOrigins: getCountries,
      manufacturers: manufacturers,
      distributors: distributors,
      sellerClassfications: sellerClassifications,
      fdaCategories: fdaCategories,
      sideEffects: sideEffects,
    };

    async.parallel(resources, function (err, result) {
      if(err) return next(err);
      cb(null, result);
    });
  };

  Drug.saveDrugs = function(ctx, cb) {
    delete ctx['sellerUser'];
    Drug.create(ctx, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }
};
