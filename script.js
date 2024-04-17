// Task 1: Using map to square each element of an array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);



// Task 2: Function to determine grade based on score
// function calculateGrade(score) {
//   return score >= 90 ? 'A' :
//          score >= 80 ? 'B' :
//          score >= 70 ? 'C' :
//          score >= 60 ? 'D' :
//                       'F';
// }
// const studentScore = 85;
// console.log("Grade:", calculateGrade(studentScore));




// Task 3: Object representing a car with year property change
// let car = {
//   companyName: "Toyota",
//   model: "Corolla",
//   year: 2019
// };

// function changeYear(carObj, newYear) {
//   carObj.year = newYear;
// }

// changeYear(car, 2021);
// const { model, year } = car;
// console.log("Car Model:", model, "Year:", year);



// // Task 4: Filter prime numbers from an array
// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;
//   let i = 5;
//   while (i * i <= num) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//     i += 6;
//   }
//   return true;
// }
// const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeNumbers = numbersArray.filter(isPrime);
// console.log("Prime numbers:", primeNumbers);




// Task 5: Use cases of map, filter, and reduce functions

// Example array of numbers
// const nums = [1, 2, 3, 4, 5];

// // Map: Transforming array elements
// const squaredNums = nums.map(num => num * num);
// console.log("Squared numbers:", squaredNums); 

// // Filter: Filtering elements based on a condition
// const evenNumbers = nums.filter(num => num % 2 === 0);
// console.log("Even numbers:", evenNumbers); 

// // Reduce: Aggregating values of an array into a single value
// const sumOfNumbers = nums.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum of numbers:", sumOfNumbers); 




// // Task 6: Asynchronous function to fetch data from an API

// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log("Fetched data:", data);
//   }
  
//   fetchData();
  


// // Task 7: Nested object with optional chaining to access phone number
// const person = {
//   name: "John Doe",
//   address: {
//     city: "New York",
//     country: "USA"
//   }
// };
// const phoneNumber = person?.contact?.phone;
// console.log("Phone number:", phoneNumber);
