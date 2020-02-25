import React from 'react';
import './App.css';
import ItemInput from "./ItemInput";
import {connect} from "react-redux";
import {
    addTaskTC,
    addTodoListTC, AppActionTypes,
    deleteTaskTC,
    deleteTodoListTC,
    getTasksTC,
    setTodoListsTC,
    updateTasksTC,
} from "./appReducer";
import {AppState} from "./redux-store";
import {ITask, ITodolist} from "./types";
import { ThunkDispatch } from 'redux-thunk';
import TodoList from "./TodoList";

class App extends React.Component<IMapState&IMapDispatch> {
    componentDidMount() {
        this.props.setTodoLists()

    }

    render = () => {
        let todoLists = this.props.todoLists.map((item:ITodolist) => <TodoList
            deleteTask={this.props.deleteTask}
            deleteTodoList={this.props.deleteTodoList}
            addTask={this.props.addTask}
            getTasks={this.props.getTasks}
            updateTask={this.props.updateTask}
            tasks={item.tasks} title={item.title}
            placeholder={"Add new task"}
            todoListId={item.id}/>)
        return (
            <div className="App">
                <ItemInput addItem={this.props.addTodoList} placeholder={"New todolist name"}/>
                <div className="todoLists">
                    {todoLists}
                </div>
            </div>
        );
    }
}
interface IMapState {
    todoLists:Array<ITodolist>
}

let mapStateToProps = (state:AppState):IMapState => {
    return {
        todoLists: state.todoLists
    }
}
interface IMapDispatch {
    setTodoLists:()=>void
    addTodoList:(title:string)=>void
    deleteTodoList:(todolistId:string)=>void
    addTask:(taskTitle:string,todolistId:string)=>void
    getTasks: (todolistId:string) =>void
    updateTask:(task:ITask, taskId:string, todoListId:string)=>void
    deleteTask:(taskId:string, todoListId:string)=>void
}
let mapDispatchToProps = (dispatch:ThunkDispatch<any,any,AppActionTypes>):IMapDispatch => {
    return {
        setTodoLists: () => {
            dispatch(setTodoListsTC())
        },
        addTodoList: (title:string) => {
            dispatch(addTodoListTC(title))
        },
        deleteTodoList: (todolistId:string) => {
            dispatch(deleteTodoListTC(todolistId))
        },
        addTask: (taskTitle:string, todolistId:string) => {
            dispatch(addTaskTC(taskTitle, todolistId))
        },
        getTasks: (todolistId:string) => {
            dispatch(getTasksTC(todolistId))
        },
        updateTask: (task:ITask, taskId:string, todoListId:string) => {
            dispatch(updateTasksTC(task, taskId, todoListId))
        },
        deleteTask: (taskId:string, todoListId:string) => {
            dispatch(deleteTaskTC(taskId, todoListId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


