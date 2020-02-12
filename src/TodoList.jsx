import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class TodoList extends React.Component {
state={tasks:[],filterValue:"ALL"}
        changeFilterValue = (newFilterValue) => {
        this.setState({...this.state, filterValue: newFilterValue}, this.saveStateToLocalStorage
        )


    }
    onChangeInputValue = (newCheckInputValue, currentTask) => {
        let newTasksArray = this.state.tasks.map(item => {
            if (item !== currentTask) {
                return item
            } else {
                return {...item, checked: newCheckInputValue}
            }
        })
        this.setState({...this.state, tasks: [...newTasksArray]}, this.saveStateToLocalStorage)
    }


    render = () => {
        let filteredTasks = (this.state.filterValue === "ALL") ? this.props.tasks : (this.state.filterValue === "Active") ?
            this.props.tasks.filter(item => item.checked === false) : this.state.filterValue === "Completed" ? this.props.tasks.filter(item => item.checked === true) : ''

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader deleteCurrentToDoList={this.props.deleteCurrentToDoList} todoListId={this.props.todoListId} placeholder={this.props.placeholder} title={this.props.title} addNewTask={this.props.addNewTask}/>
                    <TodoListTasks deleteCurrentTask={this.props.deleteCurrentTask} changeTaskCheckedValue={this.props.changeTaskCheckedValue} todoListId={this.props.todoListId} changeTaskName={this.props.changeTaskName} onChangeInputValue={this.onChangeInputValue}
                                   tasks={filteredTasks}/>
                    <TodoListFooter  changeFilterValue={this.changeFilterValue} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default TodoList;

