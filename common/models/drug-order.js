'use strict';

module.exports = function(Drugorder) {


  Drugorder.disableRemoteMethodByName('replaceOrCreate', true);
  Drugorder.disableRemoteMethodByName('patchOrCreate', true);
  Drugorder.disableRemoteMethodByName('exists', true);
  // Drugorder.disableRemoteMethodByName('findById', true);
  Drugorder.disableRemoteMethodByName('findOne', true);
  Drugorder.disableRemoteMethodByName('destroyById', true);
  Drugorder.disableRemoteMethodByName('count', true)
  Drugorder.disableRemoteMethodByName('replaceById', true)
  Drugorder.disableRemoteMethodByName('createChangeStream', true)
  Drugorder.disableRemoteMethodByName("updateAll", true);
  Drugorder.disableRemoteMethodByName("replaceOrCreate", false);
  Drugorder.disableRemoteMethodByName('replaceById', true);
  Drugorder.disableRemoteMethodByName('upsertWithWhere', true);
  Drugorder.disableRemoteMethodByName("prototype.patchAttributes", false);

  //------------------------------------------------------------------------ SELLER -----------------------------------------------------------------


  Drugorder.remoteMethod (
    'getMyOrders',
    {
      http  : { path: '/getMyOrders', verb: 'post'},
      accepts : { arg: 'id', type: 'string', http: { source: 'query' } },
      returns : { arg: 'responseData', type: 'string'}
    }
  );

  Drugorder.getMyOrders = function(id, cb) {

    Drugorder.find({}, function (err, instance) {
      var response = instance;
      cb(null, response);
    });
  }

};
