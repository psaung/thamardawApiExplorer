'use strict';

module.exports = function(Selleruser) {
  // Selleruser.disableRemoteMethodByName('replaceOrCreate', true);
  // Selleruser.disableRemoteMethodByName('patchOrCreate', true);
  // Selleruser.disableRemoteMethodByName('findById', true);
  // Selleruser.disableRemoteMethodByName('destroyById', true);
  Selleruser.disableRemoteMethodByName('exists', true);
  Selleruser.disableRemoteMethodByName('findOne', true);
  Selleruser.disableRemoteMethodByName('count', true)
  Selleruser.disableRemoteMethodByName('replaceById', true)
  Selleruser.disableRemoteMethodByName('createChangeStream', true)
  Selleruser.disableRemoteMethodByName("updateAll", true);
  Selleruser.disableRemoteMethodByName("replaceOrCreate", false);
  Selleruser.disableRemoteMethodByName('replaceById', true);
  Selleruser.disableRemoteMethodByName('upsertWithWhere', true);
  Selleruser.disableRemoteMethodByName("prototype.patchAttributes", false);
};
