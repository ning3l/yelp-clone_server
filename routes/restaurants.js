var express = require("express");
var router = express.Router();
const client = require("../database/client");
// const restaurantController = require("../controllers/restaurantController");

// GET ALL RESTAURANTS (name and images)
router.get("/restaurants", function (req, res, next) {
  client
    .query("SELECT * FROM restaurant")
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

// GET SPECIFIC RESTAURANT WITH ID
router.get("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  client
    .query("SELECT * FROM restaurant WHERE id=$1", [id])
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

// GET ALL AVAILABLE TAGS
router.get("/tags", function (req, res, next) {
  client
    .query("SELECT * FROM tag")
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

// GET SPECIFIC TAG VIA ID
router.get("/tags/:id", (req, res) => {
  const { id } = req.params;
  client
    .query("SELECT * FROM tag WHERE id=$1", [id])
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

// GET ALL AVAILABLE CITIES
router.get("/cities", function (req, res, next) {
  client
    .query("SELECT * FROM city")
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

// GET SPECIFIC CITY VIA ID
router.get("/cities/:id", (req, res) => {
  const { id } = req.params;
  client
    .query("SELECT * FROM city WHERE id=$1", [id])
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

// GET RESTAURANT NAME AND CITY COMBINED
router.get("/rest-cities", (req, res) => {
  client
    .query(
      "SELECT r.name as restaurant_name, r.id as restaurant_id, c.name as city_name FROM restaurant r JOIN city c ON r.city_id = c.id"
    )
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

module.exports = router;
