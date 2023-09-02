"use strict";
//First Question
var ar = [4, 3, 6, 1, 7];
function updater(arr, index, value) {
    ar.splice(index, 0, value);
}
updater([3], 0, 3);
console.log(ar);
//Second Question
let items = ["Mortein", "Nestle Water ", "Sugar", "Yogurt"];
let app = ["Banana"];
function add_items(items, index, app) {
    items.splice(index, 0, ...app);
}
add_items(items, 0, app);
console.log(items);
//Third Question
var i = 0;
while (i <= 25) {
    console.log(i);
    i++;
}
//Fourth Question
var i = 1;
var count = 0;
while (i <= 25) {
    if (i % 2 == 0) {
        console.log(i);
        count++;
        if (count == 10) {
            break;
        }
    }
    i++;
}
//Fifth Question
function fac(num) {
    var factorial = 1;
    while (num > 1) {
        factorial = factorial * num;
        num--;
    }
    console.log(factorial);
}
fac(5);
//Sixth Question
var arr = [-1, 5, 8, 2, 3, -8, 6, 4, 10];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr.splice(i, 1);
    }
}
console.log(arr);
//Seventh Question
function sum_of_numbers(array) {
    var sum = 0;
    var i = 0;
    while (i < array.length) {
        sum = sum + array[i];
        i++;
    }
    console.log(sum);
}
sum_of_numbers([-1, 6, 4, 1]);
//Eighth Question
var celcius = [25, 89, 34, 4];
var i = 0;
var fahrenheit_array = [];
while (celcius.length > i) {
    var fahrenheit = (celcius[i] * 9 / 5) + 32;
    fahrenheit_array.push(fahrenheit);
    i++;
}
console.log(fahrenheit_array);
