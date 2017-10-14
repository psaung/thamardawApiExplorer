'use strict';

var loopback          = require('loopback');
var boot              = require('loopback-boot');

var app = module.exports = loopback();


app.start = function() {
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

app.remotes().phases.addBefore('invoke', '**').use(function(ctx, next) {
  if (!ctx.req.accessToken) return next();
  const User = app.models.User;
  User.findById(ctx.req.accessToken.userId, function(err, user) {
    if (err) return next(err);
    if (user) {
      if(user.isTmdEmployee || user.isSeller) {
        const SellerUser = app.models.SellerUser;
        SellerUser.findOne({tmdUserId: user.id }, function(err, sellerUser){
          ctx.req.body.sellerUser = sellerUser;
          next();
        });
      } else if(user.isBuyer) {
        const BuyerUser = app.models.BuyerUser;
        BuyerUser.findOne({tmdUserId: user.id }, function(err, buyerUser){
          ctx.req.body.buyerUser = buyerUser;
          next();
        });
      }
      else {
        ctx.req.body.currentUser = user;
        next();
      }
    }
  });
});


  app.remotes().after('**', function (ctx, next) {
    next();
  });



boot(app, __dirname, function(err) {
  if (err) throw err;

  if (require.main === module)
    app.start();
});
