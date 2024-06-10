const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {console.log(`Server running on port ${port}`)});