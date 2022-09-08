/** @format */

const express = require("express");
const { postPackage } = require("../controllers/packages");
const router = express.Router();

//post api for saving package details to database
router.route("/packageDetails").post(postPackage);
module.exports = router;
