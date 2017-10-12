'use strict';

module.exports = function(Manufacturer) {

  Manufacturer.disableRemoteMethodByName('exists', true);
  // Manufacturer.disableRemoteMethodByName('replaceOrCreate', true);
  // Manufacturer.disableRemoteMethodByName('patchOrCreate', true);
  // Manufacturer.disableRemoteMethodByName('findById', true);
  // Manufacturer.disableRemoteMethodByName('destroyById', true);
  Manufacturer.disableRemoteMethodByName('findOne', true);
  Manufacturer.disableRemoteMethodByName('count', true)
  Manufacturer.disableRemoteMethodByName('replaceById', true)
  Manufacturer.disableRemoteMethodByName('createChangeStream', true)
  Manufacturer.disableRemoteMethodByName("updateAll", true);
  Manufacturer.disableRemoteMethodByName("replaceOrCreate", false);
  Manufacturer.disableRemoteMethodByName('replaceById', true);
  Manufacturer.disableRemoteMethodByName('upsertWithWhere', true);
  Manufacturer.disableRemoteMethodByName("prototype.patchAttributes", false);

};
