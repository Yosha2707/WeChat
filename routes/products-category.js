var express = require('express');
var router = express.Router();
var MProductCategory = require('../Controller/m_productcategory.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
    var objMProductCategory = new MProductCategory();
    objMProductCategory.productCategory().then(
        repos => {
            res.json(repos);
        }).catch(err => {
        res.json(err);
    });
});

module.exports = router;