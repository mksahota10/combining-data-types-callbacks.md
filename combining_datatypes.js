//Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

var crayonBox = {
  crayonBoxcolor1: "blue",
  crayonBoxcolor2: "green",
  crayonBoxcolor3: "purple",
  crayonBoxcolor4: "pink",
  crayonBoxcolor5: "red",
};

console.log(crayonBox.crayonBoxcolor2);

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
var myBottle = {
  mybottleType: "metal",
  mybottleColor: "blue",
  mybottleSize: "24oz",
  mybottleShape: "round",
  mybottlePrice: "20",
};
console.log(myBottle.mybottleSize);

//Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

let receipt = {
  wine: "red",
  price: "30",
  store: "BevMo",
};
console.log(receipt.price);

//Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

let apartmentBuilding = ["Preet", { tenant: "Leah" }, "Sedef", "Vin"];
console.log(apartmentBuilding[1].tenant);

//Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = {
  newObject: {
    item: "scarf",
    size: 3,
  },
};
console.log(knit.newObject.item);

//I was stuck on this for some reason, Edward helped me.

//Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

var crayonSelector = {
  crayonBox: {
    color: ["blue", "green", "purple"],
  },
};
console.log(crayonSelector.crayonBox.color[2]);

//Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = "null";
const options = () => {
  console.log("Try me");
};

// const powerButton () {
//   options: {
//     song: "secrets",
//   }
// }
// console.log('select a song');

// function myFunction(p1, p2) {
//   return p1 * p2; // The function returns the product of p1 and p2
// }

// const powerButton = 'secrets'

// const options = () => {
// options: ['secrets','try me', 'bop']
//   console.log(seclect a song);

// }
// options()

// // const item = 'spicy meatball';

// // const exampleFunction = () => {
// //     console.log(item + " within function");
// // }

// // exampleFunction();

//Model a Vending Machine Model a vending machine

//a vending machine is an object
//it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

//const vendingMachine = {
//       items:[
//         { name: 'Espresso', price: 1 },
//         { name: 'Cappuccino', price: 2.50 },
//         { name: 'Chocolate', price: 2 },
//         { name: 'Potato', price: 3.50 }
//     ]
// };

//         console.log(vendingMachine.items[2]);

const vendingMachine = {
  items: [
    { name: "Espresso", price: 1 },
    { name: "Cappuccino", price: 2.5 },
    { name: "Chocolate", price: 2 },
    { name: "Potato", price: 3.5 },
  ],
  vend: (arrposition) => {
    return vendingMachine.items[arrposition].name;
  },
};
vendingMachine.vend(2);

// Callbacks

// Make a function add that takes two arguments (numbers) and sums them together

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));

// function add(x, y) {

//     return x+y;
// }
// console.log(add(2, 3));      // 5
// console.log(add(-1, 1));     // 0

// console.log(add(1, 1, 1));   //

// Make a function subtract that takes two arguments (numbers) and subtracts them

function subtract(x, y) {
  return x - y;
}
console.log(subtract(8, 5));

// Make a function multiply that takes two arguments and multiplies them

function multiply(a, b) {
  return a * b;
}
console.log(multiply(8, 6));

// Make a function divide that takes two arguments and divides them
function divide(a, b) {
  return a / b;
}
console.log(divide(12, 3));

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

//We made a function called calculate, then passed in
//3 arguments. Wasnt sure on how to create a second
//function and make it a callback.
function calculate(num1, num2, num3) {
  return num1 * num2 * num3;
  console.log(num1);
  console.log(num2);
  console.log(num3);
}
calculate(2, 4, 6);

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.

// Call calculate 4 times, each time using one of the operation functions you wrote

calculate(1, 3, 5);

//Clean up this code, so that it works and has function definitions in the correct place

//inthe invoke function had to be moved below the curly brackets as it was currently a global scope.

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

//What is meant by the error(s) this produces?
// Foo has been already been declared in the above function, we need something different. Also, it needs to be moved below the function to invoke it.

const foo2 = () => {
  console.log("hi");
};
foo2();

//The first question is for the numbers array. The second question is for the words array.

//You don't have to write an answer to the thought questions.
