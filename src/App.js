import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>External User Information</h1>
      {
        users.map(user => <User name={user.name} email={user.email} phone={user.phone} website={user.website}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div>
      <h2>User Name: {props.name}</h2>
      <h4>User Email: {props.email}</h4>
      <h4>User Website: {props.website}</h4>
      <h4>User Phone: {props.phone}</h4>
    </div>
  )
}


export default App;
