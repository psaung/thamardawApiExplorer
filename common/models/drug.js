'use strict';

module.exports = function(Drug) {


  Drug.disableRemoteMethodByName('replaceOrCreate', true);
  Drug.disableRemoteMethodByName('patchOrCreate', true);
  Drug.disableRemoteMethodByName('exists', true);
  // Drug.disableRemoteMethodByName('findById', true);
  Drug.disableRemoteMethodByName('findOne', true);
  Drug.disableRemoteMethodByName('destroyById', true);
  Drug.disableRemoteMethodByName('count', true)
  Drug.disableRemoteMethodByName('replaceById', true)
  Drug.disableRemoteMethodByName('createChangeStream', true)
  Drug.disableRemoteMethodByName("updateAll", true);
  Drug.disableRemoteMethodByName("replaceOrCreate", false);
  Drug.disableRemoteMethodByName('replaceById', true);
  Drug.disableRemoteMethodByName('upsertWithWhere', true);
  Drug.disableRemoteMethodByName("prototype.patchAttributes", false);


  Drug.remoteMethod (
      'getDrugs',
      {
        http    : { path: '/getDrugs', verb: 'post'},
        accepts : { arg: 'query', type: 'string' },
        returns : { arg: "Drugs", trpe: 'array' }
      }
  );

  Drug.getDrugs = function(query, cb) {
    Drug.find({}, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }



};
