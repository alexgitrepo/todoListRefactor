import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import ItemInput from "./ItemInput";
import {connect} from "react-redux";
import {
    addNewTask,
    addNewToDoList,
    changeTaskCheckedValue,
    changeTaskName,
    deleteCurrentTask,
    deleteCurrentToDoList
} from "./appReducer";
import * as axios from "axios";

class App extends React.Component {
    componentDidMount() {
        this.restoreState()

    }

    restoreState = async () => {
        let response = await axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', {
            withCredentials: true,
            headers: {"API-KEY": "2e11e55a-6317-486e-b332-4118c5f8bf85"}
        })
        if (response) {debugger
            console.log(response.data)
        }
    }

    render = () => {

        let todoLists = this.props.todoLists.map((item) => <TodoList changeTaskName={this.props.changeTaskName}
                                                                     deleteCurrentTask={this.props.deleteCurrentTask}
                                                                     addNewTask={this.props.addNewTask}
                                                                     tasks={item.tasks} title={item.todoLisTitle}
                                                                     placeholder={"Add new task"}
                                                                     deleteCurrentToDoList={this.props.deleteCurrentToDoList}
                                                                     changeTaskCheckedValue={this.props.changeTaskCheckedValue}
                                                                     todoListId={item.toDoListId}/>)
        return (
            <div className="App">
                <ItemInput addItem={this.props.addNewToDoList} placeholder={"New todolist name"}/>
                <div className="todoLists">
                    {todoLists}
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        todoLists: state.todoLists
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewToDoList: (title) => {
            dispatch(addNewToDoList(title))
        },
        addNewTask: (newTask, toDoListId) => {
            dispatch(addNewTask(newTask, toDoListId))
        },
        changeTaskName: (toDoListId, taskId, newTaskName) => {
            dispatch(changeTaskName(toDoListId, taskId, newTaskName))
        }, changeTaskCheckedValue: (toDoListId, taskId, newTaskCheckedValue) => {
            dispatch(changeTaskCheckedValue(toDoListId, taskId, newTaskCheckedValue))
        },
        deleteCurrentToDoList: (toDoListId) => {
            dispatch(deleteCurrentToDoList(toDoListId))
        },
        deleteCurrentTask: (toDoListId, taskId) => {
            dispatch(deleteCurrentTask(toDoListId, taskId))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


