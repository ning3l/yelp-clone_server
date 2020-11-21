var express = require("express");
var router = express.Router();
const commentController = require("../controllers/commentController");

// GET ALL COMMENTS
router.get("/", commentController.getAllComments);

// GET ALL COMMENTS FOR A SPECIFIC RESTAURANT
router.get("/:id", commentController.getSpecificComment);

module.exports = router;
