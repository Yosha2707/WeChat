var mysql = require('mysql');
var con = mysql.createConnection({
    host: '70.32.28.66',
    user: 'rssplnet_estate',
    password: 'Swap@123',
    database: 'rsspl_estate'

});



class Operations {
    constructor() {}

    SelectAsync(Query) {
        return new Promise((resolve, reject) => {
            try {
                con.connect(function(err) {
                    if (err){
                        reject(err)
                    } else{
                        console.log("connected")
                        con.query(Query, function(err, result, fields) {
                            if (err) {
                            reject(err)
                            }else{
                                var row = JSON.stringify(result);
                                console.log(row)
                                resolve(result)
                            }
                        });
                    }
                });
            } catch (err) {
                reject(err)
                console.log(err)
            }
        })

    }

    InsertAsync(Query){

    }
}


module.exports = Operations;