var express = require("express");
var path = require("path");
var dbJson = require("./db/db.json")

var app = express();
var PORT = 3000;


// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});