import logo from './logo.svg';
import './App.css';
import GeneratlButton from './GeneratlButton';

// Exercise 5:
// Create a “GeneralButton” component, renders a button and accepts two props. 
// Props are:
// • buttonText, which value should be displayed in the button as text
// • ButtonAction, which should accept a function and the component calls 
// this function, when the button is clicked. 
// Render the GeneralButton in the App.js and declare a function in the App.js, 
// which prints text “Hello from App.js” to console when called. Pass this 
// function as a prop to the GeneralButton. When you click on the GeneralButton 
// on screen, you should see the text printed to the console.


function App() {

  function ButtonAction()
  {
    console.log("Hello from App.js")
  }

  return (
    <div className="App">
      <GeneratlButton buttonText={'Click me'} ButtonAction={ButtonAction}/>
    </div>
  );
}

export default App;
