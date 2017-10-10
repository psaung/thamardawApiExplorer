'use strict';

module.exports = function(Sellercompany) {
  Sellercompany.disableRemoteMethodByName('replaceOrCreate', true);
  Sellercompany.disableRemoteMethodByName('patchOrCreate', true);
  Sellercompany.disableRemoteMethodByName('exists', true);
  // Sellercompany.disableRemoteMethodByName('findById', true);
  Sellercompany.disableRemoteMethodByName('findOne', true);
  Sellercompany.disableRemoteMethodByName('destroyById', true);
  Sellercompany.disableRemoteMethodByName('count', true)
  Sellercompany.disableRemoteMethodByName('replaceById', true)
  Sellercompany.disableRemoteMethodByName('createChangeStream', true)
  Sellercompany.disableRemoteMethodByName("updateAll", true);
  Sellercompany.disableRemoteMethodByName("replaceOrCreate", false);
  Sellercompany.disableRemoteMethodByName('replaceById', true);
  Sellercompany.disableRemoteMethodByName('upsertWithWhere', true);
  Sellercompany.disableRemoteMethodByName("prototype.patchAttributes", false);
};
