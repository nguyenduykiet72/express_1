const path = require("path");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController= require('./controllers/error')

app.use(express.urlencoded({ extended: true })); // parsing the incoming requests
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname,'controllers')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);  

app.use(errorController.get404);

app.listen(3000);
