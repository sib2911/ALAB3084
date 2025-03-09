//Part 1
// To begin, solve the following classic “Fizz Buzz” problem.
// There are a few different ways to do this - experiment with what you think is the most efficient.
// Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fuzz Buzz");
//         continue;
//       }
//   if (i % 3 == 0) {
//     console.log("fuzz");
//     continue;
//   }
//   if (i % 5 == 0) {
//     console.log("buzz");
//     continue;
//   }
//   else console.log(i)
// }

// // Part2
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.


// for (n = 1; n <= 100; n++){
//     if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0){
//         continue;
//     } else {
//         console.log(n)
//     }
// }

//Part 3: Feeling Loopy
// As a final task, solve the following practical problem regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//i need 4 cells 5 rows
// "," indicate a new cell meanwhile "\n" indicates a new row
let array1 = csv.split('\n');
const rows = 5;
const cols = 4;
const array2 = [];

//creating table array
for (let i = 0; i < rows; i++){
    array2[i] = [];
    for (let j = 0; j < cols; j++) {
        array2[i][j] = array1git ;
    }
}
console.log(array2)
//find a method to store each item in array1 into indexes of array2


// array1.forEach(element => array2[element]);

// console.log(array2)



// for (let i = 0; i < csv.length; i++) {
	
// 	if (i == csv.length) {
// 		break;
// 	} else if ( csv[i] == ","){
// 		continue;
// 	}
//     
		
// 	