
# Thamardaw API Explorer


Make Sure Mongo Server Is Running

1. npm install

2. npm start

3. localhost:3000



## NOTE



To Customize token and middleware please check,


context function    /server/server.js     line 21

ctx <<<< is the context of current USER calling this API




To DETERMINE WHO OWN THIS DRUG IN SALE in data entry panel

DATA INSERT API ARE ALL GENERATED, I HAVE NOT CODED THEM YET





BUT GET MY DRUG IN SALE and GET MY ORDERS is queried via ctx

SINCE WE DO NOT HAVE USER ID where (buyerUserId === 'SUDO DATA')

GET MY DRUG IN SALE AND GET MY ORDERS Do NOT WORK here





HERE ARE DIFFERENCES

```
    EXAMPLE - Drug In Sale From Sudo API

    "drugsInSale": [
      {
        "drugInSaleId": 123,
        "drugId": 1,
        "basePrice": 850,
        "packaging": "10x10's",
        "expireIn": "In 3 months",
        "isActive": true,
        "sellerUser": {
          "sellerUserId": 135
        },
        "listingPriority": {
          "listingPriorityId": 0,
          "value": 1,
          "description": "Package A"
        },
        "paymentTerms": {
          "paymentTermId": 0,
          "paymentTerm": "NET30",
          "description": "You can pay the order within 30 days after your order."
        },
        "discountForDrug": {
          "discountForDrugId": 123,
          "discountPercentage": 2,
          "minimumQuantity": 10,
          "otherTerms": "NA"
        },
        "bonusForDrug": {
          "bonusForDrugId": 123,
          "bonusDescription": "You can get plus one everytime you purchase 10 drugs.",
          "minimumQuantity": 10,
          "bonusQuantity": 1,
          "otherTerms": "NA"
        }
      }, { ... }
    ]
```

```
  EXAMPLE - Drug In Sale Loop Back API

  "drugsInSale": [
    {
      "id": "8sfns8qi18qdadvmMnvzxf",
      "drugId": 1,   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
      "basePrice": 850,
      "packaging": "10x10's",
      "expireIn": "In 3 months",
      "isActive": true,
      "sellerUser": {
        "sellerUserId": 135 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
      },
      "listingPriority": {
        "listingPriorityId": 0, <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
        "value": 1,
        "description": "Package A"
      },
      "paymentTerms": {
        "paymentTermId": 0,     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
        "paymentTerm": "NET30",
        "description": "You can pay the order within 30 days after your order."
      },
      "discountForDrug": {
        "discountForDrugId": 123, <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
        "discountPercentage": 2,
        "minimumQuantity": 10,
        "otherTerms": "NA"
      },
      "bonusForDrug": {
        "bonusForDrugId": 123,  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
        "bonusDescription": "You can get plus one everytime you purchase 10 drugs.",
        "minimumQuantity": 10,
        "bonusQuantity": 1,
        "otherTerms": "NA"
      }
    }, { ... }
  ]
```

```
  EXAMPLE - GET ORDERS FROM SUDO API

  "myOrders": [
      {
          "drugOrderId": 1,
          "orderDateTime": 1507629740,
          "orderTotalAmount": 5,
          "timeToBeProcessed": 1507687382,
          "timeToBeDelivered": 1507593600,
          "timeToBeCashCollected": 1507680000,
          "currentState": "new",
          "noteForOrder": "This is first order.",
          "packageSize": "5g",
          "buyerUser": {
              "buyerUserId": 136
          },
          "cashCollectingEntries": [
              {
                  "cashCollectingOrderId": 123,
                  "collectedCashAmount": 500,
                  "stillRemainingAmount": 500,
                  "operationUser": {
                      "operationUserId": 123
                  },
                  "collectedTimestamp": 1507687382
              },
              {
                  "cashCollectingOrderId": 124,
                  "collectedCashAmount": 300,
                  "stillRemainingAmount": 700,
                  "operationUser": {
                      "operationUserId": 124
                  },
                  "collectedTimestamp": 1507687382
              }
          ],
          "orderStateEntries": [
              {
                  "orderStateEntryId": 123,
                  "state": 1,
                  "stateTimestamp": 1507687382,
                  "actionUser": {
                      "tmdUserId": 123
                  }
              },
              {
                  "orderStateEntryId": 124,
                  "state": 2,
                  "stateTimestamp": 1507680000,
                  "actionUser": {
                      "tmdUserId": 123
                  }
              }
          ],
          "orderItems": [
              {
                  "drugOrderItemId": 123,
                  "drugInSale": {
                      "drugInSaleId": 123
                  },
                  "quantity": 10
              },
              {
                  "drugOrderItemId": 124,
                  "drugInSale": {
                      "drugInSaleId": 125
                  },
                  "quantity": 15
              }
          ]
        }, { .... }]
```

```
      EXAMPLE -  GET ORDERS FROM LOOB BACK API

      myOrders : [{
        "id": "59ce974326c7fa307adaf8a8" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DrugOrderId
        "drugOrderId": "1",  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FROM SUDO DATA
        "orderDateTime": "1970-01-18T10:47:09.740Z",
        "orderTotalAmount": 5,
        "timeToBeProcessed": 1507687382,
        "timeToBeDelivered": 1507593600,
        "timeToBeCashCollected": "1507680000",
        "currentState": "new",
        "noteForOrder": "My New Drug Order",
        "packageSize": "5g",
        "buyerUser": {
          "buyerUserId": 136  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
        },
        "orderItems": [
          {
            "drugOrderItemId": 123,  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            "drugInSale": {
              "drugInSaleId": 123  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            },
            "quantity": 10
          },
          {
            "drugOrderItemId": 124,  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            "drugInSale": {
              "drugInSaleId": 124  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            },
            "quantity": 15
          }
        ]
      }, { .... }]

      The Same Goes With Cash Collecting Entries
      Order State Entries
```

```
    EXAMPLE - GET DRUGS FROM SUDO API

    Drugs : [{
        "drugId": 15,
        "brandName": "Cetzy 10",
        "genericName": "Cetirizine",
        "atcCode": "",
        "fdaDrcNo": "1234567890",
        "form": "Tablet",
        "strength": "10mg",
        "uses": "Eosinophil infiltration",
        "cautionPrecaution": "Please consult your physician or pharmacist or product package for this information.",
        "contraindication": "Please consult your physician or pharmacist or product package for this information.",
        "imageUrl": "http://tmd-dev.thamardaw.com/TMD000058_4e4b9e42cf0a4fd64572729e15fd79275a4a74fb.jpg.jpg",
        "description": "Eosinophil infiltration",
        "netWeightInGram": 10,
        "countryOfOrigin": {
            "countryOfOriginId": 101,
            "countryOfOrigin": "India",
            "tmdNote": ""
        },
        "manufacturer": {
            "manufacturerId": 205,
            "manufacturer": "Jocund India",
            "tmdNote": ""
        },
        "distributor": {
            "distributorId": 301,
            "distributor": "Acichem Labs",
            "tmdNote": ""
        },
        "sellerClassification": {
            "sellerClassificationId": 401,
            "classification": "",
            "tmdNote": ""
        },
        "fdaCategories": [
            {
                "categoryId": 513,
                "category": "Eosinophil infiltration"
            }
        ],
        "sideEffects": [
            {
                "sideEffectId": 649,
                "sideEffect": "Please consult your physician or pharmacist or product package for this information."
            }
        ]
    }, { .... }
    ]
```

```
    EXAMPLE - GET DRUGS FROM LOOP BACK API

    Drugs : [
      {
        "drugId": 15, <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
        "brandName": "Cetzy 10",
        "genericName": "Cetirizine",
        "atcCode": "",
        "fdaDrcNo": "1234567890",
        "form": "Tablet",
        "strength": "10mg",
        "uses": "Eosinophil infiltration",
        "cautionPrecaution": "Please consult your physician or pharmacist or product package for this information.",
        "contraindication": "Please consult your physician or pharmacist or product package for this information.",
        "imageUrl": "http://tmd-dev.thamardaw.com/TMD000058_4e4b9e42cf0a4fd64572729e15fd79275a4a74fb.jpg.jpg",
        "description": "Eosinophil infiltration",
        "netWeightInGram": 10,
        "countryOfOrigin": {
            "countryOfOriginId": 101, <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            "countryOfOrigin": "India",
            "tmdNote": ""
        },
        "manufacturer": {
            "manufacturerId": 205,    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            "manufacturer": "Jocund India",
            "tmdNote": ""
        },
        "distributor": {
            "distributorId": 301,     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            "distributor": "Acichem Labs",
            "tmdNote": ""
        },
        "sellerClassification": {
            "sellerClassificationId": 401, <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
            "classification": "",
            "tmdNote": ""
        },
        "fdaCategories": [
            {
                "categoryId": 513,  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
                "category": "Eosinophil infiltration"
            }
        ],
        "sideEffects": [
            {
                "sideEffectId": 649,  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< HAVE TO CHANGE HERE IF YOU WANT TO USE DATA INSERTED FROM DATA ENTRY PANEL AS ( id : "sjf918yt1ifhh8190rhif" )
                "sideEffect": "Please consult your physician or pharmacist or product package for this information."
            }
        ]
      }, { .... }
    ]
```




#####   IP     - 128.199.149.198
#####   USER   - root
#####   PASS   - s3cr3tp6ss
#####   HOW TO -

`
  1. npm install

  2. npm start
`
