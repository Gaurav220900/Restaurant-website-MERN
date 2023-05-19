const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const foodRoute = require("./routes/food");
const cors = require("cors");
const morgan = require('morgan')

mongoose
  .connect("mongodb://localhost:27017/food-app")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json())

app.use(morgan('tiny'))

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(foodRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listening at port 4000");
});
