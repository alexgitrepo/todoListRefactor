import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    componentDidMount() {
        let state = localStorage.getItem("todoListState")
        let savedState = JSON.parse(state)
        this.setState({...savedState})
    }

    state = {
        tasks: [],
        filterValue: "ALL"
    }
    taskId = 0
    saveStateToLocalStorage = () => {
        let stateCopy = JSON.stringify(this.state)
        localStorage.setItem("todoListState", stateCopy)
    }
    changeTaskName = (newTaskName, task) => {
        let newTasksArray = this.state.tasks.map(item => {
            if (item === task) {
                return {...item, taskName: newTaskName}
            } else {
                return item
            }
        })
        this.setState({...this.state, tasks: [...newTasksArray]}, this.saveStateToLocalStorage)

    }

    addNewTask = (newTaskTextFromInput) => {
        let newTask = { type: "checkbox",
            checked: false,
            taskName: newTaskTextFromInput,
            priority: "priority: Looow Yeah",
            taskId:++this.taskId
        }
        this.setState({...this.state, tasks: [...this.state.tasks, newTask]}, this.saveStateToLocalStorage)


    }
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
        let filteredTasks = (this.state.filterValue === "ALL") ? this.state.tasks : (this.state.filterValue === "Active") ?
            this.state.tasks.filter(item => item.checked === false) : this.state.filterValue === "Completed" ? this.state.tasks.filter(item => item.checked === true) : ''

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addNewTask={this.addNewTask}/>
                    <TodoListTasks onChangeInputValue={this.onChangeInputValue} changeTaskName={this.changeTaskName}
                                   tasks={filteredTasks}/>
                    <TodoListFooter changeFilterValue={this.changeFilterValue} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

