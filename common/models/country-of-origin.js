'use strict';

module.exports = function(Countryoforigin) {
  Countryoforigin.disableRemoteMethodByName('replaceOrCreate', true);
  Countryoforigin.disableRemoteMethodByName('patchOrCreate', true);
  Countryoforigin.disableRemoteMethodByName('exists', true);
  // Countryoforigin.disableRemoteMethodByName('findById', true);
  Countryoforigin.disableRemoteMethodByName('findOne', true);
  Countryoforigin.disableRemoteMethodByName('destroyById', true);
  Countryoforigin.disableRemoteMethodByName('count', true)
  Countryoforigin.disableRemoteMethodByName('replaceById', true)
  Countryoforigin.disableRemoteMethodByName('createChangeStream', true)
  Countryoforigin.disableRemoteMethodByName("updateAll", true);
  Countryoforigin.disableRemoteMethodByName("replaceOrCreate", false);
  Countryoforigin.disableRemoteMethodByName('replaceById', true);
  Countryoforigin.disableRemoteMethodByName('upsertWithWhere', true);
  Countryoforigin.disableRemoteMethodByName("prototype.patchAttributes", false);
};
