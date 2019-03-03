import React, { Component } from 'react';
import './App.css'

class RemoveTodo extends React.Component {
    constructor(props) {
        super (props);
        this.listDelete = this.listDelete.bind(this);
    }
    listDelete(){
        this.props.onRemove(this.props.todo)

    }

    render() {
        return (
            <li>
                <div className="todo-list">
                    <p className="todo-name">{ this.props.todo }
                    <div className="delete" onClick={this.listDelete}>x</div>
                    </p>
                   
                </div>
            </li>
        );
    }
}

export default RemoveTodo;