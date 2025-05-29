//1 - Variables and Conditionals:

// let age = 16;

// if (age >= 18) {
//     console.log("You are of legal age to vote.");
// } else {
//     console.log(`You have  ${18 - age} more years before you can vote.`);
// }


// let userName = prompt("Your name");

// if (userName === "John") {
//     console.log("Hello, John!");
// } else {
//     console.log("You are not John.");
// }


//2 - Functions:

// let sum = 0;

// function calculateSum(a,b) {
//     sum = a + b;
//     return sum;
// }

// calculateSum(3,5);
// console.log(sum);

// calculateSum(3,20);
// console.log(sum);

// calculateSum(156,120);
// console.log(sum);


// function reverstString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverstString('Hello'));
// console.log(reverstString('Convenient'));

//3 - arrs and Loops:

// const favoriteFruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < favoriteFruits.length; i++) {
//     console.log(favoriteFruits[i]);    
// }

// function getAverage(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];     
//     }

//     return  sum/ arr.length; 
// }

// console.log(getAverage([5,6]));

// function findMaxNumber(arr) {
//     let largestNumber = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > largestNumber) {
//             largestNumber = arr[i];
//         } 
//     }
//     return largestNumber;
// }

// console.log(findMaxNumber([6, 7, 4, 45]));
// console.log(findMaxNumber([6, 78, 4, 45]));


// function makeSentence(arr) {
//     let sentence = "";

//   for (let i = 0; i < arr.length; i++) {
//     sentence += arr[i];

//     if (i < arr.length -1) {
//         sentence += " ";
//     }
//   }

//   sentence = sentence.charAt(0).toLocaleUpperCase() + sentence.slice(1) + ".";

//   return sentence;

// }

// console.log(makeSentence(["Hello", "everyone"]));
// console.log(makeSentence(["he", "went", "to", "school"]));

// function checkNameExists(array, name) {
//     if (array.includes(name)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkNameExists(["Maryna", "Natasha"], "Maryna"));
// console.log(checkNameExists(["Maryna", "Natasha"], "Sasha"));

// let evenNumbers = [];

// for (let i = 1; i < 20; i++) {

//     if (i % 2 === 0) {
//         evenNumbers.push(i);
//         console.log(evenNumbers);
//     }  
// }

//4- Objects:

// const book = {
//     title: "The little Prince",
//     author: "Antoine de Saint-Exupery",
//     year: 1943,
// }
// for (let key in book) {
//     console.log(key + ": " + book[key]);
// }

// const person = {
//     name: "Mike", 
//     age: 23,
//     gender: "male",
// }

// function showPerson(person) {
//     for (let key in person) {
//         console.log(key + ": " + person[key]);
//     }
// }

// showPerson(person);


//5- Objects as Classes:

// const Car = {
//   make: "",
//   model: "",
//   year: "",
//   start: function() {
//     console.log("Starting the car.");
//   },
// };

// console.log(Car);

// const Car = {
//   make: "",
//   model: "",
//   year: "",
//   start: function() {
//     console.log("Starting the car.");
//   },
//   drive: function() {
//     console.log("Driving the car.");
//   }
// };

//6- Window Object:

// const button = document.getElementById("click");

// button.addEventListener("click", function () {
//     alert("Hello there! I wish you a good day");
// })


// function greetUser() {
//     let name = prompt("What is your name?");
//     alert(`Hello, ${name}!`);
// }

// greetUser();

//7- DOM Manipulation: