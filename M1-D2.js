/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/*const myArray = [1,2,3,4,5,6];*/

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/*let driverAnswer= 9 > 10 ? 0 : "yes I got the driver licens";
const myData = {
    name: 'Manuel',
    surname: 'Desole',
    email: 'desole.manuel@gmail.com',
    age: '24',
    drivingLicence: driverAnswer,
};*/

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/*console.log(myData);*/

/* EXERCISE 4
Remove from the previously created object the age
*/

/*delete myData.age;

console.log(myData);*/

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/*const myData2 = {
    name: 'Beppe',
    surname: 'Nanni',
    email: 'BeppeNanni@gmail.com'
};

console.log(myData.email === myData2.email);*/

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/*let minAmount = 50;
let customerShoppingCart = 20;
let total = "";

if(customerShoppingCart> minAmount) {
    console.log('cart: ' + customerShoppingCart + '€');
    console.log('You have free shipping!');
    total = console.log("The total is" + customerShoppingCart + "€");
} else {
    console.log('cart: ' + customerShoppingCart + '€');
    console.log('Shipping fees'+ " " + 10 + "€");
    total = console.log("The total is" + " " + (customerShoppingCart + 10) + "€");
};*/

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

let minAmount = 50;
let customerShoppingCart = 45;
let total = '';
let sale = 20;

if (customerShoppingCart >= minAmount) {
  console.log('cart: ' + customerShoppingCart + '€');
  console.log('You have free shipping!');
  console.log(sale + '%' + ' discount');
  total = console.log(
    'The total is ' + (customerShoppingCart * 20) / 100 + '€'
  );
} else {
  console.log('cart: ' + customerShoppingCart + '€');
  console.log('Shipping fees' + ' ' + 10 + '€');
  console.log(sale + '%' + ' discount');
  total = console.log('The total is' + ' ' + (customerShoppingCart + 10) + '€');
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/

/*const car = {
    brand: "Toyota",
    model: "Corolla",
    licensePlate: "NL1-LDK-36",
}

const cars = [];
for (let c = 0; c <= 4; c++) {
    cars.push(Object.assign({}, car));
    cars[c].licensePlate = car.licensePlate.slice(0, -1) + c;
}*/
