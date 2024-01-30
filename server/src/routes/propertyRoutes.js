const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");

/* No more models import here */
const { property } = require("../models");
/* No more models import here */

/* Auth middleware */
// TODO: Add auth middleware here
/* Auth middleware */

// Route for creating a new property
router.post(
    "/",
    /* authMiddleware,*/
    propertyController.propertyValidationRules,
    propertyController.createProperty
); // TODO: Add auth middleware to get user id

// TODO: Adjust the following routes to use propertyController

// get all properties
router.get("/", propertyController.getAllProperties);

// get single property
router.get("/:id", propertyController.getSingleProperty);

// update single property
router.put(
    "/:id",
    propertyController.propertyValidationRules,
    propertyController.updateProperty
);

// delete single property
router.delete("/:id", propertyController.deleteProperty);

module.exports = router;
