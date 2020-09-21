const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config({ path: '../.env' });

const PORT = process.env.PORT || 5000;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
