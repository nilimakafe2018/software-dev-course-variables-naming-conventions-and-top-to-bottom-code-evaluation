/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);


// 1. Variables a, b, c, and d are too vague, they do not tell what they represent. Using meaningful 
// variable names is important because they make the code easier to understand. When variable names clearly
// say what the value is for, it helps you and others read and fix the code faster without confusion.

// 2. They do not follow best practices for naming, such as using camelCase or descriptive names. When naming 
// variables, it is important not to use confusing or unclear names like just one letter or random words. We need to 
// avoid using spaces or any symbols in the names, and do not start names with numbers. Also, do not make names too long or 
// hard to understand. Instead, pick names that clearly tell what the variable is for, so it is easy for ourselves and 
// others to read and use the code later.

// 3. Clear variable names help everyone on the team understand the code easily. When names are simple and explain 
// what they do, team members can work together faster and make fewer mistakes. It makes sharing and fixing code much easier and faster.

// Updated code

let customerName = "Nilima";
let numberOfItems = 10;
let itemType = "Fruits";
let totalPrice = 25;
let storeName = "Schnucks";
let purchaseHistory = customerName + " bought " + numberOfItems + " " + itemType + " for $" + totalPrice + " at " + storeName + ".";

console.log(purchaseHistory);

// 