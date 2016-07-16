var mysql = require('mysql');
var inquirer = require('inquirer');

var priceTotal = 0;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Bamazon"
})

function displayItems() {
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
        console.log('');
        console.log('============================== Product List ==================================');
        for (var i = 0; i < res.length; i++) {
            console.log('Department Name: ' + res[i].department_name);
            console.log('Item Id: ' + res[i].id + '|' + ' Product: ' + res[i].product_name + '|' + ' Price: $' + res[i].price + '|' + ' In Stock: ' + res[i].stock_quantity);
            console.log('-----------------------------------------------------------------------');
        }
        purchase();
    })
};

connection.connect(function(err) {
    if (err) throw err;
    displayItems();
})

// =====================================================================

var purchase = function() {
        inquirer.prompt([{
            name: "id",
            type: "input",
            message: "What is the ID of Item you want to Purchase?",
            validate: function(value) {
                var valid = value.match(/^[0-9]+$/)
                if (valid) {
                    return true
                }
                return 'Please enter a valid Product ID'
            }
        }, {
            name: "stock_quantity",
            type: "input",
            message: "How many of this item do you want?",
            validate: function(value) {
                var valid = value.match(/^[0-9]+$/)
                if (valid) {
                    return true
                }
                return 'Please enter a valid Product ID'
            }


        }]).then(function(answer) {
            connection.query('SELECT * FROM products WHERE id = ?', [answer.id], function(err, res) {
                if (answer.stock_quantity > res[0].stock_quantity) {
                    console.log('Not Enough In Stock');
                    console.log('Order Cancelled');
                    reOrder();
                } else {
                    priceTotal = res[0].price * answer.stock_quantity;
                    currentDepartment = res[0].DepartmentName;
                    console.log('Thanks for your order');
                    console.log('Your Total Amount is $' + priceTotal);
                    console.log('');
                    var math = res[0].stock_quantity - parseInt(answer.stock_quantity);
                    // console.log(math);
                    connection.query('UPDATE products SET stock_quantity=' + math + ' Where id =' + answer.id);
                    reOrder();
                }
            });
        });
};
// ====================================================================

function reOrder() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'choice',
        message: 'Would you like to place another order?'
    }]).then(function(answer) {
        if (answer.choice) {
            displayItems();
        } else {
            connection.end();
        }
    })
};
