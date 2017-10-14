'use strict';

var LoopBackContext   = require('loopback-context');

module.exports = function(Druginsale) {

  // Druginsale.disableRemoteMethodByName('replaceOrCreate', true);
  // Druginsale.disableRemoteMethodByName('findById', true);
  // Druginsale.disableRemoteMethodByName('destroyById', true);
  // Druginsale.disableRemoteMethodByName("updateAll", true);
  // Druginsale.disableRemoteMethodByName('patchOrCreate', true);
  Druginsale.disableRemoteMethodByName('exists', true);
  Druginsale.disableRemoteMethodByName('findOne', true);
  Druginsale.disableRemoteMethodByName('count', true)
  Druginsale.disableRemoteMethodByName('replaceById', true)
  Druginsale.disableRemoteMethodByName('createChangeStream', true)
  Druginsale.disableRemoteMethodByName("replaceOrCreate", false);
  Druginsale.disableRemoteMethodByName('replaceById', true);
  Druginsale.disableRemoteMethodByName('upsertWithWhere', true);
  Druginsale.disableRemoteMethodByName("prototype.patchAttributes", false);

  Druginsale.remoteMethod (
      'saveMyDrugInSale',
      {
        http    : { path: '/saveMyDrugInSale', verb: 'post'},
        accepts : { arg: 'data', type: 'object', http: { source: 'body' }},
        returns : { arg: 'data', type: 'object', http: { source: 'body' }}
      }
  );

  Druginsale.saveMyDrugInSale = function(ctx, cb) {
    var ctxDrugInSale = ctx;
    ctxDrugInSale.sellerCompanyId  = ctx.currentUser.sellerCompanyId;
    ctxDrugInSale.sellerUser       = ctx.currentUser;
    ctxDrugInSale.currentUser      = undefined;

    Druginsale.create(ctxDrugInSale, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }


  Druginsale.remoteMethod (
      'getDrugsInSale',
      {
        http    : { path: '/getDrugsInSale', verb: 'post'},
        accepts : { arg: 'data', type: 'object', http: { source: 'body' }},
        returns : { arg: 'DrugsInSale', type: 'object', http: { source: 'body' }}
      }
  );

  Druginsale.getDrugsInSale = function(ctx, cb) {
    Druginsale.find({
      fields: { drug : false }
    }, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }

  //------------------------------------------------------------------------ SELLER -----------------------------------------------------------------

  Druginsale.remoteMethod (
      'getMyDrugsInSale',
      {
        http    : { path: '/getMyDrugsInSale', verb: 'post'},
        accepts : { arg: 'data', type: 'object', http: { source: 'body' }},
        returns : { arg: 'MyDrugsInSale', type: 'object', http: { source: 'body' }}
      }
  );

  Druginsale.getMyDrugsInSale = function(ctx, cb) {
    Druginsale.find({
      where: { 'sellerUser.sellerCompanyId': ctx.currentUser.sellerCompanyId }
    }, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }

};
