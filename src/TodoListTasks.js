import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(item => <TodoListTask inputType={item.type} checked={item.checked} taskName={item.taskName} priority={item.priority}/>)
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>

        );
    }
}

export default TodoListTasks;

