import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoList from "./TodoList";
import ItemInput from "./ItemInput";

class App extends React.Component {
    componentDidMount() {
        let state = localStorage.getItem("AppState")
        let savedState = JSON.parse(state)
        this.setState({...savedState})
    }

    state = {
        todoLists: [],
        toDoListId: 0
    }

    saveStateToLocalStorage = () => {
        let stateCopy = JSON.stringify(this.state)
        localStorage.setItem("AppState", stateCopy)
    }
    addNewToDoList = (todoListTitle) => {
        let newTodoListId = this.state.toDoListId++
        const newTodoList = {todoLisTitle: todoListTitle, toDoListId:newTodoListId}
        this.setState({
            ...this.state,
            todoLists: [...this.state.todoLists, newTodoList],
            todoListId: newTodoListId
        }, this.saveStateToLocalStorage)

    }

    render = () => {
        let todoLists = this.state.todoLists.map((item) => <TodoList title={item.todoLisTitle} placeholder={"Add new task"}
                                                                     todoListId={item.toDoListId}/>)
        return (
            <div className="App">
                <ItemInput addItem={this.addNewToDoList} placeholder={"New todolist name"}/>
                <div className="todoLists">
                    {todoLists}
                </div>
            </div>
        );
    }
}

export default App;

