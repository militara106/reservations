var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});



// Displays all characters
app.get("/api/reservations", function(req, res) {
  return res.json(characters);
});

var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    phone: "18009002424",
    email: "jcrossguitar@gmail.com",
    unique: 4603
  },
  {
    routeName: "jc",
    name: "jc",
    phone: "Jedi Master",
    email: 900-439-0011,
    unique: 2103
  },
  {
    routeName: "tommy",
    name: "tommy",
    phone: 800-940-3636,
    email: "jcrcossguitar@gmail.com",
    unique: 5395
  }
];

app.get("/api/reservations/:reservations", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

for (var i = 0; i < characters.length; i++) {
  if (chosen === characters[i].routeName) {
    return res.json(characters[i]);
  }
}

return res.json(false);
});

app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });