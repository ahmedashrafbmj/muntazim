/** @format */

const { Number } = require("mongoose");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const packagesSchema = new Schema({
  noOfDays: {
    type: Number,
    required: true,
  },
  destinations: [
    {
      type: String,
    },
  ],
  Guesthouses: [
    {
      type: String,
    },
  ],
  Camping: [
    {
      type: String,
    },
  ],
  transport: {
    type: String,
  },
  price: {
    type: String,
  },
});
const Package = mongoose.model("Package", packagesSchema);
module.exports = { Package };
