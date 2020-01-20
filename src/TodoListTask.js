import React from 'react';
import './App.css';

// inputType={item.type} checked={item.checked}
// taskName={item.taskName}


class TodoListTask extends React.Component {
    render = () => {
        return <div className="todoList-task">
            <input onChange={(e)=>{this.props.onChangeInputValue(e.target.checked,this.props.task)}}  type={this.props.task.type} checked={this.props.task.checked}/>
            <span>{`${this.props.task.taskName} ${this.props.task.priority}`}</span>
        </div>
    }
}

export default TodoListTask;

