// variables is container where we can store our values

// Variables naming rules:
// 1. Variable names are case sensitive
// example: yash and Yash is different variable

// 2. Variable names cannot start with a number
// example: 789yash - show error message

// 3. Letters,digits,underscore, $ is allowed only
// example: yash-vora or yash@vora - show error message

// 4. Predefined(Reserved) words are not allowed
// example: if variable name is class - show error message

// var let & const

// var was used before ES6 standard but now commonly used let and const after ES6

// var:
// Variable can be re-declare & updated,
// global scope

// let:
// Variable can't be re-declare but can be updated,
// block scope

// const:
// Variable can't be re-declare or updated,
// block scope


let string = "123" + 123

console.log(string);

// object example 1
const product = {
    img : "url",
    title : "peter parker jeans",
    rating : 4,
    price : 2799,
    discount : 30,
}

console.log(product);

// object example 2
const profile = {
    username : "Yash Vora",
    isFollow : true,
    posts : 125,
    followers : 123+"k",
    following : 123,
    description : "Yash Vora is a backend developer"
}

console.log(profile);

// Next script file is waiting for you
// to be continued...