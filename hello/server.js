const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey there everyone! Welcome to my webpage 👋🏼");
});

app.get("/login", (req, res) => {
  res.send("Logged In!");
});

app.get("/favorite-food", (req, res) => {
  res.send("Pho");
});

app.get("/favorite-movie", (req, res) => {
  res.send("- NULL -");
});

app.get("/about-me", (req, res) => {
  res.send(
    "A detailed-oriented individual with great interpersonal skills, and can collaborate well with peers. With a high interest in designing and coding. Currently looking to pursue a User Experience Design, Front-End Development, or Full-Stack Development role. The goal, when placed on a team will be to continue fostering and growing my knowledge. It’s evident that moving up in roles contains challenges along with interesting projects, willing to go above and beyond for the team and company."
  );
});

app.get("/contact", (req, res) => {
  res.send("Preferred Contact: Email & LinkedIn");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express seerver listening on port ${PORT}`);
});

/* HTTP request is sent to the http://localhost:3000/
call the handler function */
