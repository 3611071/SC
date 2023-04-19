const express = require("express");
const mime = require('mime');
const path = require('path');
const app = express();

app.listen(80, () => {
  console.log("Application started and Listening on port 3001");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sign_in.html");
});

app.get("/clearc", (req, res) => {
  res.clearCookie();
  res.redirect("/");
});

app.get("/download-table1", (req, res) => {
  res.redirect('./downloadPage.html')
})

app.get("/ws", (req, res) => {
  res.download(__dirname + "/ws.docx", "ws.docx")
  //var file = __dirname + '/ws.docx'
  //var filename = path.basename(file); var mimetype = mime.getType(file); 
  //res.setHeader('Content-disposition', 'attachment; filename=' + filename); 
  //res.setHeader('Content-type', mimetype); var filestream = fs.createReadStream(file);
  //filestream.pipe(res);
})
