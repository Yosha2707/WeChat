var Operations = require('../Models/Index.js');



class MProduct {
    constructor() {

    }
    productList(ProductId, ProductCategoryId, ProductName) {
        var objOperations = new Operations();
        if (ProductId == null && ProductCategoryId == null && ProductName == null) {
            var Query = "select m_product.name, m_product.image_upload, m_product.description, m_product.price, m_product.tax,m_product.shipping_cost, m_product.product_type, m_productcategory.`name` as productcategory, m_unit.name as unit, m_vendor.firm_name as vendor from m_product INNER JOIN m_productcategory on m_product.product_category_id = m_productcategory.id INNER JOIN m_unit on m_product.unit_id = m_unit.id inner join m_vendor on m_product.vendor_id = m_vendor.id"
        } else if (ProductId != null && ProductCategoryId == null && ProductName == null) {
            var Query = "select m_product.name , m_product.image_upload, m_product.description, m_product.price, m_product.tax,m_product.shipping_cost, m_product.product_type, m_productcategory.`name` as productcategory, m_unit.name as unit, m_vendor.firm_name as vendor from m_product INNER JOIN m_productcategory on m_product.product_category_id = m_productcategory.id INNER JOIN m_unit on m_product.unit_id = m_unit.id inner join m_vendor on m_product.vendor_id = m_vendor.id where m_product.id = " + ProductId
        } else if (ProductId == null && ProductCategoryId != null && ProductName == null) {
            var Query = "select m_product.name , m_product.image_upload, m_product.description, m_product.price, m_product.tax,m_product.shipping_cost, m_product.product_type, m_productcategory.`name` as productcategory, m_unit.name as unit, m_vendor.firm_name as vendor from m_product INNER JOIN m_productcategory on m_product.product_category_id = m_productcategory.id INNER JOIN m_unit on m_product.unit_id = m_unit.id inner join m_vendor on m_product.vendor_id = m_vendor.id where m_product.product_category_id = " + ProductCategoryId
        } else if (ProductId == null && ProductCategoryId == null && ProductName != null) {
            var Query = "select m_product.name , m_product.image_upload, m_product.description, m_product.price, m_product.tax,m_product.shipping_cost, m_product.product_type, m_productcategory.`name` as productcategory, m_unit.name as unit, m_vendor.firm_name as vendor from m_product INNER JOIN m_productcategory on m_product.product_category_id = m_productcategory.id INNER JOIN m_unit on m_product.unit_id = m_unit.id inner join m_vendor on m_product.vendor_id = m_vendor.id where m_product.name LIKE '%" + ProductName + "%'"
        }
        return new Promise((resolve, reject) => {
            try {
                console.log(Query)
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
                reject(obbj)
            }
        })
    }
}

module.exports = MProduct;