const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");
const router = express.Router();

// Google OAuth login route
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    authController.googleAuthCallback,
    function (req, res) {
        res.cookie("jwt", req.user.token, { httpOnly: true });
        console.log("req.user.token", req.user.token);
        res.redirect("/");
    }
);

// Other OAuth login routes
// register a new user
router.post(
    "/register",
    authController.registerValidationRules,
    authController.register
);

// user login
router.post(
    "/login",
    authController.loginValidationRules,
    authController.login
);

module.exports = router;
