export interface ITodolist {
    id: string
    title: string
    addedDate: string
    order: number
    tasks: Array<ITask>
}



export interface ITask {
    id: string
    title: string
    description: string |null
    completed: boolean
    todoListId: string|null
    order: number|null
    status: number|null
    priority: number|null
    startDate: string|null
    deadline: string|null
    addedDate: string|null
}