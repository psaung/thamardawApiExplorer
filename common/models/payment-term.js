'use strict';

module.exports = function(Paymentterm) {
  Paymentterm.disableRemoteMethodByName('replaceOrCreate', true);
  Paymentterm.disableRemoteMethodByName('patchOrCreate', true);
  Paymentterm.disableRemoteMethodByName('exists', true);
  // Paymentterm.disableRemoteMethodByName('findById', true);
  Paymentterm.disableRemoteMethodByName('findOne', true);
  Paymentterm.disableRemoteMethodByName('destroyById', true);
  Paymentterm.disableRemoteMethodByName('count', true)
  Paymentterm.disableRemoteMethodByName('replaceById', true)
  Paymentterm.disableRemoteMethodByName('createChangeStream', true)
  Paymentterm.disableRemoteMethodByName("updateAll", true);
  Paymentterm.disableRemoteMethodByName("replaceOrCreate", false);
  Paymentterm.disableRemoteMethodByName('replaceById', true);
  Paymentterm.disableRemoteMethodByName('upsertWithWhere', true);
  Paymentterm.disableRemoteMethodByName("prototype.patchAttributes", false);
};
