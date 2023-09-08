import logo from './logo.svg';
import './App.css';
import FocusInput from './FocusInput';

// Exercise 8: 
// Practice useRef hook. Create a component, which renders an text input and a 
// button. When the button is clicked the text input field should be focused. 
// Once you have declared the ref to the input element you can focus the input 
// element with inputRef.current.focus();

function App() {
  return (
    <div className="App">
     <FocusInput/>
    </div>
  );
}

export default App;
