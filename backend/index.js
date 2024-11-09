require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./config/database'); // Database connection

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Server Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
