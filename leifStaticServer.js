const express = require('express');
const path = require('path');

// // create new express app and save it as "app"
const app = express();

//point to static path and join (just using root directory currently)
app.use(express.static(path.join(__dirname, './')));

// assign port to PORT variable
const PORT = 3636;

// spin up server and console.log PORT
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/ How neat is that?`);
});


