var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcom to my assignment!");
});

app.get("/speak/:animal", function (req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof woof",
        cat: "I have you human",
        goldfish: "..."
    }
    var sound = sounds[animal]
    res.send("the " + animal + " says " +" \""+sound +"\"" );
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result ="";
    // we need to loop thru message to the get number of messages to be printed
    // res.send can only be set once, it need to be outside the for loop.
    for (var i =0; i < times; i++){
        result += message +" ";
    }
    res.send(result);
});


app.get("*", function(req, res){
        res.send("Sorry, page not found...What are you doing with your life?")

});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Now serving your app");
});