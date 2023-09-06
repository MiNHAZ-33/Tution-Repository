import logo from "./logo.svg";
import "./App.css";
import ShoppingCart from "./ShoppingCart";

// Exercise 5: Your objective is to create a representation of e-commerce
// application shopping cart. The shopping cart should include four example
// products. Each product should have a name, quantity in the cart and total
// price. You can decide how to represent the products in the cart. The react
// code should be implemented so that you have one component “ShoppingCart”,
// which then renders the individual products in the cart as separate
// components. Render the shopping list in the App.js. The shopping list
// contents should be provided to the shopping cart component via props.

function App() {
  let cartItems = [
    { name: "Cake", quantity: 2, totalPrice: 50 },
    { name: "Milk", quantity: 5, totalPrice: 20 },
    { name: "Juice", quantity: 10, totalPrice: 100 },
    { name: "Fish", quantity: 1, totalPrice: 80 },
  ];

  return (
    <>
      <ShoppingCart cartItems={cartItems} />
    </>
  );
}

export default App;
