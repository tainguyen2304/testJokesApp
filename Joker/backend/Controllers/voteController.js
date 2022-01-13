const Vote = require("../Model/voteModule");

const voteController = {
      vote: async (req ,res) => {
            try {
                  const newVote = await new Vote(req.body);
                  const vote = await newVote.save();
                  res.status(200).json(vote);
            } catch (error) {
                  res.status(500).json(error)
            }
      }
}
module.exports = voteController;