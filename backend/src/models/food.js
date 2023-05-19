const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("Food", foodSchema);
