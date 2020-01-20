import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(item => <TodoListTask changeTaskName={this.props.changeTaskName} onChangeInputValue={this.props.onChangeInputValue} task={item}/>)
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>

        );
    }
}

export default TodoListTasks;

