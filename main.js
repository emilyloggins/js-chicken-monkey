
// let firstName = "brenda";
// let lastName = "long";

// console.log(`${firstName} ${lastName}`);

// // function

// function displayName(lastName, firstName) {
//     return(`${firstName} ${lastName} is awesome`);
// }

// //  invoke it to make it run

// let myNewName = displayName("cat", "fish");
// console.log("myNewName", myNewName);
// displayName(1, 6);
// displayName(true, "happy");

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    
    if (currentNumber % 5 === 0) {
        console.log("Chicken");
    }
    else if (currentNumber % 7 === 0) {
        console.log("Monkey");
    }
    else if (currentNumber % 5 || currentNumber % 7) {
        console.log("Chicken Monkey");
    }
}


