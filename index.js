const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();

// for generating a random id
const crypto = require("crypto");
const randomId = crypto.randomBytes(8).toString("hex");

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/", (req, res) => {
  var user = {
    id: randomId,
    fullName: req.body.name,
    aboutMe: req.body.aboutMe,
    knownTechnologies: req.body.code,
    githubUrl: req.body.gitUrl,
    twitterUrl: req.body.twitterUrl,
    favoriteBooks: req.body.book,
    favoriteArtists: req.body.artist
  };
  res.send(user)
})

app.get("/:id", (req, res) => {
  res.render("homepage");
});

app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
