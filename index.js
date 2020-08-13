//setup
var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    cors = require('cors'),
    bodyParser = require("body-parser")
    Daily = require("./model/data")

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//database setup
mongoose.connect("mongodb://localhost:27017/yiqing_db");


app.get("/dailydata", (req, res) => {
    // Daily.find({}, (err, data) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //         res.send(JSON.stringify(data));
    //     }
    // })
    Daily.find({}).sort('date').exec((err, data) => {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
            res.send(JSON.stringify(data));
        }
    })
});

app.listen(4000, () => {
    console.log("Server is listening on port: 4000");
});