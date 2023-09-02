var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//First Question
var ar = [4, 3, 6, 1, 7];
function updater(arr, index, value) {
    ar.splice(index, 0, value);
}
updater([3], 0, 3);
console.log(ar);
//Second Question
var items = ["Mortein", "Nestle Water ", "Sugar", "Yogurt"];
var app = ["Banana"];
function add_items(items, index, app) {
    items.splice.apply(items, __spreadArray([index, 0], app, false));
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
