CREATE database Bamazon;

USE Bamazon;

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
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('LG 4K TV ', 'Electronics', 100.00, 8);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('iMac', 'Electronics', 1099.99, 12);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Nike Football', 'Sport&Outdoor', 16.99, 40);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Nike Basketball', 'Sport&Outdoor', 19.99, 32);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Levi Jeans', 'Clothing', 39.99, 28);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Nike Polo', 'Clothing', 25.00, 16);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Wix Oil Filter', 'Automotive', 8.99, 12);
INSERT INTO `Products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Motorcycle Cover', 'Automotive', 15.00, 6);
