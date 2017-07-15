var faker = require("faker");

var productName = faker.commerce.productName();

var price =faker.commerce.price();
        console.log("====================================")
        console.log("       WELCOME TO MY SHOP")
        console.log("===================================")


     for (var i = 0; i <= 10; i++){
        //  console.log(productName + "- $"+ price); 

        console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
     }



