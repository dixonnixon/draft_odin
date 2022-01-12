let myPr = 10;
let myObj = { name: "Andrii" };
let myHouse = { color: "blue" };
myHouse.color = "red";

console.table(myObj);
console.table(myHouse);

let color = myHouse.color;
console.table(color);
color = "newColor";

console.table(myHouse.color);
console.table(color);

let colorObj = { color: myHouse.color };
console.log(colorObj);
colorObj.color = 'aColor';
console.log(colorObj);

let myHouse1 = myHouse;
myHouse1.color = '3rdColor';

console.log(myHouse, myHouse1);