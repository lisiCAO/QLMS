const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const sequelize = require("../database.js");
const user = require("./models/user");

// 数据库同步
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
        user.sync(); //sync user model
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
