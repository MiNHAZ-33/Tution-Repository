import logo from './logo.svg';
import './App.css';
import InputComponent from './InputComponent';

// Practice useRef hook (https://react.dev/reference/react/useRef). Create a 
// component with an input field and a button. Use the useRef hook to capture 
// the current value of the input field and log it to the console when a button 
// is clicked.


function App() {
  return (
    <div className="App">
     <InputComponent/>
    </div>
  );
}

export default App;
