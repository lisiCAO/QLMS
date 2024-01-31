const express = require("express");
const router = express.Router();
const authenticateToken = require("./../middleWares/authenticateToken");
const propertyController = require("../controllers/propertyController");
const authRole = require("../middleWares/authRole");

/* No more models import here */
const { property } = require("../models");
/* No more models import here */

const multer = require("multer");

// config multer
const storage = multer.memoryStorage();

// initialize multer
const upload = multer({ storage: storage });

// Route for creating a new property
router.post(
    "/",
    authenticateToken,
    authRole("landlord"),
    upload.array("images", 10),
    propertyController.propertyValidationRules,
    propertyController.createProperty
); // TODO: Add auth middleware to get user id

// TODO: Adjust the following routes to use propertyController

// get all properties
router.get("/", authRole("landlord"), propertyController.getAllProperties);

// get single property
router.get("/:id", authRole("landlord"), propertyController.getSingleProperty);

// update single property
router.put(
    "/:id",
    authenticateToken,
    authRole("landlord"),
    propertyController.propertyValidationRules,
    propertyController.updateProperty
);

// delete single property
router.delete(
    "/:id",
    authenticateToken,
    authRole("landlord"),
    propertyController.deleteProperty
);

module.exports = router;
