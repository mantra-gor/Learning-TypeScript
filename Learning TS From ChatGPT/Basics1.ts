//? Exercise : Functions

//** 1) Write a function `multiply` that takes two numbers as arguments and returns their product.

export function multiply(a: number, b: number): number {
  return a * b;
}

//** 2) Write a function `greet` that takes a `name` (string) and returns a greeting message (string).

export function greet(name: string): string {
  return `Hello ${name}, Good Morning, Hope you are doing well!`;
}

//? Exercise : Objects and Type Aliases

//** 3) Define a type alias `Car` with properties `make` (string), `model` (string), and `year` (number).

export type Car = {
  make: string;
  model: string;
  year: number;
};

//? Exercise : Union Types

//** 4) Create a function formatValue that accepts either a string or a number as an argument and returns a formatted string. If the input is a number, it should return the number as a string with two decimal places. If the input is a string, it should return the string in uppercase.

export function formatValue(val: string | number) {
  if (typeof val === "string") {
    return Number(val);
  } else {
    return String(val);
  }
}

//? Exercise : Intersection Types

//** 5) Define two types: `Person` with properties `name` and `age`, and `Employee` with properties `employeeId` and `department`.
//** Create an intersection type `Staff` that combines `Person` and `Employee`.
//** Write a function `printStaffInfo` that takes a `Staff` type argument and prints out their name, age, employee ID, and department.

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

export type Staff = Person & Employee;

export function printStaffInfo(staff: Staff) {
  console.log("\n:::STAFF INFO:::");
  console.log("Name: ", staff.name);
  console.log("Age: ", staff.age);
  console.log("Employee Id", staff.employeeId);
  console.log("Department: ", staff.department);
}

//? Exercise : Optional Properties

//** Define an interface `Book` with properties `title`, `author`, and an optional property `yearPublished`.
//** Create a function describeBook that takes a Book object and returns a description string. If yearPublished is provided, include it in the description; otherwise, omit it.

export interface Book {
  title: string;
  author: string;
  yearPublished?: Date;
}

export function describeBook(book: Book) {
  console.log("\n:::: Book Description ::::");

  if (book.yearPublished) {
    return `${book.title} by ${
      book.author
    } (${book.yearPublished.getFullYear()}) is a significant work that continues to engage readers. Published in YearPublished, it showcases Author's unique voice and contribution to literature.`;
  } else {
    return `${book.title} by ${book.author} is a remarkable work that showcases ${book.author}'s distinctive voice. It remains a key piece of literature, captivating readers across genres.`;
  }
}

//? Exercise : Implementing an Interface
//** Define an interface `Shape` with a method `area` that returns a number.
//** Create a class `Rectangle` that implements the `Shape` interface, with properties `width` and `height`, and implements the `area` method.

interface Shape {
  area(): number;
}

export class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    (this.width = width), (this.height = height);
  }

  area(): number {
    return this.height * this.width;
  }
}
