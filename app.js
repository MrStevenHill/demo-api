var express = require("express");
const PORT = process.env.PORT || 5000

var app = express();

const addresses = [
  { "id": "1", "street": "1 Test Street", "town": "Test Town", "postcode": "TE3 5ST" },
  { "id": "2", "street": "2 Test Street", "town": "Test Town", "postcode": "TE3 5ST" },
  { "id": "3", "street": "3 Test Street", "town": "Test Town", "postcode": "TE3 5ST" },
  { "id": "4", "street": "4 Test Street", "town": "Test Town", "postcode": "TE3 5ST" },
  { "id": "5", "street": "1 Example Street", "town": "Example Town", "postcode": "EX4 9LE" },
  { "id": "6", "street": "2 Example Street", "town": "Example Town", "postcode": "EX4 9LE" },
  { "id": "7", "street": "3 Example Street", "town": "Example Town", "postcode": "EX4 9LE" },
  { "id": "8", "street": "4 Example Street", "town": "Example Town", "postcode": "EX4 9LE" },
];

app.get("/addresses", (req, res, next) => {
  res.json(addresses);
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
