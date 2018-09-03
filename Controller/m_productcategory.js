var Operations = require('../Models/Index.js');



class MProductCategory {
    constructor() {

    }
    productCategory() {
        var objOperations = new Operations();
        var Query = "select name , id from m_productcategory"
        return new Promise((resolve, reject) => {
            try {
                objOperations.SelectAsync(Query).then(
                    repos => {
                        var obj = {
                            status: true,
                            ProductsInfo: repos,
                            ErrorStatus: {
                                status: false,
                                errorMessage: null
                            }
                        }
                        resolve(obj);
                    }).catch(err => {
                    reject(err)
                })
            } catch (err) {
                var obbj = {
                    status: false,
                    ErrorStatus: {
                        status: true,
                        errorMessage: err
                    }
                }
                var obbjresult = JSON.parse(obbj);
                reject(obbjresult)
            }
        })
    }
}

module.exports = MProductCategory;