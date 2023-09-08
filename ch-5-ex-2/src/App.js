import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';

// Exercise 2:
// Create a click counter component. The component should render a button and a 
// div, with text “You have clicked the button 0 times”. When the user clicks on 
// the button the number in the text string should increase accordingly. 
// Implementing this requires the hook useState.


function App() {
  return (
    <div className="App">
     <ClickCounter/>
    </div>
  );
}

export default App;
