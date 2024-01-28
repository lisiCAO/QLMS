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
router.post("/",
/* authMiddleware,*/
propertyController.propertyValidationRules, 
propertyController.createProperty
); // TODO: Add auth middleware to get user id

// TODO: Adjust the following routes to use propertyController

// get all properties
router.get("/", async (req, res) => {
    try {
        const properties = await property.findAll();
        res.sendSuccess(properties, "Properties retrieved successfully");
    } catch (error) {
        res.sendError("Failed to retrieve properties,error" + error, 500);
    }
});

// get single property
router.get("/:id", async (req, res) => {
    try {
        const prop = await property.findByPk(req.params.id);
        if (prop) {
            res.sendSuccess(prop, "Property retrieved successfully");
        } else {
            res.sendError("Property not found", 404);
        }
    } catch (error) {
        res.sendError("Failed to retrieve property: " + error.message, 500);
    }
});

// update single property
router.put("/:id", async (req, res) => {
    try {
        const updated = await property.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedProperty = await property.findByPk(req.params.id);
            res.sendSuccess(updatedProperty, "Property updated successfully");
        } else {
            res.sendError("Property not found", 404);
        }
    } catch (error) {
        res.sendError("Failed to update property: " + error.message, 500);
    }
});

// delete single property
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await property.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.sendSuccess(null, "Property deleted successfully");
        } else {
            res.sendError("Property not found", 404);
        }
    } catch (error) {
        res.sendError("Failed to delete property: " + error.message, 500);
    }
});

module.exports = router;
