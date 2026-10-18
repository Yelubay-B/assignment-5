
// TASK 6: Variables and Data Types

console.log("--- Task 6: Variables & Data Types ---");
const fullName = "Yelubay Bibimariyam"; 
let age = 18;                       
let isStudent = true;               
let favoriteColor = "Blue";        

console.log("Name:", fullName, "| Type:", typeof fullName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);
console.log("Color:", favoriteColor, "| Type:", typeof favoriteColor);

age = 20;
console.log("Updated Age:", age);

// TASK 7: Input and a Greeting

console.log("\n--- Task 7: Greetings ---");
const userName = prompt("Введите ваше имя:");
alert(`Привет, ${userName}! Добро пожаловать.`);

const myGroupName = "MT-2502";
console.log(`Студент: ${fullName}, Группа: ${myGroupName}`);


// TASK 8: Sum and Arithmetic

console.log("\n--- Task 8: Sum & Arithmetic ---");
const num1Input = prompt("Введите первое число (например, 12):");
const num2Input = prompt("Введите второе число (например, 5):");

const a = Number(num1Input);
const b = Number(num2Input);

console.log("Сумма (Sum):", a + b);
console.log("Разность (Difference):", a - b);
console.log("Произведение (Product):", a * b);
console.log("Частное (Quotient):", a / b);
console.log("Остаток от деления (Remainder):", a % b);


// TASK 9: Strings

console.log("\n--- Task 9: Strings ---");
const nameStr = "Yelubay Bibimariyam";
console.log("Length (длина):", nameStr.length); 
console.log("Uppercase:", nameStr.toUpperCase());
console.log("Lowercase:", nameStr.toLowerCase());
console.log("Первые 3 символа (slice):", nameStr.slice(0, 3));

const partOne = "Frontend";
const partTwo = "Development";
console.log(partOne + " " + partTwo + " is exciting!");

// TASK 10: Increment and Assignment Operators

console.log("\n--- Task 10: Operators ---");
let counter = 10;
console.log("Начальное значение:", counter);

counter++; 
console.log("После counter++:", counter);

counter--; 
console.log("После counter--:", counter);

counter += 5; 
console.log("После counter += 5:", counter);

counter -= 3;
console.log("После counter -= 3:", counter);

counter *= 2; 
console.log("После counter *= 2:", counter);

counter /= 4; 
console.log("После counter /= 4:", counter);

// TASK 11: Dog Age to Human Age Calculation

console.log("\n--- Task 11: Dog Age Calculation ---");
function calculateHumanAge(dogAge) {
  const humanAge = (dogAge - 2) * 4 + 21;
  console.log(`Собаке ${dogAge} лет, что соответствует ${humanAge} человеческим годам.`);
}
calculateHumanAge(2); 
calculateHumanAge(5); 

// TASK 12: Functions

console.log("\n--- Task 12: Functions ---");

function greetUser(name) {
  console.log(`Здравствуйте, ${name}!`);
}
greetUser("Bibimariyam");
greetUser("Dana");

function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log("Сумма 10 + 25 =", calculateSum(10, 25));
console.log("Сумма 3.5 + 4.5 =", calculateSum(3.5, 4.5));

function calculateRectangleArea(width, height) {
  return width * height;
}
console.log("Площадь (5 x 10) =", calculateRectangleArea(5, 10));
console.log("Площадь (7.5 x 2) =", calculateRectangleArea(7.5, 2));

