'use sctrict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));


app.listen(PORT, () => console.log('app is up and running'));

