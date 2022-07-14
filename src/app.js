const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const route = require("./route");
const app = express();

app.use(express.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://properTheory:hAk8jm4g4BezuelA@cluster0.kefer.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true })
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use("/", route)

app.listen(3000, function () { console.log("Express app running on PORT 3000") })