'use strict';

module.exports = function(Drug) {


  // Drug.disableRemoteMethodByName('replaceOrCreate', true);
  // Drug.disableRemoteMethodByName('patchOrCreate', true);
  // Drug.disableRemoteMethodByName('findById', true);
  // Drug.disableRemoteMethodByName('destroyById', true);
  Drug.disableRemoteMethodByName('exists', true);
  Drug.disableRemoteMethodByName('findOne', true);
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
        returns : { arg: "Drugs", type: 'array' }
      }
  );
  Drug.getDrugs = function(ctx, cb) {
    Drug.find({}, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }


  Drug.remoteMethod (
      'saveDrugs',
      {
        http    : { path: '/saveDrugs', verb: 'post'},
        accepts : { arg: 'data', type: 'object', http: { source: 'body' }},
        returns : { arg: 'data', type: 'object', http: { source: 'body' }}
      }
  );
  Drug.saveDrugs = function(ctx, cb) {
    delete ctx['sellerUser'];
    Drug.create(ctx, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }



};
