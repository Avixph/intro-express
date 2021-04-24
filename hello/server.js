const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey there everyone!");
});

app.get("/login", (req, res) => {
  res.send("Logged In!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express seerver listening on port ${PORT}`);
});



/* HTTP request is sent to the http://localhost:3000/
call the handler function */
