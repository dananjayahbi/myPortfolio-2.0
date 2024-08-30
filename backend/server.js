const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConfig = require('./db/dbConfig');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// App routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/admin", require("./routes/user.routes"));

dbConfig();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
