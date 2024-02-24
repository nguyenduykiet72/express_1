const Product_model = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product_model(req.body.title);
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
