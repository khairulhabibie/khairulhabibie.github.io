const express = require("express");
const history = require("express-history-api-fallback");
const path = require("path");

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// Handle routing using history API fallback
app.use(history());

// Serve static files again from the build folder (including index.html)
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
