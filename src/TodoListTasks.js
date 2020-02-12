import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(item => <TodoListTask deleteCurrentTask={this.props.deleteCurrentTask} changeTaskCheckedValue={this.props.changeTaskCheckedValue} changeTaskName={this.props.changeTaskName}
                                                                       onChangeInputValue={this.props.onChangeInputValue}
                                                                       taskId={item.taskId} task={item}
                                                                       todoListId={this.props.todoListId}/>)
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>

        );
    }
}

export default TodoListTasks;

