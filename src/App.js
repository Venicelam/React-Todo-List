import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="TodoList">
      <form>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
      </div>
    );
  }
}

export default App;
