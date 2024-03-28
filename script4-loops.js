// Loop

// Methods for looping:
// 1. For Loop         - Entry control loop
// 2. While Loop       - Entry control loop 
// 3. Do...while Loop  - Exit control loop 

// 1. For Loop
console.log("For Loop:\n");

//  initialize ; condition ; increment/decrement (updatetion)
for(let i = 1; i<=5; i++){
    console.log(i);
}

// // Practical Example1
// // sum of all input numbers

let sum = 0;
// let n = prompt("Enter your number: ");
for(let i = 1; i<=5; i++){
    sum = sum + i;
}
console.log(sum,"\n");


// 2. While Loop
console.log("While Loop:\n");

let i = 1;
while(i <=5 ){
    console.log(i);
    i++
}

// Practical Example1
// sum of all input numbers

sum = 0;
i=1
while(i <=5 ){
    sum = sum + i;
    i++
}
console.log(sum,"\n");


// 3. Do...while Loop - Run at least one time either condition is false or true
console.log("Do...while Loop:\n");

i=1
do{
    console.log(i);
    i++
}while(i <= 5)

// Practical Example1

sum = 0;
i=1
do{
    sum = sum + i;
    i++
}while(i <= 5)
console.log(sum);