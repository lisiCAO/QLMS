const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// define routes
// app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
