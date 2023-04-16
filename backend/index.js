// Install express to run the http server
const express = require("express");

// Install cors to call the server from any other origin
const cors = require("cors");

// Install express framework
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Create random username
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

// Run port here
app.listen(3001);
