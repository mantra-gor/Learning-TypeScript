// Generic Stack class implementation
class Stack<T> {
  // Private property to hold stack elements
  private stack: T[] = [];

  // Method to check if the stack is empty
  isEmpty(): boolean {
    // Return true if the stack is empty, false otherwise
    return this.stack.length === 0;
  }

  // Method to add an item to the stack
  push(item: T): void {
    this.stack.push(item);
  }

  // Method to remove and return the top item from the stack
  pop(): T | undefined {
    // Return undefined if the stack is empty
    if (this.isEmpty()) {
      return undefined;
    }
    // Remove and return the top item of the stack
    return this.stack.pop();
  }

  // Method to view the top item of the stack without removing it
  peek(): T | undefined {
    // Return undefined if the stack is empty
    if (this.isEmpty()) {
      return undefined;
    }
    // Return the top item of the stack
    return this.stack[this.stack.length - 1];
  }
}

// Define the interface for a Product
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Create an instance of the Stack class for Product type
const stack1 = new Stack<Product>();

// Add products to the stack
stack1.push({
  id: 101,
  name: "Parle G",
  price: 50,
  category: "Snacks",
});
stack1.push({
  id: 102,
  name: "Marie",
  price: 30,
  category: "Snacks",
});
stack1.push({
  id: 103,
  name: "Kurkure",
  price: 20,
  category: "Snacks",
});

// Log operations on the stack of Product items
console.log("::::Stack of Products::::");

// Pop the top product from the stack and log it
console.log(stack1.pop());

// Peek at the new top product of the stack and log it
console.log(stack1.peek());

// Create an instance of the Stack class for string type
console.log("\n::::Stack of String::::");
const stack2 = new Stack<string>();

// Add strings to the stack
stack2.push("One");
stack2.push("Two");
stack2.push("Three");

// Pop the top string from the stack and log it
console.log(stack2.pop());

// Peek at the new top string of the stack and log it
console.log(stack2.peek());
