//for the array bellow, return the following using the for loop and the forEach
//positive numbers
//negative numbers
//multiply array by 2
//numbers greater than 10

// using the for loop
var array = [5, 6, 9, -7, 18, 29, 40, -30];
var positiveArray = [];

for (var i = 0; i < array.length; i++){
    if (array[i] > 0){
        positiveArray.push(array[i]);
    }
}
console.log(positiveArray);

//using forEach loop
var array = [5, 6, 9, -7, 18, 29, 40, -30];
var positiveArray = [];

array.forEach(num => {
    if ((num) > 0){
        positiveArray.push(num)
    }
});
console.log(positiveArray);

// to return negative numbers, change the comparism sign to less than ('<').



//multiplying array by 2

var array = [5, 6, 9, -7, 18, 29, 40, -30];
var multipliedArray = [];

for (var i = 0; i < array.length; i++){
    multipliedArray.push(array[i] * 2);
}
console.log(multipliedArray);

//using the forEach loop
var array = [5, 6, 9, -7, 18, 29, 40, -30];
var multipliedArray = [];

array.forEach(num => {
    multipliedArray.push((num) * 2)
});
console.log(multipliedArray);



//return numbers greater than 10
var array = [5, 6, 9, -7, 18, 29, 40, -30];
var greaterArray = [];

for (var i = 0; i < array.length; i++){
    if (array[i] > 10){
        greaterArray.push(array[i]);
    }
}
console.log(greaterArray);

// using the forEach loop
var array = [5, 6, 9, -7, 18, 29, 40, -30];
var greaterArray = [];

array.forEach(num => {
    if ((num) > 10){
        greaterArray.push((num));
    }
});
console.log(greaterArray);















