console.log('ivana');
let number = 0;

let add = (a, b) => {
    return a + b;
}
console.log(add(1, 2))

let number2 = 1;
function printNumbersTill(n) {
    for (let i = 0; i < n; i++) {
        console.log(number2);
        number2 = number2 + 1;
    }
}
printNumbersTill(15);

function getGreetingTo(someone) {
  console.log(`Hello ${someone}!`)
}

console.log(getGreetingTo('Mark'))

let printValues = (array) => {
    for (let i=0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printValues([0, 3, 6, 7, 9])

let printValues2 = (array2) => {
    array2.forEach((element) => {
       console.log(element);
    });
}
printValues2([1, 2, 3, 4])