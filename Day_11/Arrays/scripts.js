var groceryList = ['Eggs', 'Apples', 'Juice', 'Tomatos', 'Basil', 'Milk', 'Vegetatble Broth', 'Quinoa']

//Access length of array
console.log(groceryList.length);


//Access Objects in array
var first = groceryList[0];
var second = groceryList[1];

//Loop over Objects in array
for (index = 0; index >= groceryList.length; index--) {
	console.log(groceryList[index]);
}

//Add Objects to your Array

var newLength = groceryList.push('Orange');
// ["Apple", "Banana", "Orange"]


//Remove Objects from your Array

var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]



//Code Syntax

for ([initialExpression]; [condition]; [incrementExpression]) {

  statement

}



//Call Stack
function firstFunction(){
 console.log("Hello from firstFunction");
}
function secondFunction(){
 firstFunction();
 console.log("The end from secondFunction");
}
secondFunction();