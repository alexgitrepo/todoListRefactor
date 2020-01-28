import React from 'react';
import './App.css';
import ItemInput from "./ItemInput";

class TodoListHeader extends React.Component {
    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">{this.props.title}</h3>
                <ItemInput placeholder={this.props.placeholder} addItem={this.props.addNewTask} className="todoList-newTaskForm"/>
            </div>
        );
    }
}

export default TodoListHeader;

