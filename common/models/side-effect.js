'use strict';

module.exports = function(Sideeffect) {
  Sideeffect.disableRemoteMethodByName('replaceOrCreate', true);
  Sideeffect.disableRemoteMethodByName('patchOrCreate', true);
  Sideeffect.disableRemoteMethodByName('exists', true);
  // Sideeffect.disableRemoteMethodByName('findById', true);
  Sideeffect.disableRemoteMethodByName('findOne', true);
  Sideeffect.disableRemoteMethodByName('destroyById', true);
  Sideeffect.disableRemoteMethodByName('count', true)
  Sideeffect.disableRemoteMethodByName('replaceById', true)
  Sideeffect.disableRemoteMethodByName('createChangeStream', true)
  Sideeffect.disableRemoteMethodByName("updateAll", true);
  Sideeffect.disableRemoteMethodByName("replaceOrCreate", false);
  Sideeffect.disableRemoteMethodByName('replaceById', true);
  Sideeffect.disableRemoteMethodByName('upsertWithWhere', true);
  Sideeffect.disableRemoteMethodByName("prototype.patchAttributes", false);
};
