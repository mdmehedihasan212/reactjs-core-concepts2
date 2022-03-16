import logo from './logo.svg';
import './App.css';

function App() {
  const instruments = [
    { name: 'Computer', price: '35000' },
    { name: 'Mobile', price: '25000' },
    { name: 'Head Phone', price: '1000' },
    { name: 'Sound Box', price: '800' }
  ]
  return (
    <div className="App">
      {
        instruments.map(instrument => <Person name={instrument.name} price={instrument.price}></Person>)
      }
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>Name: {props.name}</h1>
      <h4>Price: {props.price}</h4>
    </div>

  )
}


export default App;
