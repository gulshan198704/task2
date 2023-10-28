///Task 1///
// 1

// let fullName = "Huseynzade Gulshan Valeh";
// let letters = fullName.split("");
// console.log(letters);

// 2
// let firstName = "Gulshan";
// let lastName = "Huseynzade";
// let fullName = lastName + " " + firstName;
// console.log("Full Name: " + fullName);

// 3

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// 4

// function findModeCount(arr, mode) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === mode) {
//             count++;
//         }
//     }
//     return count;
// }

// let mode = 5;
// let modeCount = findModeCount(arr, mode);

// console.log(`The mode ${mode} is repeated ${modeCount} times in the array.`);



// 5
// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result);


  //6
   
    // arr.sort ((a, b) => a - b);
    // console.log ("sorted ascending: ", arr);
  

   //7

// let maxNumber = arr[0];
// let maxCount = 1;

// for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i];
//     let currentCount = arr.filter(num => num === currentNumber).length;
    
//     if (currentCount > maxCount) {
//         maxNumber = currentNumber;
//         maxCount = currentCount;
//     }
// }

// console.log( maxNumber);
// console.log( maxCount);


//  10

// let largestNumber = arr[0];
// let largestIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//         largestNumber = arr[i];
//         largestIndex = i;
//     }
// }
// console.log( largestNumber + " " + largestIndex);


// 11

// let index = arr.indexOf(4);
// console.log( index);


// 12

// let smallestIndex = -1; 
// let largestIndex = -1;  
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     if (smallestIndex === -1) {
//       smallestIndex = i; 
//     }
//     largestIndex = i; 
// }

// console.log( smallestIndex);
// console.log(largestIndex);

// }
