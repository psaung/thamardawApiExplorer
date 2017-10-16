'use strict';
var app = require('../../server/server');
module.exports = function(Drug) {


  // Drug.disableRemoteMethodByName('replaceOrCreate', true);
  // Drug.disableRemoteMethodByName('patchOrCreate', true);
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

  // Drug.beforeRemote('**', function(ctx, next) {
  //   if (!ctx.req.accessToken) return next();
  //   const User = app.models.User;
  //   User.findById(ctx.req.accessToken.userId, function(err, user) {
  //     if (err) return next(err);
  //     if (user) {
  //       if(user.isTmdEmployee || user.isSeller) {
  //         const SellerUser = app.models.SellerUser;
  //         SellerUser.findOne({tmdUserId: user.id }, function(err, sellerUser){
  //           ctx.req.body.sellerUser = sellerUser;
  //           // next();
  //         });
  //       } else if(user.isBuyer) {
  //         const BuyerUser = app.models.BuyerUser;
  //         BuyerUser.findOne({tmdUserId: user.id }, function(err, buyerUser){
  //           ctx.req.body.buyerUser = buyerUser;
  //           // next();
  //         });
  //       } else {
  //         ctx.req.body.currentUser = user;
  //         // next();
  //       }
  //     }
  //   });
  // });
  //
  //
  // Drug.afterRemote('**', function (ctx, next) {
  //   next();
  // });


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
  Drug.saveDrugs = function(ctx, cb) {
    Drug.create(ctx, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }



};
