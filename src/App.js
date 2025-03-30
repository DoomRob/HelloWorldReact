import React, { Component } from 'react';
import './App.css';
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/UserContext";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider value="Robert">
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}

export default App;

