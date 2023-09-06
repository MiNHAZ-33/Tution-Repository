import logo from "./logo.svg";
import "./App.css";
import CharacterCounter from "./CharacterCounter";

// Exercise 10:
// Modify the “CharacterCounter” so that it accepts two props.
// First prop indicates where the character count information should be printed.
// There should be possibility to command the component to print to console and
// to print to an alert dialog.
// Second prop should indicate how many characters at least there should be
// written in the input field before the character count information is printed
// as a result of the click. For example if value 2 is given, then at least two
// characters must be in the input field before the click to input field has any
// effect.

function App() {
  return (
    <div className="App">
      <CharacterCounter showOutput={"alert"} minimumCharacterCount={2} />
    </div>
  );
}

export default App;
