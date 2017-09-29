'use strict';

module.exports = function(Fdacategory) {

  Fdacategory.disableRemoteMethodByName('replaceOrCreate', true);
  Fdacategory.disableRemoteMethodByName('patchOrCreate', true);
  Fdacategory.disableRemoteMethodByName('exists', true);
  // Fdacategory.disableRemoteMethodByName('findById', true);
  Fdacategory.disableRemoteMethodByName('findOne', true);
  Fdacategory.disableRemoteMethodByName('destroyById', true);
  Fdacategory.disableRemoteMethodByName('count', true)
  Fdacategory.disableRemoteMethodByName('replaceById', true)
  Fdacategory.disableRemoteMethodByName('createChangeStream', true)
  Fdacategory.disableRemoteMethodByName("updateAll", true);
  Fdacategory.disableRemoteMethodByName("replaceOrCreate", false);
  Fdacategory.disableRemoteMethodByName('replaceById', true);
  Fdacategory.disableRemoteMethodByName('upsertWithWhere', true);
  Fdacategory.disableRemoteMethodByName("prototype.patchAttributes", false);

};
