import logo from './logo.svg';
import './App.css';
import KeyPressComponent from './KeyPressComponent';

// Exercise 5:
// Create a component with a div element. When a specific key (e.g., "Enter" 
// key) is pressed, update the text content of the div to show a message 
// indicating that the key was pressed.
// Implementing this requires the hook useState.


function App() {
  return (
    <div className="App">
      <KeyPressComponent/>
    </div>
  );
}

export default App;
