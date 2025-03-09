import React, { Component } from 'react';
import './App.css';
import RefsDemo from "./components/RefsDemo";
import InputFocus from "./components/InputFocus";
import FRParentInput from "./components/FRParentInput";

class App extends Component {
  render() {
    return (
      <div className='App'>
       <FRParentInput />
        {/* <InputFocus /> */}
        {/* <RefsDemo /> */}
      </div>
    )
  }
}

export default App;

