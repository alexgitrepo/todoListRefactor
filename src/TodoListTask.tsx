import './App.css';
import * as React from "react";
import deleteIcon from '../src/assets/img/svg/rubbish.svg'

interface IState {
    editModeTask: boolean,
    editModePriority:boolean,
    newTaskName: string,
    newPriority:string
}
interface IProps {
    deleteTask:(taskId:string, todoListId:string)=> void
    updateTask:(task:any, taskId:string, todoListId:string)=> void
    taskId:string
    todoListId:string
    task:any

}
class TodoListTask extends React.Component<IProps,IState> {
    state = {
        editModeTask: false,
        editModePriority:false,
        newTaskName: "",
        newPriority:""
    }
    EditModeOn = () => {
        this.setState({editModeTask: true})
    }
    EditModeTaskPriorityOn= () => {
        this.setState({editModePriority: true})
    }
    newCheckedValue=(e:any)=>{
        let newCheckedValue=e.currentTarget.checked
        let status =(newCheckedValue===true)? 2 :0
        this.props.updateTask({
            ...this.props.task,
            status: status
        }, this.props.taskId, this.props.todoListId)
    }


    EditModeOff = (e:any) => {
        if (!this.state.newTaskName) {
            this.setState({editModeTask: false})
        } else {
            this.props.updateTask({
                ...this.props.task,
                title: this.state.newTaskName
            }, this.props.taskId, this.props.todoListId)
            this.setState({editModeTask: false, newTaskName: ""})
        }
    }

    EditModeTaskPriorityOff = (e:any) => {
        let newPriority=+this.state.newPriority
        if (!this.state.newPriority) {
            this.setState({editModePriority: false})
        } else {
            this.props.updateTask({
                ...this.props.task,
                priority: newPriority
            }, this.props.taskId, this.props.todoListId)
            this.setState({editModePriority: false, newPriority: ""})
        }
    }

    setNewTaskName = (e:any) => {
        this.setState({newTaskName: e.target.value})
    }
    setNewPriority = (e:any) => {
        this.setState({newPriority: e.target.value})
    }
    render = () => {
        return <div className={`todoList-task ${this.props.task.status===2 ? "taskChecked" : ""}`}>
            <input onChange={(e) => {this.newCheckedValue(e)}} type="checkbox" checked={(this.props.task.status === 2) ? true : false}/>

            <span>{`${this.props.task.order}`}</span>
            {!this.state.editModeTask && <span
                onDoubleClick={this.EditModeOn}>{`${this.props.task.title}` }</span>}
            {this.state.editModeTask && <input placeholder="Enter new title" autoFocus={true} onBlur={this.EditModeOff} onChange={this.setNewTaskName}
                                               value={this.state.newTaskName} type="text"/>}
            {!this.state.editModePriority &&
            <span
                onDoubleClick={this.EditModeTaskPriorityOn}>{`  task priority: ${this.props.task.priority}`}</span>}
            {this.state.editModePriority && <input placeholder="Enter new priority value" autoFocus={true} onBlur={this.EditModeTaskPriorityOff} onChange={this.setNewPriority}
                                               value={this.state.newPriority} type="text"/>}

            <button onClick={() => {this.props.deleteTask(this.props.taskId,this.props.todoListId)
            }}><img className='todoList-header__delete-button-img' src={deleteIcon} alt=""/>
            </button>
        </div>
    }
}

export default TodoListTask;

