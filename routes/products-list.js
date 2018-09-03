var express = require('express');
var router = express.Router();
var MProduct = require('../Controller/m_product.js');


/* GET users listing. */



router.post('/', function(req, res, next) {
    var ProductId = req.body.ProductId;
    var ProductCategoryId = req.body.ProductCategoryId;
    var ProductName = req.body.ProductName;
    if(typeof ProductId == 'number' || ProductId==null){
        if(typeof ProductCategoryId == 'number' || ProductCategoryId==null){
            if(!/[^a-zA-Z]/.test(ProductName)){
                var objMProduct = new MProduct();
                objMProduct.productList(ProductId, ProductCategoryId, ProductName).then(
                    repos => {
                        res.json(repos);
                    }).catch(err => {
                    res.json(err);
                });
            }else{
                res.json({
                    status:false,
                    ErrorMessage : {
                        status:true,
                        errormessage: "Please provide valid ProductName"
                    }
                })
            }
        }else{
            res.json({
                status:false,
                ErrorMessage : {
                    status:true,
                    errormessage: "Please provide valid ProductCategorytId"
                }
            })
        }
    }else{
        res.json({
            status:false,
            ErrorMessage : {
                status:true,
                errormessage: "Please provide valid ProductId"
            }
        })
    }
});

module.exports = router;