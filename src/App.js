import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div
          className="bg-teal-100 border-t-4 border-regal-blue rounded rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex justify-center">
            <svg
              className="h-8 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
            <div>
              <p className="font-bold">
                With{' '}
                <a href="https://tailwindcss.com/" className="text-gray-800">
                  Tailwind CSS
                </a>
              </p>
              <p className="text-sm">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
