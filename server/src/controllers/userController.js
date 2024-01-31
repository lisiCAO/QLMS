const userService = require("../services/userService");
const { body, validationResult } = require("express-validator");

// Validate and sanitize fields using express-validator
exports.userValidationRules = [
    /* TODO: adjust validation according to business logic */
    body("username").trim().notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("role")
        .isIn(["tenant", "landlord"])
        .withMessage("Role must be either tenant or landlord"),
    // validate password only if it exists
    body("password")
        .if(body("password").exists())
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")
        .matches(/[a-z]/)
        .withMessage("Password must contain at least one lowercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number")
        .matches(/[\W]/)
        .withMessage("Password must contain at least one special character"),
];

exports.getAllUsers = async (req, res) => {
    // get all users
    try {
        const users = await userService.getAllUsers();
        res.sendSuccess(users, "Users retrieved successfully");
    } catch (error) {
        res.sendError("Failed to retrieve users: " + error.message, 500);
    }
};

exports.getSingleUser = async (req, res) => {
    // get single user
    try {
        const user = await userService.getSingleUser(req.params.id);
        if (user) {
            res.sendSuccess(user, "User retrieved successfully");
        } else {
            res.sendError("User not found", 404);
        }
    } catch (error) {
        res.sendError("Failed to retrieve user: " + error.message, 500);
    }
};

exports.createUser = async (req, res) => {
    // create new user
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.sendError(
            "Create a new user failed: " +
                errors
                    .array()
                    .map((err) => err.msg)
                    .join(", "),
            422
        );
    }

    try {
        const user = await userService.createUser(req.body);
        // Send success response
        res.sendSuccess(user, "User created successfully");
    } catch (error) {
        res.sendError("Failed to create user: " + error.message, 500);
    }
};

exports.updateUser = async (req, res) => {
    // update single user
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.sendError(
            "Update a user failed: " +
                errors
                    .array()
                    .map((err) => err.msg)
                    .join(", "),
            422
        );
    }

    try {
        const updateUser = await userService.updateUser(
            req.params.id,
            req.body
        );
        if (updateUser) {
            res.sendSuccess(updateUser, "User updated successfully");
        } else {
            res.sendError("User not found", 404);
        }
    } catch (error) {
        res.sendError("Failed to update user: " + error.message, 500);
    }
};

exports.deleteUser = async (req, res) => {
    // delete single user
    try {
        const deleted = await userService.deleteUser(req.params.id);
        if (deleted) {
            res.sendSuccess(null, "User deleted successfully");
        } else {
            res.sendError("User not found", 404);
        }
    } catch (error) {
        res.sendError("Failed to delete user: " + error.message, 500);
    }
};
