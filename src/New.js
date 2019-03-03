import React, { Component } from 'react';
import './App.css'

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.listSubmit = this.listSubmit.bind(this);
    }
    listSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.input.value);
    }
    render() {
        return (
            <form className="reminder" onSubmit={this.listSubmit}>
                <input type="text" name="reminder" id="reminder" placeholder="Type a reminder here..." ref={(input) => this.input = input} required />
                <input type="submit" name="add" value="Add" id="submit"></input>
            </form>
        );
    }

}
export default NewTodo;