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
    item: 'scarf',
    size: 3
  }
}
console.log(knit.newObject.item);




//I was stuck on this for some reason, Edward helped me.

//Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

var crayonSelector = {
  crayonBox: { 
    color:['blue', 'green', 'purple']
  }
}
console.log(crayonSelector.crayonBox.color[2]);


//Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

// const powerButton () {
//   options: {
//     song: "secrets",
//   }
// }
// console.log('select a song');


// function myFunction(p1, p2) {
//   return p1 * p2; // The function returns the product of p1 and p2
// }





const powerButton = 'secrets'

const options = () => {
options: ['secrets','try me', 'bop']
  console.log(seclect a song);
 
}
options()


// const item = 'spicy meatball';

// const exampleFunction = () => {
//     console.log(item + " within function");
// }

// exampleFunction();
