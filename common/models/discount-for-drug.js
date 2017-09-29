'use strict';

module.exports = function(Discountfordrug) {
  Discountfordrug.disableRemoteMethodByName('replaceOrCreate', true);
  Discountfordrug.disableRemoteMethodByName('patchOrCreate', true);
  Discountfordrug.disableRemoteMethodByName('exists', true);
  // Discountfordrug.disableRemoteMethodByName('findById', true);
  Discountfordrug.disableRemoteMethodByName('findOne', true);
  Discountfordrug.disableRemoteMethodByName('destroyById', true);
  Discountfordrug.disableRemoteMethodByName('count', true)
  Discountfordrug.disableRemoteMethodByName('replaceById', true)
  Discountfordrug.disableRemoteMethodByName('createChangeStream', true)
  Discountfordrug.disableRemoteMethodByName("updateAll", true);
  Discountfordrug.disableRemoteMethodByName("replaceOrCreate", false);
  Discountfordrug.disableRemoteMethodByName('replaceById', true);
  Discountfordrug.disableRemoteMethodByName('upsertWithWhere', true);
  Discountfordrug.disableRemoteMethodByName("prototype.patchAttributes", false);
};
