var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

connection.connect(function(err){
	if (err) throw err;
	// console.log('connected as id: ' + connection.threadId)
	storeManagement();
});

function storeManagement(){
	inquirer.prompt([{
		type: 'list',
		name: 'input',
		message: 'What would you like to do today?',
		choices: ['1) Product List', '2) Low Inventory', '3) Add To Inventory', '4) Add New Product']
	}]).then(function(answer){
		if(answer.input === '1) Product List'){
			displayItems();
		}
		else if(answer.input === '2) Low Inventory'){
			lowOnProduct();
		}
		else if(answer.input === '3) Add To Inventory'){
			addInventory();
		}
		else if(answer.input === '4) Add New Product'){
			addProduct();
};

function displayItems(){
    connection.query('SELECT * FROM Products', function(err, res) {
        if (err) throw err;
        console.log('');
        console.log('==============================  Product List ==================================');
        for (var i = 0; i < res.length; i++) {
            console.log('Department Name: ' + res[i].department_name);
            console.log('Item Id: '+res[i].id + '|' + ' Product: ' + res[i].product_name + '|' + ' Price: $' + res[i].price + '|' + ' In Stock: '+ res[i].stock_quantity);
            console.log('-----------------------------------------------------------------------');
        }
        backToMain();
    })

};

function lowOnProduct(){
    connection.query('SELECT * FROM Products WHERE stock_quantity < 5', function(err, res){
        if (err) throw err;
        console.log('');
        console.log('============================== Product List ==================================');
        for (var i = 0; i < res.length; i++) {
            console.log('Department Name: ' + res[i].department_name);
            console.log('--------------------------------')
            console.log('Item Id: '+res[i].id);
            console.log('--------------------------------')
            console.log('Product: ' + res[i].product_name)
            console.log('--------------------------------')
            console.log('In Stock: ' + res[i].stock_quantity);
            console.log('==============================================================================');
        }
        backToMain();
    })

};

function addInventory(){
	inquirer.prompt([{
				name: 'id',
				message: 'Enter ID of Product:',
				validate: function(value){
					var valid = value.match(/^[0-9]+$/)
					if(valid){
						return true
					}
						return 'Please enter numbers only'
					}
			},{
				name: 'number',
				message: 'How much would you like to add to current stock quantity?',
				validate: function(value){
					var valid = value.match(/^[0-9]+$/)
					if(valid){
						return true
					}
						return 'Please enter numbers only'
					}
			}]).then(function(answer){
				connection.query('SELECT * FROM Products WHERE id = ?', [answer.id], function(err, res){
						connection.query('UPDATE Products SET ? Where ?', [{
							stock_quantity: res[0].stock_quantity + parseInt(answer.number)
						},{
							id: answer.id
						}], function(err, res){});
				})
				console.log('Inventory updated');
				backToMain();
			})
};

function addProduct(){
	inquirer.prompt([{
				name: 'product',
				message: 'Enter Product Name:'
			},{
				name: 'department',
				message: 'Enter Department:'
			},{
				name: 'price',
				message: 'Enter Price:',
				validate: function(value){
					var valid = value.match(/^[0-9]+$/)
					if(valid){
						return true
					}
						return 'Please enter numbers only'
					}
			},{
				name: 'stock',
				message: 'Enter Quantity:',
				validate: function(value){
					var valid = value.match(/^[0-9]+$/)
					if(valid){
						return true
					}
						return 'Please enter numbers only'
					}
			}]).then(function(answer){
				connection.query('INSERT into Products SET ?', {
					product_name: answer.product,
					department_name: answer.department,
					price: answer.price,
					stock_quantity: answer.stock
				}, function(err, res){});
				console.log('Product was Added');
				backToMain();
			})
		}
	})

};

function backToMain(){
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'Would You Like To Do Something else?'
	}]).then(function(answer){
		if(answer.choice){
			storeManagement();
		}
		else{
			console.log('GoodBye');
			connection.end();
		}
	})
};