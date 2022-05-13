const express = require("express");
const path = require("path");
const app = express();

//Routes
app.get("/", (req, res) => {
    pathHome = path.join(__dirname, "views/index.html");
    res.sendFile(pathHome);
})

//Static
app.use(express.static(path.join(__dirname, "public")));

//Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
})