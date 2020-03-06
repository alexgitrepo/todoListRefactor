import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {ITask} from "./types";
interface IProps {
    deleteTodoList: (todolistId: string) => void
    addTask: (taskTitle: string, todolistId: string) => void
    getTasks: (todolistId: string) => void
    updateTask: (task: ITask, taskId: string, todoListId: string) => void
    deleteTask: (taskId: string, todoListId: string) => void
    tasks: Array<ITask>
    title: string
    placeholder: string
    todoListId: string

}

class TodoList extends React.Component<IProps> {
    componentDidMount() {
        this.props.getTasks(this.props.todoListId)
    }

    state = {tasks: [], filterValue: "ALL"}
    changeFilterValue = (newFilterValue: string) => {
        this.setState({...this.state, filterValue: newFilterValue}
        )
    }

    render = () => {
        let filteredTasks = (this.state.filterValue === "ALL") ? this.props.tasks : (this.state.filterValue === "Active") ?
            this.props.tasks.filter((item: ITask) => item.status !== 2) : this.state.filterValue === "Completed" ? this.props.tasks.filter((item: ITask) => item.status === 2) : []
        return (
            <div className="todoList">
                <TodoListHeader deleteTodoList={this.props.deleteTodoList} todoListId={this.props.todoListId}
                                placeholder={this.props.placeholder} title={this.props.title}
                                addTask={this.props.addTask}/>
                <div className="todoList__wrapper">
                    <TodoListTasks deleteTask={this.props.deleteTask} updateTask={this.props.updateTask}
                                   todoListId={this.props.todoListId}
                                   tasks={filteredTasks}/>
                    <TodoListFooter changeFilterValue={this.changeFilterValue} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default TodoList;

