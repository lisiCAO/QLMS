// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("./../middleWares/authenticateToken");
const userController = require("../controllers/userController");

// get all users
router.get("/", userController.getAllUsers);

// get userinfo by userId in token
router.get("/userinfo", authenticateToken, userController.getUserInfo);

// get single user
router.get("/:id", userController.getSingleUser);

// create new user
router.post(
    "/",
    authenticateToken,
    userController.userValidationRules,
    userController.createUser
);

// update single user
router.put(
    "/:id",
    authenticateToken,
    userController.userValidationRules,
    userController.updateUser
);

// delete single user
router.delete("/:id", authenticateToken, userController.deleteUser);

module.exports = router;
