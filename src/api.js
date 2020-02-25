import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {"API-KEY": "2e11e55a-6317-486e-b332-4118c5f8bf85"},
})


export const todoListAPI = {
    getTodoLists: () => {
        return instance.get('/todo-lists')
    }, getTasks: (todolistId) => {
        return instance.get(`/todo-lists/${todolistId}/tasks`)
    }
    ,
    addTodoList: (title) => {
        return instance.post('/todo-lists', {title: title})
    },
    deleteTodoList: (todolistId) => {
        return instance.delete(`/todo-lists/${todolistId}`)
    },
    addTask: (taskTitle, todolistId) => {
        return instance.post(`/todo-lists/${todolistId}/tasks`, {title: taskTitle})
    },
    updateTask: (task, taskId, todoListId) => {

        return instance.put(`/todo-lists/${todoListId}/tasks/${taskId}`, {...task})
    },
    deleteTask: (taskId, todoListId) => {

        return instance.delete(`/todo-lists/${todoListId}/tasks/${taskId}`)
    }
}