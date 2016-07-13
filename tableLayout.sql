CREATE database Bamazon;

USE Products;

CREATE TABLE `Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(50) NULL,
  `department_name` VARCHAR(50) NULL,
  `price` DECIMAL(10,2) NULL,
  `stock_quantity` INT NOT NULL,
  PRIMARY KEY (`id`)
);
  
SELECT * FROM Products;


INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Sport&Outdoor', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Iphone', 'Electronics', 199.99, 200);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('LG 4K TV', 'Electronics', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Electronics', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Sport&Outdoor', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Sport&Outdoor', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Sport&Outdoor', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Sport&Outdoor', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Sport&Outdoor', 100.00, 25);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Bicycle', 'Sport&Outdoor', 100.00, 25);
