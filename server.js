var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var Example = require("./model.js");

mongoose.connect("mongod://localhost/nytreact");

var data = {
    array: ["item1", "item2", "item3"],
    boolean: false,
};

Example.create(data)
    .then(function(dbExample) {
        console.log(dbExample);
    })
    .catch(function(err) {
        console.log(err.message);
    });