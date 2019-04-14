const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
    "happy"
];
let longwords = words.filter(word => word.lenght > 6);
console.log('long words are : ', longwords)

let array1 = [1, 4, 9, 16];
const newArray = array1.map(x => x * 2);
console.log('new array are : ', newArray)

let array2 = [5, 12, 8, 130, 44]
let found = array2.find(element => element > 10);
console.log('find array where bigger than 10 is : ', found)

let array3 = ["a", "b", "c"];
let text = "";
array3.forEach(element => {
    text += element + " z ";
});
console.log('text is : ', text);

let stringIBBatam = "Impact Byte Batam";
let resultChartAt0 = stringIBBatam.charAt(0);
console.log('resultChartAt0 : ', resultChartAt0)

function firstFunction() {
    let count = 0;
    setInterval(() => {
        count++;
        alert(`this is setINterval & already show in ${count} times`);
    }, 3000);
}
//firstFunction();

function secondFunction() {
    setTimeout(() => {
        alert("this is set timeout");
    }, 3000)

}
//secondFunction();

const myFunction = (totalPrice, name = 'empty') => {
    const totalTax = totalPrice * 0.1;
    const detailTax = `name: ${name}, tax:${totalTax}, totalPrice: ${totalPrice}`
    return detailTax;
}
let result = myFunction(10000, 'Shrit');
console.log(result);
result = myFunction(12000, 'sleeve')
console.log(result);
result = myFunction(12000)
console.log(result);


let carName = "honda";
console.log('carName 1', carName)

function myFunction1() {
    let carName = "volvo";
    console.log('carName 2', carName)
}
console.log('carName 3', carName)
myFunction();
console.log('carName 4', carName)