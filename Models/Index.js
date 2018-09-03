var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost:3306',
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
                    } 
                    console.log("connected")
                    con.query(Query, function(err, result, fields) {
                        if (err) {
                        reject(err)
                        }
                        var row = JSON.stringify(result);
                        console.log(row)
                        resolve(result)
                    });
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