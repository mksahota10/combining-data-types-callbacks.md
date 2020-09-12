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
