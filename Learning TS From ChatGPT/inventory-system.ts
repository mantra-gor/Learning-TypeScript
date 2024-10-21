// Define the interface for a Product
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Class to manage store inventory
class StoreInventory {
  // Private property to hold the array of products
  private inventory: Product[] = [];

  // Method to add a new product to the inventory
  addProduct(product: Product): void {
    this.inventory.push(product);
  }

  // Method to remove a product from the inventory based on its ID
  removeProduct(productId: number): void {
    // Filter out the product with the given ID
    this.inventory = this.inventory.filter((item) => item.id !== productId);
  }

  // Method to calculate the total value of all products in the inventory
  getTotalValue(): number {
    // Reduce the array to get the sum of all product prices
    return this.inventory.reduce((acc, item) => acc + item.price, 0);
  }

  // Method to return all products currently in the inventory
  getAllItems(): Product[] {
    // Return a shallow copy of the inventory array
    return this.inventory.map((item) => item);
  }

  // Method to list all products belonging to a specific category
  listProductsByCategory(category: string): Product[] {
    // Filter the inventory by the given category
    return this.inventory.filter((item) => item.category === category);
  }
}

// Instantiate the StoreInventory class to manage products in MyMart
const MyMart = new StoreInventory();

// Add products to the inventory
MyMart.addProduct({
  id: 101,
  name: "Parle G",
  price: 50,
  category: "Snacks",
});
MyMart.addProduct({
  id: 102,
  name: "Marie",
  price: 30,
  category: "Snacks",
});
MyMart.addProduct({
  id: 103,
  name: "Kurkure",
  price: 20,
  category: "Snacks",
});
MyMart.addProduct({
  id: 104,
  name: "Dove",
  price: 25,
  category: "Grocery",
});
MyMart.addProduct({
  id: 105,
  name: "Head&Shoulder",
  price: 60,
  category: "Grocery",
});

// Log all items currently in the inventory
console.log(MyMart.getAllItems());

// Remove a product from the inventory by ID (removing product with id 102)
MyMart.removeProduct(102);

// Log the updated inventory after removal
console.log(MyMart.getAllItems());

// List and log all products in the "Grocery" category
console.log(MyMart.listProductsByCategory("Grocery"));
