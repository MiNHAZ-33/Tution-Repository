import logo from "./logo.svg";
import "./App.css";
import CharacterCounter from "./CharacterCounter";

// Exercise 9:
// Create a component “CharacterCounter”, which renders a single text input. The
// component should create a browser alert window when the text is clicked and
// there is some text in the field. The alert window should print out how many
// characters have been written to the input field.
// For example if word: “Hello” is written to the input field, the alert should
// indicate 5 characters.

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
