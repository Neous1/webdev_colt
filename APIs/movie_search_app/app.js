var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req,res){
    request("http://www.omdbapi.com/?s=star&&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode === 200){
            res.send(body["Search"][0])
        };
    });
});

app.listen(3000, function(){
    console.log("Movie App has started!!")
})