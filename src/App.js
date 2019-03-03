import React, { Component } from 'react';
import './App.css';
import RemoveTodo from './RemoveTodo'
import NewTodo from './New.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders:['Buy groceries', 'Finish group project'],
    };
    this.onAdd = this.onAdd.bind(this);;
    this.onRemove = this.onRemove.bind(this);
  }
  onAdd(todo) {
    const newTodos = this.state.reminders.slice();
    newTodos.push(todo);
    this.setState({
      reminders: newTodos,
    });
  }
  onRemove(todo) {
    const newTodos = this.state.reminders.filter((item) => {
      return todo !== item
    });
    this.setState({
      reminders: newTodos,
    });
  }


  render() {
    let { reminders} = this.state;
    reminders = reminders.map((todo) => {
      return (
        <RemoveTodo todo={todo} key={todo.toString()} onRemove={this.onRemove}/>
      );
    });
    return (
      <div className="App">
      <NewTodo onAdd={this.onAdd}/>
        <ul>{ reminders }</ul>
      </div>
    );
  }
}

export default App;
