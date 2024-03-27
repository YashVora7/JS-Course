// // Operator is a specific symbol which can be used to perform operations.
// // example: mathematics operations, conditionals operations etc.


// // 1. Arithmetic(Mathematical) operators:

// // Addition: +
// // Subtraction: -
// // Multiplication: *
// // Division: /
// // Modulation: %

// // Operands = x and y:
let x = 10
let y = 2    

console.log("ARITHMETIC OPERATIONS\n");

console.log("X + Y = ",x+y);
console.log("X - Y = ",x-y);
console.log("X * Y = ",x*y);
console.log("X / Y = ",x/y);
console.log("X % Y = ",x%y); // Remainder
console.log("X ^ Y = ",x**y,"\n"); 


// // 2. Unary(Single operands) operators:

// // x++
// // x--
// // y++
// // y--

console.log("UNARY OPERATIONS\n");

// Post Increment/Decrement

console.log(x++); // Except of x+1
console.log("X++ ",x);

console.log(x--); // Except of x-1
console.log("X-- ",x);

console.log(y++); // Except of y+1
console.log("Y++ ",y);

console.log(y--); // Except of y-1
console.log("Y-- ",y);

// Pre Increment/Decrement

console.log(++x);
console.log("++X " ,x);

console.log(--x);
console.log("--X " ,x);

console.log(++y);
console.log("++Y ",y);

console.log(--y);
console.log("--Y ",y,"\n");


// 3. Assignment operators: 

// =
// +=
// -=
// *=
// /=

console.log("ASSIGNMENT OPERATIONS\n");

x = 10;

// left = right 
// right to left assign

console.log("X += 5 ",x += 5); // x = x + 5
console.log("X -= 5 ",x -= 5); // x = x - 5
console.log("X *= 5 ",x *= 5); // x = x * 5
console.log("x /= 5 ",x /= 2,"\n"); // x = x / 5


// 4. Comparison operators - return true or false (boolean)

// ==  - EQUAL  
// !=  - NOT EQUAL
// === - STRICT EQUAL WITH DATATYPE

// >
// <
// >=
// <=

console.log("COMPARISON OPERATIONS\n");

a = 5
b = 5

console.log("A == B ", a==b);

console.log("A != B ", a!=b);

console.log("A === B ", a===b);

console.log("A !== B ", a!==b);

console.log("A > B ", a>b);

console.log("A < B ", a<b);

console.log("A >= B ", a>=b);

console.log("A <= B ", a<=b,"\n");


// 5. Logical operators - return true or false (boolean)

// && - AND
// || - OR
// ! - NOT

console.log("LOGICAL OPERATIONS\n");

console.log("A && B ", a == b && a != b);

console.log("A || B ", a == b || a != b);

console.log("!A == B ", !(a == b));

// FOR LOGICAL OPERATOR && AND || OF TRUTH TABLE PRESENTED IN DRAWIO FILE

// Ternary operator in next file script3