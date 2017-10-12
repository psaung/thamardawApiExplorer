'use strict';

module.exports = function(Address) {
  // Address.disableRemoteMethodByName('patchOrCreate', true);
  // Address.disableRemoteMethodByName('replaceOrCreate', true);
  // Address.disableRemoteMethodByName('findById', true);
  // Address.disableRemoteMethodByName('destroyById', true);
  Address.disableRemoteMethodByName('exists', true);
  Address.disableRemoteMethodByName('findOne', true);
  Address.disableRemoteMethodByName('count', true)
  Address.disableRemoteMethodByName('replaceById', true)
  Address.disableRemoteMethodByName('createChangeStream', true)
  Address.disableRemoteMethodByName("updateAll", true);
  Address.disableRemoteMethodByName("replaceOrCreate", false);
  Address.disableRemoteMethodByName('replaceById', true);
  Address.disableRemoteMethodByName('upsertWithWhere', true);
  Address.disableRemoteMethodByName("prototype.patchAttributes", false);
};
