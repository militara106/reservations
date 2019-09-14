var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    email: "Jedi Master",
    phoneNumber: 900,
    uniqueID: 4603
  },
  {
    routeName: "yoda",
    name: "Yoda",
    email: "Jedi Master",
    phoneNumber: 900-439-0011,
    uniqueID: 2103
  },
  {
    routeName: "yoda",
    name: "Yoda",
    email: "Jedi Master",
    phoneNumber: 900,
    uniqueID: 5395
  }
];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });