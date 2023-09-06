import logo from "./logo.svg";
import "./App.css";
import ContactItem from "./ContactItem";

// Exercise 3: Create a new React component to represent a person in a contact
// list, the component name is ContactItem. The person item should look roughly
// like in the UI wireframe below. The “Name” should be with big bold letters
// and “address” with smaller letters. Add some whitespace padding and borders
// for the ContactItem. Use the component to render multiple contact list items
// below each other in the App root component. Put the styling to the component
// so that it is not global styling, but component based. The component should
// accept user name and address as props.

function App() {
  return (
    <>
      <ContactItem name={"Minhaz"} address={"Mujahid Club, Pabna"} />
      <ContactItem name={"Shuvo"} address={"Bangla Clinic, Pabna"} />
      <ContactItem name={"Bashar"} address={"Terminal, Pabna"} />
    </>
  );
}

export default App;
