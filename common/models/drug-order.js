'use strict';

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
