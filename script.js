const express = require("express");
const app = express();
const path = require("path")

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views", "/index.html"))
})

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/views", "/home.html"))
});

app.get("/create-read-update-delete", (req, res) => {
  res.sendFile(path.join(__dirname + "/views", "crud.html"))
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
});
