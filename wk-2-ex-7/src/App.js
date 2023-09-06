import logo from "./logo.svg";
import "./App.css";
import StringAlert from "./StringAlert";

// Exercise 7:
// Create a component called “StringAlerter”, which renders a single text and
// uses onChange event handler to react to the text content written in the
// field. The component should present an browser alert dialog if the user has
// written the word “horse” to the text field.
// For example here are some situations as examples. First word in quotations
// before the comma is the written word, second word after the comma is the
// outcome.
// “cat ate a mouse”, no alert
// “brown horses are nice”, alert
// “hoorse is an typo”, no alert
// “horse eats grass”, alert

function App() {
  return (
    <div className="App">
      <StringAlert />
    </div>
  );
}

export default App;
