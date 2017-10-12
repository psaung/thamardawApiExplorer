'use strict';

module.exports = function(Sellerclassification) {
  Sellerclassification.disableRemoteMethodByName('exists', true);
  // Sellerclassification.disableRemoteMethodByName('replaceOrCreate', true);
  // Sellerclassification.disableRemoteMethodByName('patchOrCreate', true);
  // Sellerclassification.disableRemoteMethodByName('findById', true);
  // Sellerclassification.disableRemoteMethodByName('destroyById', true);
  Sellerclassification.disableRemoteMethodByName('findOne', true);
  Sellerclassification.disableRemoteMethodByName('count', true)
  Sellerclassification.disableRemoteMethodByName('replaceById', true)
  Sellerclassification.disableRemoteMethodByName('createChangeStream', true)
  Sellerclassification.disableRemoteMethodByName("updateAll", true);
  Sellerclassification.disableRemoteMethodByName("replaceOrCreate", false);
  Sellerclassification.disableRemoteMethodByName('replaceById', true);
  Sellerclassification.disableRemoteMethodByName('upsertWithWhere', true);
  Sellerclassification.disableRemoteMethodByName("prototype.patchAttributes", false);
};
