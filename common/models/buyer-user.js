'use strict';

module.exports = function(Buyeruser) {
  Buyeruser.disableRemoteMethodByName('replaceOrCreate', true);
  Buyeruser.disableRemoteMethodByName('patchOrCreate', true);
  Buyeruser.disableRemoteMethodByName('exists', true);
  // Buyeruser.disableRemoteMethodByName('findById', true);
  Buyeruser.disableRemoteMethodByName('findOne', true);
  Buyeruser.disableRemoteMethodByName('destroyById', true);
  Buyeruser.disableRemoteMethodByName('count', true)
  Buyeruser.disableRemoteMethodByName('replaceById', true)
  Buyeruser.disableRemoteMethodByName('createChangeStream', true)
  Buyeruser.disableRemoteMethodByName("updateAll", true);
  Buyeruser.disableRemoteMethodByName("replaceOrCreate", false);
  Buyeruser.disableRemoteMethodByName('replaceById', true);
  Buyeruser.disableRemoteMethodByName('upsertWithWhere', true);
  Buyeruser.disableRemoteMethodByName("prototype.patchAttributes", false);
};
