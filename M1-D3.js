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

/* WRITE YOUR CODE HERE */
const positiveArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

const user = {
  name: 'Manuel',
  surename: 'Desole',
  eMail: 'desole.manuel@gmail.com',
  age: '24',
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

user.driverLicense = true;

/* EXERCISE 4
Remove from the previously created object the age
*/

delete user.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/*const brother = {
  name: 'Salvatore',
  surname: 'Desole',
  email: 'desolèsalvatore@gmail.com',
};

console.log(user.eMail !== brother.email);*/

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than >50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/*let totalShoppingCart = 60;
let withDiscount = totalShoppingCart - (totalShoppingCart * 20) / 100;
let total =
  totalShoppingCart > 50
    ? 'you are spending ' + withDiscount + ', you do not pay the shipping'
    : 'you are spending ' + withDiscount + ', you pay the shipping of 10€';*/

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/*total += ', you have a 20% discount';

console.log(total);*/

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

let car = {
  brand: 'dacia',
  model: 'duster',
  licensePlate: 'CK854SB',
};

let car1 = Object.assign({}, car);
car1.licensePlate = 'BANANA';

let car2 = Object.assign({}, car);
car2.licensePlate = 'MELA';

let car3 = Object.assign({}, car);
car3.licensePlate = 'ANANAS';

let car4 = Object.assign({}, car);
car4.licensePlate = 'KIWI';

let car5 = Object.assign({}, car);
car5.licensePlate = 'MANGO';

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

carsForRent = [car1, car2, car3, car4, car5];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/*carsForRent.shift();
carsForRent.pop();*/

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(carsForRent);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

const carsForSale = [car1, car5, car4];

const totalCars = carsForSale.length + carsForRent.length;

console.log(totalCars + ' cars');

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
