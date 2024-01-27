const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models"); //import models and sequelize instance

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

// sync database
db.sequelize
    .sync()
    .then(() => {
        console.log("Database synced");
    })
    .catch((error) => {
        console.error("Error syncing database: ", error);
    });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
