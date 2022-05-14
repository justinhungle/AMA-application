
const env = require('dotenv').config()
const express = require("express");
const expressStaticGzip = require('express-static-gzip');
const { uuid } = require("uuidv4");
const path = require("path");

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, '../client/dist');


app.use('/', expressStaticGzip(publicPath));
app.use(express.json());

app.post('/prompts', (req, res) => {

})

app.listen(PORT, () => console.log(`Listening to port... ${PORT}`));
