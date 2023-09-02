"use strict";
//First Question
var sum = 0;
for (var i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(sum);
//Second Question
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}
// Third Question
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr.splice(i, 1);
    }
}
console.log(arr);
//Fourth Question
function area_of_circle(radius) {
    console.log((3.142 * radius ** 2));
}
area_of_circle(2);
// Fifth Question
var arr = [58, 62, 14, 25, 50, 14, 99];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 50) {
        arr.splice(i, 2);
    }
}
console.log(arr);
//Sixth Question
var arr = [58, 62, 14, 25, 50, 14, 99];
var max = 0;
function greatest() {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            max = arr[i];
        }
        else
            max = arr[i + 1];
    }
    console.log(max);
}
greatest();
