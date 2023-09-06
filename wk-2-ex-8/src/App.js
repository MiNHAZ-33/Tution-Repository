import logo from "./logo.svg";
import "./App.css";
import StringAlert from "./StringAlert";

// Modify the “StringAlerter” from the previous exercise so that the word to
// check from the text input is no longer hardcoded in the component but given
// as a prop to the component.

function App() {
  return (
    <div className="App">
      <StringAlert checkText={"good"} />
    </div>
  );
}

export default App;
