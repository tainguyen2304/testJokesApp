const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema(
      {
            story:String,
            author:String,
            like:Boolean,


      },{
            timestamps: true
      }
);

module.exports = mongoose.model("Vote",voteSchema);