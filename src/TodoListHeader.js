import React from 'react';
import './App.css';
class TodoListHeader extends React.Component {
    state={inputValue:''}
    inputOnChange=(e)=>{
        this.setState({inputValue:e.target.value})
    }
    addNewTask=(e)=>{debugger
        this.props.addNewTask(this.state.inputValue)
        this.setState({inputValue:""})
    }
    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onChange={this.inputOnChange} value={this.state.inputValue} type="text" placeholder="New task name"/>
                    <button onClick={this.addNewTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

