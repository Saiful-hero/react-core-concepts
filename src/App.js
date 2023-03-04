import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:'Saiful Islam',
    specialist:'AI',
    duration:30
  }
  var style = {
    color: 'red',
    backgroundColor: 'salmon'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done cd react-core-concept<code>src/App.js</code> and save to reload.
        </p>
        <p style={style}>The award goes to {person.name} for his {person.specialist + ' ' + person.duration} contribution </p>
        
      </header>
    </div>
  );
}

export default App;
