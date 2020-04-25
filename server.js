var express = require("express");
var path = require("path");
var dbJson = require("./db/db.json")

var app = express();
var PORT = 3000;

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});
app.get("/api/notes", function (req, res) {
    res.json(dbJson);
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});