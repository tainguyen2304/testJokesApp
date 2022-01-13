const router = require("express").Router();

const storyController = require("../Controllers/storyController");

// Post story
router.post("/post", storyController.postStory)
router.get("/", storyController.getAllStory)


module.exports = router;