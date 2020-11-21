var express = require("express");
var router = express.Router();
const tagController = require("../controllers/tagController");

// GET ALL AVAILABLE TAGS
router.get("/", tagController.getTags);

// GET SPECIFIC TAG VIA ID
router.get("/:id", tagController.getSpecificTag);

module.exports = router;
