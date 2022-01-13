const Story = require("../Model/storyModel");

const storyController = {
      postStory: async (req ,res) => {
            try {
                  const newStory = await new Story(req.body);
                  const story = await newStory.save();
                  res.status(200).json(story);
            } catch (error) {
                  res.status(500).json(error)
            }
      },
      getAllStory: async (req, res ) => {
            try {
                  const stories = await Story.find();
                  res.status(200).json(stories);   
            } catch (error) {
                  res.status(500).json(error)
            }
      }
}
module.exports = storyController;