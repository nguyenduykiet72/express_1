const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const a = 'a';
app.engine(
    "hbs", 
    hbs.engine({ 
        layoutsDir: 'views/layouts/',
        defaultLayout: "main-layout", 
        extname: "hbs" 
    }));
app.set("view engine", "hbs");
app.set("views", "views");
// app.set("view engine", "pug");
// app.set("views", "views"); //optional

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true })); // parsing the incoming requests
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { docTitle: "Page Not Found",layout:'main-layout' });
});

app.listen(3000);
