const path = require("path");
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
const PORT = 8080;
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

httpServer.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
