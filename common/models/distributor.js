'use strict';

module.exports = function(Distributor) {
  Distributor.disableRemoteMethodByName('replaceOrCreate', true);
  Distributor.disableRemoteMethodByName('patchOrCreate', true);
  Distributor.disableRemoteMethodByName('exists', true);
  // Distributor.disableRemoteMethodByName('findById', true);
  Distributor.disableRemoteMethodByName('findOne', true);
  Distributor.disableRemoteMethodByName('destroyById', true);
  Distributor.disableRemoteMethodByName('count', true)
  Distributor.disableRemoteMethodByName('replaceById', true)
  Distributor.disableRemoteMethodByName('createChangeStream', true)
  Distributor.disableRemoteMethodByName("updateAll", true);
  Distributor.disableRemoteMethodByName("replaceOrCreate", false);
  Distributor.disableRemoteMethodByName('replaceById', true);
  Distributor.disableRemoteMethodByName('upsertWithWhere', true);
  Distributor.disableRemoteMethodByName("prototype.patchAttributes", false);
};
