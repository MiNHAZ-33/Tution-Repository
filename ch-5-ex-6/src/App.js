import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./FormComponent";

// Exercise 6:
// Create a component, which renders a form with three fields – first name,
// family name and email address. In addition the component should render a
// button with text “Save”. When the user clicks on the button, the component
// should display text below the button in the format “Saved <firstname>
// <familyname> (<email>)”. For example “Saved John Doe (john.doe@email.com)”.
// Implementing this requires the hook useState.

function App() {
  return (
    <div className="App">
      <FormComponent />
    </div>
  );
}

export default App;
