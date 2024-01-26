const express = require("express");
const cors = require("cors");
const db = require("./models"); //import models and sequelize instance
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authController = require("./controllers/authController");
require("dotenv").config();

//import middleware
const {
    sendSuccessResponse,
    sendErrorResponse,
} = require("./middleWares/responseHandler");

const app = express();
app.use(cors());
app.use(express.json());

//use middleware
app.use(sendSuccessResponse);
app.use(sendErrorResponse);

//import routes
const propertyRoutes = require("./routes/propertyRoutes.js"); //import routes for property model

//use routes
app.use("/api", propertyRoutes);

const session = require("express-session");

app.use(
    session({
        secret: process.env.SESSION_SECRET, // 用于签名 session ID 的秘钥，建议使用随机字符串
        resave: false, // 强制保存 session 即使它没有变化
        saveUninitialized: true, // 强制将未初始化的 session 存储
        cookie: { secure: false }, // 如果为 true，则只通过 HTTPS 发送 cookie
        // 注意：在生产环境中，应设置 secure 为 true，并确保网站使用 HTTPS
    })
);

// sync database
db.sequelize
    .sync()
    .then(() => {
        console.log("Database synced");
    })
    .catch((error) => {
        console.error("Error syncing database: ", error);
    });

// define routes
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json(`Hello, this is the QLMS backend server on port ${PORT}!`);
});

// app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json(`Hello, this is the QLMS backend server on port ${PORT}!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
