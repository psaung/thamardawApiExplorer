'use strict';
var app = require('../../server/server');
const async = require('async');

/*
 * Check the post request params validations of SaveDrugAndSale data.
 */
const resourceParams = {
  brandName: { 
    type: String,
    required: true,
  },
  genericName: { 
    type: String,
    required: true,
  },
  atcCode:{
    type: String,
    required: true,
  },
  fdaDrcNo: {
    type: String,
    required: true,
  },
  form: {
    type: String,
    required: true,
  },
  strength: {
    type: String,
    required: true,
  },
  uses: {
    type: String,
    required: true,
  },
  cautionPrecaution: {
    type: String,
    required: true,
  },
  contraindication: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  netWeightInGram: {
    type: Number,
    required: true,
  },
  countryOfOrigin: {
    type: Object,
    required: true,
  },
  manufacturer: {
    type: Object,
    required: true,
  },
  distributor: {
    type: Object,
    required: true,
  },
  sellerClassification: {
    type: Object,
    required: true,
  },
  fdaCategories: {
    type: Array,
    required: true,
  },
  sideEffects: {
    type: Array,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  packaging: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  listingPriority: {
    type: Object,
    required: true,
  },
  paymentTerm: {
    type: Object,
    required: true,
  },
  discountForDrug: {
    type: Object,
    required: true,
  },
  bonusForDrug: {
    type: Object,
    required: true,
  }
};

function checkResourceParams(params) {
  for(var key in resourceParams) {
    if(resourceParams[key].required && params[key] === undefined) {
      return {
        success: false,
        error: {
          statusCode: 400,
          code: key.toUpperCase() + '_REQUIRED',
        }
      }
    }
    if(resourceParams[key].type !== params[key].constructor) {
      return {
        success: false,
        error: {
          statusCode: 400,
          code: key.toUpperCase() + '_TYPE_ISINVALID',
        }
      }
    }
  }
  return { success: true, params};
}

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

  // Drug.beforeRemote('**', function(ctx, next) {
  //   if (!ctx.req.accessToken) return next();
  //   const User = app.models.User;
  //   User.findById(ctx.req.accessToken.userId, function(err, user) {
  //     if (err) return next(err);
  //     if (user) {
  //       if(user.isTmdEmployee || user.isSeller) {
  //         const SellerUser = app.models.SellerUser;
  //         SellerUser.findOne({tmdUserId: user.id }, function(err, sellerUser){
  //           ctx.req.body.sellerUser = sellerUser;
  //           // next();
  //         });
  //       } else if(user.isBuyer) {
  //         const BuyerUser = app.models.BuyerUser;
  //         BuyerUser.findOne({tmdUserId: user.id }, function(err, buyerUser){
  //           ctx.req.body.buyerUser = buyerUser;
  //           // next();
  //         });
  //       } else {
  //         ctx.req.body.currentUser = user;
  //         // next();
  //       }
  //     }
  //   });
  // });
  //
  //
  // Drug.afterRemote('**', function (ctx, next) {
  //   next();
  // });


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
    Drug.create(ctx, function (err, instance) {
        var response = instance;
        cb(null, response);
    });
  }


  /*
   * --------------------------------------------------------------------------
   * Drug and DrugInSale post request remote method
   * --------------------------------------------------------------------------
   *
   * This remote method is dedicated to handle drug and drugInsale data creation
   * in a single end point. 
   *
   * Note: You hav to pass both of the required form params for drug and
   * drugInSale's model in the body. Drug data saving is processing before 
   * DrugInsSale because drug_id is needed in DrugInSale table. 
   */
  Drug.remoteMethod(
    'saveDrugAndSales',
    {
      //accepts: checkAccepts,
      accepts: [ 
      {
        arg: 'data', type: 'object', required: true, http: { source: 'body' } },
      {
        arg: 'accessToken', type: 'any', http: ctx => ctx.req.accessToken 
      }
      ],
      returns: [
        {
          arg: 'drug',
          type: 'object',
          root: true,
        },
        {
          arg: 'drugInSale',
          type: 'object',
          root: true,
        },
      ],
      http: { path: '/SaveDrugAndSales', verb: 'post'},
    }
  );

  Drug.saveDrugAndSales = function(ctx, user, cb) {
    const DrugInSale = app.models.DrugInSale; 
    const User = app.models.User;
    const result = checkResourceParams(ctx);

    // If type mismatching or required parameter is not set, show the error message
    if(!result.success) {
      cb(result.error, {})
    }

    // Drug data saving
    const drugParam = {
      brandName: ctx.brandName,
      genericName: ctx.genericName,
      atcCode: ctx.atcCode,
      fdaDrcNo: ctx.fdaDrcNo,
      form: ctx.form,
      strength: ctx.strength,
      uses: ctx.uses,
      cautionPrecaution: ctx.cautionPrecaution,
      contraindication: ctx.contraindication,
      imageUrl: ctx.imageUrl,
      description: ctx.description,
      netWeigthInGram: ctx.netWeightInGram,
      countryOfOrigin: ctx.countryOfOrgin,
      manufacturer: ctx.manufacturer,
      distributor: ctx.distributor,
      sellerClassification: ctx.sellerClassification,
      fdaCategories: ctx.fdaCategories,
      sideEffects: ctx.sideEffects,
    };

    let drugInSale = {
      basePrice: ctx.basePrice,
      packaging: ctx.string,
      listingPriority: ctx.listingPriority,
      paymentTerm: ctx.paymentTerm,
      discountForDrug: ctx.discountForDrug,
      bonusForDrug: ctx.bonusForDrug,
      sellerUser: user,
    };
    
    const createDrugs = callback => Drug.create(drugParam, callback);
    const createDrugInSales = (drug, callback) => {
      drugInSale.drug = drug;
      return DrugInSale.create(drugInSale, callback);
    }
    async.waterfall([
        createDrugs,
        createDrugInSales,
    ], function(error, result) {
        if(error) cb(error, {});
        cb(null, {
          drug: result.drug,
          drugInSale: result
        });
    });

  //   User.findById(ctx.req.accessToken.userId, function(err, user) {
  //     if (err) return next(err);
  //     if (user) {
  //       if(user.isTmdEmployee || user.isSeller) {
  //         const SellerUser = app.models.SellerUser;
  //         SellerUser.findOne({tmdUserId: user.id }, function(err, sellerUser){
  //           ctx.req.body.sellerUser = sellerUser;
  //           // next();
  //         });
  //       } else if(user.isBuyer) {
  //         const BuyerUser = app.models.BuyerUser;
  //         BuyerUser.findOne({tmdUserId: user.id }, function(err, buyerUser){
  //           ctx.req.body.buyerUser = buyerUser;
  //           // next();
  //         });
  //       } else {
  //         ctx.req.body.currentUser = user;
  //         // next();
  //       }
  //     }

    // Drug data saving
    // DrugInSales data saving
    /*
    cb(null, { 
      drug: {},
      drugInSale: {},
    });  */

  }
};
