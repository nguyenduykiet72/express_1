const Product_model = require("../models/product");

exports.getProducts = async (req, res, next) => {
  const products = await Product_model.fetchAll();
  res.render("shop/product-list", {
    prods: products,
    docTitle: "All Products",
    path: "/products",
  });
};

exports.getIndex = async (req, res, next) => {
  const products = await Product_model.fetchAll();
  res.render("shop/index", {
    prods: products,
    docTitle: "Shop",
    path: "/",
  });
}

exports.getCart = async (req, res, next) => {
  const products = await Product_model.fetchAll();
  res.render("shop/cart", {
    prods: products,
    docTitle: "My Cart",
    path: "/cart",
  });
}
exports.getCheckout = async (req, res, next) => {
  const products = await Product_model.fetchAll();
  res.render("shop/checkout", {
    prods: products,
    docTitle: "Checkout",
    path: "/checkout",
  });
}




// const addProduct_get = (req, res, next) => {
//   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//   res.render("add-product", {
//     docTitle: "Add Product",
//     path: "/add-product",
//   });
// };

// const addProduct_post = (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect("/");
// };

// const addProducts_get = (req, res, next) => {
//   res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
// }

// exports.getAddProduct = addProduct_get;
// exports.postAddProduct = addProduct_post;
// exports.getAddProducts =  addProducts_get;
