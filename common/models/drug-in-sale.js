'use strict';

var LoopBackContext   = require('loopback-context');

module.exports = function(Druginsale) {

  Druginsale.disableRemoteMethodByName('replaceOrCreate', true);
  Druginsale.disableRemoteMethodByName('patchOrCreate', true);
  Druginsale.disableRemoteMethodByName('exists', true);
  Druginsale.disableRemoteMethodByName('findById', true);
  Druginsale.disableRemoteMethodByName('findOne', true);
  Druginsale.disableRemoteMethodByName('destroyById', true);
  Druginsale.disableRemoteMethodByName('count', true)
  Druginsale.disableRemoteMethodByName('replaceById', true)
  Druginsale.disableRemoteMethodByName('createChangeStream', true)
  // Druginsale.disableRemoteMethodByName("updateAll", true);
  Druginsale.disableRemoteMethodByName("replaceOrCreate", false);
  Druginsale.disableRemoteMethodByName('replaceById', true);
  Druginsale.disableRemoteMethodByName('upsertWithWhere', true);
  Druginsale.disableRemoteMethodByName("prototype.patchAttributes", false);

  // Druginsale.remoteMethod (
  //     'saveMyDrugInSale',
  //     {
  //       http    : { path: '/saveMyDrugInSale', verb: 'post'},
  //       accepts : { arg: "query", type: 'string' },
  //       returns : { arg: "DrugsInSale", type: 'array' }
  //     }
  // );
  //
  // Druginsale.saveMyDrugInSale = function(ctx, cb) {
  //   Druginsale.find({
  //     fields: { drug : false }
  //   }, function (err, instance) {
  //       var response = instance;
  //       cb(null, response);
  //   });
  // }


  Druginsale.remoteMethod (
      'getDrugsInSale',
      {
        http    : { path: '/getDrugsInSale', verb: 'post'},
        accepts : { arg: "query", type: 'string' },
        returns : { arg: "DrugsInSale", type: 'array' }
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
        accepts : { arg: "currentUser", type: 'object' },
        returns : { arg: "DrugsInSale", type: 'array' }
      }
  );

  Druginsale.getMyDrugsInSale = function(ctx, cb) {
    Druginsale.find({
      where: { 'sellerUser.sellerUserId': ctx.id }
    }, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }

};
