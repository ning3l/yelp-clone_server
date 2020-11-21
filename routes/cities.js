var express = require("express");
var router = express.Router();
const citiesController = require("../controllers/citiesController");

// GET ALL AVAILABLE CITIES
router.get("/", citiesController.getAllCities);

// GET RESTAURANT NAME AND CITY COMBINED
router.get("/&restaurants", citiesController.getRestNamesCities);

// GET SPECIFIC CITY VIA ID
router.get("/:id", citiesController.getSpecificCity);

module.exports = router;
