/** @format */

const mongoose = require("mongoose");
const { Number } = require("mongoose");
const { Schema } = mongoose;
const profileSchema = new Schema({
  Firstname: {
    type: String,
    maxlength: 50,
  },
  Lastname: {
    type: String,
    maxlength: 50,
  },
  password: {
    type: String,
    trim: true,
    minglength: 5,
    unique: 1,
  },
  updatePassword: {
    type: String,
    minglength: 5,
  },
  phoneNumber: {
    type: Number,
    maxlength: 11,
  },
  ProfilePicture: {
    type: String,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = { Profile };
