import logo from "./logo.svg";
import "./App.css";
import TextRenderer from "./TextRenderer";

// Create a component, which renders an text input field, an empty div and a
// button. The component should work so that when the user clicks on the button,
// the component renders to the div the text input content. For example, if the
// user writes “Test” to the text input and clicks the button, the text “Test”
// should be displayed in the div.
// Implementing this requires the hook useState.

function App() {
  return (
    <div className="App">
      <TextRenderer />
    </div>
  );
}

export default App;
