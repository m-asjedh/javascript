// class = (ES6 feature) provides a more structred and cleaner way tot work with objects compared to tradional constructor functions
//          ex. static keyword , encapsulation and inheritance we muse the class most

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProducts() {
    console.log(`${this.name} and the price is Rs.${this.price} `);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

product1 = new Product("Shirts", 2000);
product2 = new Product("Pants", 3000);
product3 = new Product("Shoes", 5000);

product1.displayProducts();

const tax = 0.5;

const total = product1.calculateTotal(tax);
console.log(`Toal price with tax is ${total.toFixed(2)}`);
