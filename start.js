const express = require("express");
const app = express();

app.listen(80, () => {
  console.log("Application started and Listening on port 80");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sign_in.html");
});

app.get("/clearc", (req, res) => {
  res.clearCookie();
  res.location("/");
})