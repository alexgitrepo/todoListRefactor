import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    state = {
        tasks: [{type: "checkbox", checked: false, taskName: "CSS", priority: "priority: Looow Yeah"}, {
            type: "checkbox",
            checked: true,
            taskName: "JS",
            priority: "priority: Very high"
        }, {type: "checkbox", checked: true, taskName: "Patterns", priority: "priority: Medium"}],
        filterValue: "ALL"
    }
    addNewTask = (newTaskTextFromInput) => {
        debugger
        let newTask = {
            type: "checkbox",
            checked: true,
            taskName: newTaskTextFromInput,
            priority: "priority: Looow Yeah"
        }
        this.setState({...this.state, tasks: [...this.state.tasks, newTask]})
    }
    changeFilterValue = (newFilterValue) => {
        debugger
        this.setState({...this.state, filterValue: newFilterValue})

    }
    onChangeInputValue=(newCheckInputValue,currentTask)=>{
        let newTasksArray=this.state.tasks.map(item=>{
            if (item!==currentTask){return item} else {
                return {...item,checked:newCheckInputValue}
            }
        })
        this.setState({...this.state,tasks:[...newTasksArray]})
}


    render = () => {
        let filteredTasks = (this.state.filterValue === "ALL") ? this.state.tasks : (this.state.filterValue === "Active") ?
            this.state.tasks.filter(item => item.checked === false) : this.state.filterValue === "Completed" ? this.state.tasks.filter(item => item.checked === true) : ''

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addNewTask={this.addNewTask}/>
                    <TodoListTasks onChangeInputValue={this.onChangeInputValue} tasks={filteredTasks}/>
                    <TodoListFooter changeFilterValue={this.changeFilterValue} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

