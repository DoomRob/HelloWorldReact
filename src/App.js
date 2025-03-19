import React, { Component } from 'react';
import './App.css';
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ErrorBoundary>
          <Hero heroName="Spriderman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Ironman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Thanos" />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;

