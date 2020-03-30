var express = require("express");

var logger = require("morgan");

var mongoose = require("mongoose");

var router = require("express").Router();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB");

app.listen(PORT, function(){

    console.log("App is running on http://" + PORT);

});

router.get("/stats", function(req,res){

    res.sendFile(path.resolve("public/stats.html"));

});

router.get("/exercise", function(req,res){

    res.sendFile(path.resolve("public/exercise.html"));

})
