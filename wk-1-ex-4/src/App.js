import logo from "./logo.svg";
import "./App.css";
import ContactList from "./ContactList";

// Exercise 4: Create a new component to represent a contact list, which can
// have multiple contact list items in it. You should create a single
// “ContactList” component, which renders multiple “ContactItem” components.
// Render the “ContactList” component in the App.js. The “ContactList” component
// should use props to receive the names and addresses of the persons to render.

function App() {
  let contactlist = [
    { name: "Minhaz", address: "Pabna" },
    { name: "Arif", address: "Khulna" },
    { name: "Arif", address: "Khulna" },
  ];

  return (
    <>
      <ContactList contactlist={contactlist} />
    </>
  );
}

export default App;
