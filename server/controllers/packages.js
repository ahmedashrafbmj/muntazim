/** @format */

const { Package } = require("../models/Packages");

exports.postPackage = async (req, res, next) => {
  const package = await new Package(req.body);
  package.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      Data: doc,
    });
  });
};
