const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser");

const storyRoute = require("./Routes/storyRoute")
const voteRoute = require("./Routes/voteRoute")

dotenv.config();
const app = express();

try {
      mongoose.connect(process.env.MONGODB_URL)
      console.log('mongoose connected.')
} 
catch (error) {
      console.log(error);
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//
app.use("/story",storyRoute);
app.use("/vote",voteRoute);

app.listen(8000, () => {
      console.log("sever stared.")
})

