const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// import sequelize model
const user = require("./models/user.js");

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
        user.sync(); // 或者使用 sequelize.sync() sync all models
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

// define routes
// app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
