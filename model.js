var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExampleSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String
    },
});

var Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;