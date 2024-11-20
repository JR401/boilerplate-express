let express = require('express');
let app = express();
console.log("Hello World")
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));


app.use(express.static(__dirname + "/json"));
app.use("/json", express.static(__dirname + "/public"))

























 module.exports = app;