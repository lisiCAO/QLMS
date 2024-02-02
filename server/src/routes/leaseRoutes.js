const express = require("express");
const router = express.Router();
const authenticateToken = require("./../middleWares/authenticateToken");
const leaseController = require("../controllers/leaseController");
const authRole = require("../middleWares/authRole");

//get all leases
router.get("/", leaseController.getAllLeases);

//get single lease
router.get("/:id", leaseController.getSingleLease);

//create new lease
router.post(
    "/",
    authenticateToken,
    leaseController.createLeaseValidationRules,
    leaseController.createLease
);

//update single lease
router.put(
    "/:id",
    authenticateToken,
    leaseController.updateLeaseValidationRules,
    leaseController.updateLease
);

//delete single lease
router.delete("/:id", authenticateToken, leaseController.deleteLease);

module.exports = router;
