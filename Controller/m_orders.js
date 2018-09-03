var Operations = require('../Models/Index.js');



class MOrder {
    constructor() {

    }
    orderplacement(object) {
        var objOperations = new Operations();
        var Query = ""
        return new Promise((resolve, reject) => {
            try {
                console.log(Query)
                objOperations.InsertAsync(Query).then(
                    repos => {
                        var obj = {
                            status: true,
                            order_status: "placed",
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
                reject(obbj)
            }
        })
    }
}

module.exports = MOrder;