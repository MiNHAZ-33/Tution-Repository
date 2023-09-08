import logo from './logo.svg';
import './App.css';
import ButtonColorChange from './ButtonColorChange';

// Exercise 3:
// Create a component with a div element. When the mouse is over the div, change 
// its background color to a different color. When the mouse leaves the div, 
// change it back to the original color.
// Implementing this requires the hook useState.


function App() {
  return (
    <div className="App">
      <ButtonColorChange />
     
    </div>
  );
}

export default App;
