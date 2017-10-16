'use strict';
var app = require('../../server/server');
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

  Druginsale.beforeRemote('**', function(ctx, next) {
    if (!ctx.req.accessToken) return next();
    const User = app.models.User;
    User.findById(ctx.req.accessToken.userId, function(err, user) {
      if (err) return next(err);
      if (user) {
        if(user.isTmdEmployee || user.isSeller) {
          const SellerUser = app.models.SellerUser;
          SellerUser.findOne({tmdUserId: user.id }, function(err, sellerUser){
            ctx.req.body.sellerUser = sellerUser;
            // next();
          });
        } else if(user.isBuyer) {
          const BuyerUser = app.models.BuyerUser;
          BuyerUser.findOne({tmdUserId: user.id }, function(err, buyerUser){
            ctx.req.body.buyerUser = buyerUser;
            // next();
          });
        }
        else {
          ctx.req.body.currentUser = user;
          // next();
        }
      }
    });
  });


  Druginsale.afterRemote('**', function (ctx, next) {
    next();
  });


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
    // delete ctxDrugInSale.drug['sellerUser'];
    ctxDrugInSale.sellerCompanyId = ctx.sellerUser.sellerCompanyId;
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
        returns : { arg: 'MyDrugInSale', type: 'object', http: { source: 'body' }}
      }
  );

  Druginsale.getMyDrugsInSale = function(ctx, cb) {
    console.log(ctx)
    Druginsale.find({ 'sellerCompanyId': ctx.sellerUser.sellerCompanyId
    }, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }

};
