var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Bamazon"
})

 connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log(res);
})


// connection.connect(function(err) {
//     if (err) throw err;
//     purchase();
// })

// var purchase = function() {
//     inquirer.prompt([{
//         name: "item",
//         type: "input",
//         message: "What is the ID of Item you want to Purchase?"
//     }, {
//         name: "quantity",
//         type: "input",
//         message: "How many of this item do you want?"
//     }, {
//         name: "startingBid",
//         type: "input",
//         message: "What would you like your starting bid to be?",
//         validate: function(value) {
//             if (isNaN(value) == false) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }]).then(function(answer) {
//         connection.query("INSERT INTO auctions SET ?", {
//             itemname: answer.item,
//             category: answer.category,
//             startingbid: answer.startingBid,
//             highestbid: answer.startingBid
//         }, function(err, res) {
//             console.log("Your auction was created successfully!");
//             start();
//         });
//     })
// }

// Users should then be prompted with two messages.
// The first message should ask them the ID of the product they would
// like to buy.The second message should ask them how many of the product
// they would like to buy.
