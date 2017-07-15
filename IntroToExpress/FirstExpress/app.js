var express = require("express");
var app = express();



// "/" => "Hi there"
app.get("/", function(req, res){
   res.send("Hi there!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

// "/dogs" => "MEOW"
app.get("/dog", function(req, res){
    console.log("someone made a request to /dog")
    res.send("woof!!");
});


app.get("/r/:subredditName", function(req, res){
    // console.log("Welcome to the :subredditName subreddit")
    var subreddit = req.params.subredditName;
   res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
   res.send("Welcome to the comment page");
});

app.get("*", function(req, res){
    res.send("You are a star!!");
});

// Tell Express to listen for requests (start over)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.");
});