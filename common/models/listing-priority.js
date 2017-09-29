'use strict';

module.exports = function(Listingpriority) {

  Listingpriority.disableRemoteMethodByName('replaceOrCreate', true);
  Listingpriority.disableRemoteMethodByName('patchOrCreate', true);
  Listingpriority.disableRemoteMethodByName('exists', true);
  // Listingpriority.disableRemoteMethodByName('findById', true);
  Listingpriority.disableRemoteMethodByName('findOne', true);
  Listingpriority.disableRemoteMethodByName('destroyById', true);
  Listingpriority.disableRemoteMethodByName('count', true)
  Listingpriority.disableRemoteMethodByName('replaceById', true)
  Listingpriority.disableRemoteMethodByName('createChangeStream', true)
  Listingpriority.disableRemoteMethodByName("updateAll", true);
  Listingpriority.disableRemoteMethodByName("replaceOrCreate", false);
  Listingpriority.disableRemoteMethodByName('replaceById', true);
  Listingpriority.disableRemoteMethodByName('upsertWithWhere', true);
  Listingpriority.disableRemoteMethodByName("prototype.patchAttributes", false);

};
