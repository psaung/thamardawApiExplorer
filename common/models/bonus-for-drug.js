'use strict';

module.exports = function(Bonusfordrug) {
  Bonusfordrug.disableRemoteMethodByName('replaceOrCreate', true);
  Bonusfordrug.disableRemoteMethodByName('patchOrCreate', true);
  Bonusfordrug.disableRemoteMethodByName('exists', true);
  // Bonusfordrug.disableRemoteMethodByName('findById', true);
  Bonusfordrug.disableRemoteMethodByName('findOne', true);
  Bonusfordrug.disableRemoteMethodByName('destroyById', true);
  Bonusfordrug.disableRemoteMethodByName('count', true)
  Bonusfordrug.disableRemoteMethodByName('replaceById', true)
  Bonusfordrug.disableRemoteMethodByName('createChangeStream', true)
  Bonusfordrug.disableRemoteMethodByName("updateAll", true);
  Bonusfordrug.disableRemoteMethodByName("replaceOrCreate", false);
  Bonusfordrug.disableRemoteMethodByName('replaceById', true);
  Bonusfordrug.disableRemoteMethodByName('upsertWithWhere', true);
  Bonusfordrug.disableRemoteMethodByName("prototype.patchAttributes", false);
};
