const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
const post = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());
routes(app);

mongoose
  .connect(`${process.env.MONGODB}`)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
app.listen(post, () => {
  console.log(`Server is running on port ${post}`);
});
