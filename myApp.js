let express = require('express');
let app = express();
console.log("Hello World")
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
app.use("/public", express.static(__dirname + "/public"));































 module.exports = app;