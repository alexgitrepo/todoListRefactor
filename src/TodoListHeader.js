import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {
    state = {
        inputValue: '',
        inputErrorStyle: false
    }
    inputOnChange = (e) => {
        this.setState({inputValue: e.target.value})
        this.setState({inputErrorStyle: false})
    }
    addNewTask = (e) => {
        if (this.state.inputValue === '') {
            this.setState({inputErrorStyle: true})
        } else {
            this.props.addNewTask(this.state.inputValue);
            this.setState({inputValue: ""})
            this.setState({inputErrorStyle: false})
        }

    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={this.state.inputErrorStyle ? "inputErrorStyle" : ""} onChange={this.inputOnChange}
                           value={this.state.inputValue} type="text" placeholder="New task name"/>
                    <button onClick={this.addNewTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

