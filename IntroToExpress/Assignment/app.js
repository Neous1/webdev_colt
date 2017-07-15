var express = require("express");
var app = express();

app.get("/", function(req,res){
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    // console.log(req);
    // res.send("Animal page")
    // if animal is pig res.send("the pig says Oink")
    // if animal is cow res.send("the cow says Moo");
    // if animal is dog res.send("the dog say Woof woof")
    // res.send("the duck says Quack");
    // res.send("the horse says Neigh")
    
    if (req.params.animal==="pig"){
        res.send("the pig says Oink")
    }
    else if (req.params.animal==="cow"){
        res.send("the cow says Moo")
    }
    else if (req.params.animal==="dog"){
        res.send("the dog says Woof woof")
    }
    else if (req.params.animal==="duck"){
        res.send("the duck says Quack")
    }
    else if (req.params.animal==="horse"){
        res.send("the horse says Neigh")
    }
    else {
        res.send("Your selected animal could be prehistoric...maybe?")
    }
});


app.get("/repeat/:something/:num", function(req, res){
    var something = req.params.something;
    // console.log(req);
    var num = req.params.num; 
    if (num <= 0){
        res.send("Nothing to see here")
    }
    else if (num >=1){
        for(var i = 0;  i< num; i++){
            res.write(something+" ");
        }
                res.send(something);
    }
});

app.get("*", function(req, res){
        res.send("Sorry, page not found...What are you doing with your life?")

});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
})