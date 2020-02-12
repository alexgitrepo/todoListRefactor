import React from 'react';
import './App.css';
import ItemInput from "./ItemInput";

class TodoListHeader extends React.Component {
    render = () => {

        return (
            <div className="todoList-header">
                <div className="todoList-headerWrapper">
                <h3 className="todoList-header__title">{this.props.title}</h3>
                    <button onClick={()=>{this.props.deleteCurrentToDoList(this.props.todoListId)}}>X</button>
                </div>
                <ItemInput todoListId={this.props.todoListId} placeholder={this.props.placeholder} addItem={this.props.addNewTask} className="todoList-newTaskForm"/>
            </div>
        );
    }
}

export default TodoListHeader;

