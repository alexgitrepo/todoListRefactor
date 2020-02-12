
const ADD_NEW_TODOLIST = 'ADD_NEW_TODOLIST'
const ADD_NEW_TASK = 'ADD_NEW_TASK'
const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME'
const CHANGE_TASK_CHECKED_VALUE = "CHANGE_TASK_CHECKED_VALUE"
const DELETE_CURRENT_TO_DO_LIST = 'DELETE_CURRENT_TO_DO_LIST'
const DELETE_CURRENT_TASK = 'DELETE_CURRENT_TASK'

let initialState = {
    todoLists: [{
        todoLisTitle: 'First To Do List',
        toDoListId: 0,
        currentTaskId: 1,
        tasks: [{type: "checkbox", checked: false, taskName: "Fuckyou", priority: "priority: Looow Yeah", taskId: 1}]
    }, {
        todoLisTitle: 'Second To Do List',
        toDoListId: 1,
        currentTaskId: 1,
        tasks: [{
            type: "checkbox", checked: false, taskName: "Fuckyou", priority: "priority: Looow Yeah", taskId: 1
        }]
    }],
    toDoListId: 1
}
let reducer = (state = initialState, action) => {
        switch (action.type) {
        case ADD_NEW_TODOLIST:
            let newTodoListId = ++state.toDoListId;
            return {
                ...state,
                todoLists: [...state.todoLists, {
                    todoLisTitle: action.title,
                    toDoListId: newTodoListId,
                    currentTaskId: 0,
                    tasks: []
                }]
            }
        case ADD_NEW_TASK:

            return {
                ...state, todoLists: state.todoLists.map(item => {
                    if (action.toDoListId === item.toDoListId) {

                        let newTaskId =item.tasks.length
                        newTaskId++
                        return {
                            ...item,
                            currentTaskId: newTaskId,
                            tasks: [...item.tasks, {
                                type: "checkbox",
                                checked: false,
                                taskName: action.newTask,
                                priority: "priority: Looow Yeah",
                                taskId: newTaskId
                            }]
                        }

                    } else return item
                })
            }
        case CHANGE_TASK_NAME:
            return {
                ...state, todoLists: state.todoLists.map(item => {
                    if (action.toDoListId === item.toDoListId) {
                        return {
                            ...item,
                            tasks: [...item.tasks.map(item => {
                                if (action.taskId === item.taskId) {
                                    return {...item, taskName: action.newTaskName}
                                } else return item
                            })]
                        }
                    } else return item
                })
            }

        case CHANGE_TASK_CHECKED_VALUE:
            return {
                ...state, todoLists: state.todoLists.map(item => {
                    if (action.toDoListId === item.toDoListId) {
                        return {
                            ...item,
                            tasks: [...item.tasks.map(item => {
                                if (action.taskId === item.taskId) {
                                    return {...item, checked: action.newTaskCheckedValue}
                                } else return item
                            })]
                        }
                    } else return item
                })
            }

        case DELETE_CURRENT_TO_DO_LIST:
            return {
                ...state, todoLists: state.todoLists.filter(item => {
                    return action.toDoListId !== item.toDoListId
                })
            }
        case DELETE_CURRENT_TASK:

            return {
                ...state, todoLists: state.todoLists.map(item => {
                        if (action.toDoListId === item.toDoListId) {
                            let newTaskId=--item.currentTaskId
                            return {
                                ...item,currentTaskId:newTaskId,
                                tasks: [...item.tasks.filter(item => {
                                        return action.taskId !== item.taskId
                                    }
                                )
                                ]
                            }
                        } else
                            return item
                    }
                )
            }
    }
    return state
}
export const addNewToDoList = (title) => {
    return {type: ADD_NEW_TODOLIST, title}
}
export const addNewTask = (newTask, toDoListId) => ({type: ADD_NEW_TASK, newTask, toDoListId})
export const changeTaskName = (toDoListId, taskId, newTaskName) => ({
    type: CHANGE_TASK_NAME,
    toDoListId,
    taskId,
    newTaskName
})
export const changeTaskCheckedValue = (toDoListId, taskId, newTaskCheckedValue) => ({
    type: CHANGE_TASK_CHECKED_VALUE,
    toDoListId,
    taskId,
    newTaskCheckedValue
})

export const deleteCurrentToDoList = (toDoListId) => ({
    type: DELETE_CURRENT_TO_DO_LIST,
    toDoListId
})
export const deleteCurrentTask = (toDoListId, taskId) => ({
    type: DELETE_CURRENT_TASK,
    toDoListId,
    taskId,

})
export default reducer

