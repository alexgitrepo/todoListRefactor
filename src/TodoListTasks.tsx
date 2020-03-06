import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import {ITask} from "./types";
interface IProps {
    updateTask: (task: ITask, taskId: string, todoListId: string) => void
    deleteTask: (taskId: string, todoListId: string) => void
    todoListId:string
    tasks:Array<ITask>
}



class TodoListTasks extends React.Component<IProps> {
    render = () => {
        let {tasks = []} = this.props
        let tasksElements = tasks.map((item:ITask) => <TodoListTask deleteTask={this.props.deleteTask}
                                                            updateTask={this.props.updateTask}
                                                            // onChangeInputValue={this.props.onChangeInputValue}
                                                            taskId={item._id} task={item}
                                                            todoListId={this.props.todoListId}/>)
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>

        );
    }
}

export default TodoListTasks;

