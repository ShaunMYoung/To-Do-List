import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form action="list.js">
          <input type="text" name="reminder" id="reminder" placeholder="Type a reminder here..." required=""></input>
          <input type="submit" name="add" value="Add" id="submit"></input>
        </form>
        <ul class="list">
          <li>Buy groceries</li>
          <li>Finish group project</li>
        </ul>
      </div>
    );
  }
}

export default App;
