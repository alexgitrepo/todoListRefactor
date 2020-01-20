import React from 'react';
import './App.css';

// inputType={item.type} checked={item.checked}
// taskName={item.taskName}


class TodoListTask extends React.Component {
    render = () => {debugger
        return <div className="todoList-task">
            <input type={this.props.inputType} checked={this.props.checked}/>
            <span>{`${this.props.taskName} ${this.props.priority}`}</span>
        </div>
    }
}

export default TodoListTask;

