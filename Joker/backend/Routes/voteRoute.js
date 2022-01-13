const router = require("express").Router();

const voteController = require("../Controllers/voteController");

// Post vote
router.post("/post", voteController.vote);


module.exports = router;