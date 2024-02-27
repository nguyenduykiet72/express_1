const Product_model = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
};
//quan thu 

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product_model(title,imageUrl,description,price);
  product.save();
  res.redirect("/");
};


exports.getProducts = async (req, res, next) => {
  const products = await Product_model.fetchAll();
  res.render("admin/products", {
    prods: products,
    docTitle: "Admin Products",
    path: "/admin/products",
  });
};
