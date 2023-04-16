// Install express to run the http server
const express = require("express");

// Install cors to call the server from any other origin
const cors = require("cors");
const { default: axios } = require("axios");

// Install express framework
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Create random pw for authentication
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": "12528c2d-b9b0-4979-9591-2ea973128fcf" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Error:", e.message); // Log the error message
    console.error("Error response data:", e.response.data); // Log the error response data
    return res.status(e.response.status).json(e.response.data);
  }
});

// Run port here
app.listen(3001);
