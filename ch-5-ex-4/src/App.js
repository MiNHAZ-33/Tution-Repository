import logo from './logo.svg';
import './App.css';
import VisibleComponent from './VisibleComponent';

// Exercise 4:
// Create a component with a button and a paragraph. Initially, the paragraph 
// should be hidden. When the button is clicked, toggle the visibility of the 
// paragraph.
// Implementing this requires the hook useState.

function App() {
  return (
    <div className="App">
     <VisibleComponent/>
    </div>
  );
}

export default App;
