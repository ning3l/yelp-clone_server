var express = require("express");
var router = express.Router();
const restaurantController = require("../controllers/restaurantController");

// GET ALL RESTAURANTS (name and images)
router.get("/", restaurantController.getRestaurants);

// GET SPECIFIC RESTAURANT WITH ID
router.get("/:id", restaurantController.getOneRestaurant);

module.exports = router;
