import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    state = {
        tasks: [{type: "checkbox", checked: true, taskName: "CSS", priority: "priority: Looow Yeah"}, {
            type: "checkbox",
            checked: true,
            taskName: "JS",
            priority: "priority: Very high"
        }, {type: "checkbox", checked: true, taskName: "Patterns", priority: "priority: Medium"}],
        filterValue: "ALL"
    }
    addNewTask = (newTaskTextFromInput) => { debugger
        let newTask = {type: "checkbox", checked: true, taskName: newTaskTextFromInput, priority: "priority: Looow Yeah"}
this.setState({...this.state, tasks:[...this.state.tasks,newTask]})
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addNewTask={this.addNewTask}/>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

