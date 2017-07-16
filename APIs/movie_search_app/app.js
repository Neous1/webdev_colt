var express = require("express");
var app = express();
var request = require("request");
//take our result data and send it to a template
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search")
})

app.get("/results", function(req,res){
    //capture our seach from search.ejs input
    var query = req.query.search;
    request("http://www.omdbapi.com/?s=" + query +"&&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode === 200){
            var data= JSON.parse(body)
            res.render("results", {data:data})
        };
    });
});

app.listen(3000, function(){
    console.log("Movie App has started!!")
})