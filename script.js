const express = require("express");
const app = express();
const path = require("path")

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')))

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/views", "/index.html"))
});

app.get("/crud", (req, res) => {
  res.send("salve!")
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
});
