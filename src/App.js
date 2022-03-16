import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Name: </h1>
      <h4>Role: </h4>
    </div>

  )
}

export default App;
