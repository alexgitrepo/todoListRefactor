import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    state = {
        tasks: [{type: "checkbox", checked: true, taskName: "CSS",priority:"priority: Looow Yeah"}, {
            type: "checkbox",
            checked: true,
            taskName: "JS",
            priority:"priority: Very high"
        }, {type: "checkbox", checked: true, taskName: "Patterns",priority:"priority: Medium"}],
        filterValue:"ALL"
    }
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

