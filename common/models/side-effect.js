'use strict';

module.exports = function(Sideeffect) {
  // Sideeffect.disableRemoteMethodByName('destroyById', true);
  // Sideeffect.disableRemoteMethodByName('replaceOrCreate', true);
  // Sideeffect.disableRemoteMethodByName('patchOrCreate', true);
  // Sideeffect.disableRemoteMethodByName('findById', true);
  Sideeffect.disableRemoteMethodByName('exists', true);
  Sideeffect.disableRemoteMethodByName('findOne', true);
  Sideeffect.disableRemoteMethodByName('count', true)
  Sideeffect.disableRemoteMethodByName('replaceById', true)
  Sideeffect.disableRemoteMethodByName('createChangeStream', true)
  Sideeffect.disableRemoteMethodByName("updateAll", true);
  Sideeffect.disableRemoteMethodByName("replaceOrCreate", false);
  Sideeffect.disableRemoteMethodByName('replaceById', true);
  Sideeffect.disableRemoteMethodByName('upsertWithWhere', true);
  Sideeffect.disableRemoteMethodByName("prototype.patchAttributes", false);
};
