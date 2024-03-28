// condition statements

// if statement
// if else statement
// ladder statement (else if statement)
// ternary statement (ternary operator)

// // if statement

let age = 61
let num = 0

if(age > 18){
    console.log("You can vote");
}


// // if else statement

// // Example 1
if(age > 18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

// // Example 2
if(num % 2 == 0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}


// // ladder statement (else if statement)

// // Example 1
if(age > 18 && age <= 60){
    console.log("You can vote");
}
else if(age > 60){                  // You can add multiple else if block statements as per conditions
    console.log("You are elder");
}
else{
    console.log("You cannot vote");
}

// // Example 2
if(num % 2 == 0 && num != 0){
    console.log("Number is even");
}
else if (num == 0){
    console.log("Number is Zero");
}
else{
    console.log("Number is odd");
}


// ternary statement (ternary operator)
// shorthand of if else block

        // condition ? "if true print": "if false print";
console.log(age > 18 ? "You can vote" : "You cannot vote");
              

// switch statement

switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
// This statement isn't frequently used