var express = require('express');
var router = express.Router();
var MOrder = require('../Controller/m_orders.js');


/* GET users listing. */



router.post('/', function(req, res, next) {
    var obj = {
         "order_date" : req.body.OrderDate,
         "delivery_date" : req.body.DeliveryDate,
         "net_amount" : req.body.NetAmount,
         "points" : req.body.Points,
         "customer_shipping_address" : req.body.CustomerShippingAddress,
         "customer_billing_address" : req.body.CustomerBillingAddress,
         "payment_status" : req.body.PaymentStatus,
         "customer_details" : req.body.CustomerDetails,
         "customer_name" : customer_details.CustomerName,
         "customer_mobile" :  customer_details.CustomerMobile,
         "landline" : customer_details.Landline,
         "customer_email" : customer_details.CustomerEmail,
         "wechat_id" : customer_details.WeChatId,
         "order_details" : req.body.ProductInfo
    }

    if(order_date==null || order_date==undefiined || net_amount==null || net_amount==undefined || points==null ||
     point==undefined || customer_billing_address==null || customer_shipping_address==null || payment_status==null || payment_status==undefined
      || customer_details==null || customer_details==undefined || wechat_id==null || wechat_id==undefined || order_details.length<0 )
        {
            res.json({
                status:false,
                ErrorMessage : {
                    status:true,
                    errormessage: "Please provide valid credentials, nullable and undefined values are restricted."
                }
            })
        }else{
            var objMOrder = new MOrder();
            objMOrder.orderplacement(obj).then(
                repos => {
                    res.json(repos);
                }).catch(err => {
                res.json(err);
            });
        }
});

module.exports = router;