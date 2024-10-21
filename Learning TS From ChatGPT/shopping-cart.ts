interface Product {
  id: number;
  name: string;
  price: number;
}

class ShoppingCart {
  // An array items of type Product[] to store products.
  private items: Product[] = [];

  // Methods addItem(product: Product): void to add a product to the cart.
  addItem(product: Product): void {
    this.items.push(product);
  }

  // Method calculateTotal(): number to calculate and return the total price of all items in the cart.
  calcTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // isEmpty(): boolean: Check if the cart is empty.
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // removeItem(productId: number): void: Remove an item from the cart based on its id.
  removeItem(productId: number): void {
    if (this.isEmpty()) {
      console.log("Cart is empty!");
      return;
    }
    this.items = this.items.filter((item) => item.id !== productId);
  }

  // checkout(): void: Print a message and clear the cart after successful checkout.
  checkout(): void {
    const bill = {
      Item: this.items.map((item) => item.name),
      Price: this.items.map((item) => item.price),
      Total: this.calcTotal(),
    };
    console.log("Thank you for shop with us.");
    console.table(bill);
    // clear the cart
    this.items = [];
  }
}

let cart = new ShoppingCart();

cart.addItem({
  id: 1,
  name: "Apple",
  price: 120,
});

cart.addItem({
  id: 2,
  name: "Banana",
  price: 65,
});

cart.addItem({
  id: 3,
  name: "Berry",
  price: 125,
});

cart.removeItem(2);

cart.checkout();

console.log("price: ", cart.calcTotal());
