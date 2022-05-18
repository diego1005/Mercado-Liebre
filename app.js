const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

//Routes
app.get("/", (req, res) => {
    pathHome = path.join(__dirname, "views/index.html");
    res.sendFile(pathHome);
})

//Static
app.use(express.static(path.join(__dirname, "public")));

//Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})