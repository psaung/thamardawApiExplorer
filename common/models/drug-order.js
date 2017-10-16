'use strict';
var app = require('../../server/server');
module.exports = function(Drugorder) {


  // Drugorder.disableRemoteMethodByName('replaceOrCreate', true);
  // Drugorder.disableRemoteMethodByName('patchOrCreate', true);
  // Drugorder.disableRemoteMethodByName('findById', true);
  // Drugorder.disableRemoteMethodByName("updateAll", true);
  Drugorder.disableRemoteMethodByName('exists', true);
  Drugorder.disableRemoteMethodByName('findOne', true);
  Drugorder.disableRemoteMethodByName('destroyById', true);
  Drugorder.disableRemoteMethodByName('count', true)
  Drugorder.disableRemoteMethodByName('replaceById', true)
  Drugorder.disableRemoteMethodByName('createChangeStream', true)
  Drugorder.disableRemoteMethodByName("replaceOrCreate", false);
  Drugorder.disableRemoteMethodByName('replaceById', true);
  Drugorder.disableRemoteMethodByName('upsertWithWhere', true);
  Drugorder.disableRemoteMethodByName("prototype.patchAttributes", false);

  Drugorder.beforeRemote('**', function(ctx, next) {
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


  Drugorder.afterRemote('**', function (ctx, next) {
    next();
  });

  //------------------------------------------------------------------------ SELLER -----------------------------------------------------------------

  Drugorder.remoteMethod (
    'getMyOrders',
    {
      http  : { path: '/getMyOrders', verb: 'post'},
      accepts : { arg: 'data',      type: 'object', http: { source: 'body' }},
      returns : { arg: 'MyOrders',  type: 'object', http: { source: 'body' }}
    }
  );

  Drugorder.getMyOrders = function(ctx, cb) {
    Drugorder.find({
      where: { 'buyerUser.buyerUserId': ctx.currentUser }
    }, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }

};
