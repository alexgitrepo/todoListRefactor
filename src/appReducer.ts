import {todoListAPI} from "./api";
import {ITask, ITodolist} from "./types";
import {Dispatch} from "react"
import { ThunkDispatch } from "redux-thunk";
import {AppState} from "./redux-store";
const SET_TO_DO_LISTS = "SET_TO_DO_LISTS"
const ADD_TO_DO_LIST = "ADD_TO_DO_LIST"
const DELETE_TO_DO_LIST = "DELETE_TO_DO_LIST"
const ADD_TASK = "ADD_TASK"
const SET_TO_DO_LIST_TASKS = "SET_TO_DO_LIST_TASKS"
const UPDATE_TASK = "UPDATE_TASK"
const DELETE_TASK = "DELETE_TASK"
interface IIinitialState {
    todoLists:Array<ITodolist>
    }


let initialState:IIinitialState = {
    todoLists: [],
}
let reducer = (state = initialState, action:AppReducerAtcionTypes):IIinitialState => {
    switch (action.type) {

        case DELETE_TASK:
            return {
                ...state, todoLists: state.todoLists.map((item:ITodolist) => {

                    if (item._id === action.todolistId) {
                        return {
                            ...item, tasks: item.tasks.filter(task => {
                                return task._id !== action.taskId;
                            })
                        }
                    } else return item
                })

            }

        case UPDATE_TASK:
            return {
                ...state, todoLists: state.todoLists.map((item:ITodolist) => {
                    if (item._id === action.todolistId) {
                        return {
                            ...item, tasks: item.tasks.map(task => {
                                if (task._id === action.taskId) {
                                    return action.task
                                } else return task
                            })
                        }
                    } else return item
                })
            }
        case ADD_TASK:
            return {
                ...state, todoLists: state.todoLists.map((item:ITodolist) => {
                    if (item._id === action.todolistId) {

                        return {...item, tasks: [...item.tasks, action.newTask]}
                    } else return item
                })
            }

        case SET_TO_DO_LIST_TASKS:
            return {
                ...state, todoLists: state.todoLists.map((item:ITodolist) => {
                    if (item._id === action.todolistId) {

                        return {...item, tasks: action.tasks}
                    } else return item
                })
            }

        case  SET_TO_DO_LISTS:

            return {
                ...state, todoLists: action.todolists.map(item => {
                    return {...item, tasks: []}
                })
            }

        case ADD_TO_DO_LIST:
            return {
                ...state, todoLists: [...state.todoLists, action.todolist]
            }

        case DELETE_TO_DO_LIST:

            return {
                ...state, todoLists: state.todoLists.filter((item:ITodolist) => item._id !== action.todolistId)
            }


    }
    return state
}

export const setTodoListsTC = () => async (dispatch:Dispatch<AppActionTypes>) => {
    let response = await todoListAPI.getTodoLists()
    if (response) {
        dispatch(setTodoListsAC(response.data))
    }
}

export const getTasksTC = (todolistId:string) => async (dispatch:ThunkDispatch<AppState,any,AppActionTypes>) => {
    let response = await todoListAPI.getTasks(todolistId)
    if (response) {
        dispatch(setTodoListTasksAC(todolistId, response))
    }
}
export const updateTasksTC = (task:ITask, taskId:string, todoListId:string) => async (dispatch:Dispatch<AppActionTypes>) => {
    let response = await todoListAPI.updateTask(task, taskId, todoListId)
    if (response.data.resultCode === 0) {

        dispatch(updateTaskAC(todoListId, taskId, response.data.item))
    }
}

export const deleteTaskTC = (taskId:string, todoListId:string) => async (dispatch:Dispatch<AppActionTypes>) => {
    let response = await todoListAPI.deleteTask(taskId, todoListId)
    if (response.data.resultCode === 0) {

        dispatch(deleteTaskAC(todoListId, taskId))
    }
}

export const addTodoListTC = (title:string) => async (dispatch:Dispatch<AppActionTypes>) => {
    let response = await todoListAPI.addTodoList(title)
    if (response) {
        dispatch(addTodoListsAC(response.data.item))
    }
}
export const deleteTodoListTC = (todolistId:string) => async (dispatch:Dispatch<AppActionTypes>) => {
    let response = await todoListAPI.deleteTodoList(todolistId)
    if (response) {
        dispatch(deleteTodoListAC(todolistId))
    }
}
export const addTaskTC = (taskTitle:string, todolistId:string) => async (dispatch:Dispatch<AppActionTypes>) => {
    let response = await todoListAPI.addTask(taskTitle, todolistId)
    if (response) {
        dispatch(addTaskAC(todolistId, response.data.item))
    }
}

interface IDeleteTask {
    type: typeof DELETE_TASK
    todolistId: string
    taskId: string
}

interface IUpdateTaskAC {
    type: typeof UPDATE_TASK
    todolistId: string
    taskId: string
    task: ITask
}

interface ISetTodoListTasksAC {
    type: typeof SET_TO_DO_LIST_TASKS
    todolistId: string
    tasks: Array<ITask>
}

interface IAddTodoListsAC {
    type: typeof ADD_TO_DO_LIST
    todolist: ITodolist
}

interface ISetTodoListsAC {
    type: typeof SET_TO_DO_LISTS
    todolists: Array<ITodolist>
}

interface IDeleteTodoListAC {
    type: typeof DELETE_TO_DO_LIST
    todolistId: string
}

interface IAddTaskAC {
    type: typeof ADD_TASK
    todolistId: string
    newTask: ITask
}
type AppReducerAtcionTypes=IDeleteTask|IUpdateTaskAC|ISetTodoListTasksAC|IAddTodoListsAC|ISetTodoListsAC|IDeleteTodoListAC|IAddTaskAC
export type AppActionTypes=AppReducerAtcionTypes

export const deleteTaskAC = (todolistId: string, taskId: string): IDeleteTask => ({
    type: DELETE_TASK,
    todolistId,
    taskId
})
export const updateTaskAC = (todolistId: string, taskId: string, task: ITask): IUpdateTaskAC => ({
    type: UPDATE_TASK,
    todolistId,
    taskId,
    task
})
export const setTodoListTasksAC = (todolistId: string, tasks: Array<ITask>): ISetTodoListTasksAC => ({
    type: SET_TO_DO_LIST_TASKS,
    todolistId,
    tasks
})


export const addTodoListsAC = (todolist: ITodolist): IAddTodoListsAC => ({type: ADD_TO_DO_LIST, todolist})
export const setTodoListsAC = (todolists: Array<ITodolist>): ISetTodoListsAC => ({type: SET_TO_DO_LISTS, todolists})
export const deleteTodoListAC = (todolistId: string): IDeleteTodoListAC => ({type: DELETE_TO_DO_LIST, todolistId})
export const addTaskAC = (todolistId: string, newTask: ITask): IAddTaskAC => ({type: ADD_TASK, todolistId, newTask})


export default reducer

