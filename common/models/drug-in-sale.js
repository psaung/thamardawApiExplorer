'use strict';

var LoopBackContext = require('loopback-context');

module.exports = function(Druginsale) {

  Druginsale.disableRemoteMethodByName('replaceOrCreate', true);
  Druginsale.disableRemoteMethodByName('patchOrCreate', true);
  Druginsale.disableRemoteMethodByName('exists', true);
  Druginsale.disableRemoteMethodByName('findById', true);
  Druginsale.disableRemoteMethodByName('findOne', true);
  Druginsale.disableRemoteMethodByName('destroyById', true);
  Druginsale.disableRemoteMethodByName('count', true)
  Druginsale.disableRemoteMethodByName('replaceById', true)
  Druginsale.disableRemoteMethodByName('createChangeStream', true)
  Druginsale.disableRemoteMethodByName("updateAll", true);
  Druginsale.disableRemoteMethodByName("replaceOrCreate", false);
  Druginsale.disableRemoteMethodByName('replaceById', true);
  Druginsale.disableRemoteMethodByName('upsertWithWhere', true);
  Druginsale.disableRemoteMethodByName("prototype.patchAttributes", false);	

  // create()	POST	/locations
  // replaceOrCreate()	PUT	/locations
  // patchOrCreate()	PATCH	/locations
  // exists()	GET	/locations/:id/exists
  // findById()	GET	/locations/:id
  // find()	GET	/locations
  // findOne()	GET	/locations/findOne
  // destroyById() or deleteById()	DELETE	/locations/:id
  // count()	GET	/locations/count
  // replaceById()	PUT	/locations/:id
  // prototype.patchAttributes()	PATCH	/locations/:id
  // createChangeStream()	POST	/locations/change-stream
  // updateAll()	POST	/locations/update
  // replaceOrCreate()	POST	/locations/replaceOrCreate
  // replaceById()

  Druginsale.remoteMethod (
      'getDrugsInSale',
      {
        http    : { path: '/getDrugsInSale', verb: 'post'},
        accepts : { arg: 'id', type: 'string' },
        returns : { arg: "DrugsInSale", trpe: 'array' }
      }
  );

  Druginsale.getDrugsInSale = function(id, cb) {
    Druginsale.find({}, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }

  //------------------------------------------------------------------------ SELLER -----------------------------------------------------------------

  Druginsale.remoteMethod (
      'getMyDrugsInSale',
      {
        http    : { path: '/getMyDrugsInSale', verb: 'post'},
        accepts : { arg: 'id', type: 'string' },
        returns : { arg: "DrugsInSale", trpe: 'array' }
      }
  );

  Druginsale.getMyDrugsInSale = function(id, cb) {
    var ctx = LoopBackContext.getCurrentContext();
    var currentUser = ctx && ctx.get('currentUser');
    var accessToken = ctx && ctx.get('accessToken');

    console.log(currentUser, id, accessToken)
    // Druginsale.find({
    //   sellerUser : { sellerUserId : sellerId }
    // }, function (err, instance) {
    //     var response = instance;
    //     cb(null, response);
    // });
  }

};
