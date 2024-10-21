//? Basics1
import {
  Book,
  Car,
  describeBook,
  formatValue,
  greet,
  multiply,
  printStaffInfo,
  Rectangle,
  Staff,
} from "./Basics1";

console.log(multiply(21, 8));
console.log(greet("Mantra"));
let Fortuner: Car = { make: "Toyota", model: "Sigma", year: 2021 };
console.log(Fortuner);
console.log(formatValue(121));
console.log(formatValue("121"));

const staff_1: Staff = {
  name: "Hari",
  age: 23,
  employeeId: 127831,
  department: "Water",
};
printStaffInfo(staff_1);

const bookWithPubYear: Book = {
  title: "Cracking the Coding Interview",
  author: "Gayle Laakmann McDowell",
  yearPublished: new Date("2015-07-01"),
};
console.log(describeBook(bookWithPubYear));

const bookWithoutPubYear: Book = {
  title: "Atomic Habits",
  author: "James Clear",
};
console.log(describeBook(bookWithoutPubYear));

const rectangle1 = new Rectangle(2, 4);
console.log("Area: ", rectangle1.area());
