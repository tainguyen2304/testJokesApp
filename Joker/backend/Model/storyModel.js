const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
      {
            story:String,
            author:String,

      },{
            timestamps: true
      }
);

module.exports = mongoose.model("Story",storySchema);