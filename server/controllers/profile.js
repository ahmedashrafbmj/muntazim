/** @format */

const multer = require("multer");
const { Profile } = require("../models/ProfilePage");

//storage for images
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
//middleware for image
const uploadImage = multer({ storage: imageStorage }).single("image");

//post api for uploading profile details to database
exports.postProfile = async (req, res, next) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const profile = new Profile({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
      });
      if (req.file) {
        profile.ProfilePicture = req.file.path;
      }
      profile
        .save()
        .then(() => res.status(200).json({ succes: true, resoponse: "Uploaded" }))
        .catch((err) => console.log(err));
    }
  });
};
//get api for profile of a user
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ _id: req.body.id });
    return res.status(200).json({ succes: true, data: profile });
  } catch (error) {
    return res.status(500).json({ succes: false, Error: error });
  }
};
//put api for profilepage to update profile details
exports.updateProfile = async (req, res, next) => {
  if (req.file) {
    var data = {
      Firstname: req.body.Firstname,
      LastName: req.body.LastName,
      password: req.body.password,
      updatedPassword: req.body.password,
      phoneNumber: req.body.phoneNumber,
      ProfilePicture: req.file.path,
    };
  } else {
    var data = {
      Firstname: req.body.Firstname,
      LastName: req.body.LastName,
      password: req.body.password,
      updatedPassword: req.body.password,
      phoneNumber: req.body.phoneNumber,
    };
  }
  const id = req.params.id;
  Profile.findByIdAndUpdate(id, data, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json({
        OldProfile: docs,
      });
    }
  });
};
