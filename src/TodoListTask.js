import React from 'react';
import './App.css';


class TodoListTask extends React.Component {
    state = {
        editMode: false,
        newTaskName: ""
    }

    EditModeOn = () => {
        this.setState({editMode: true})
    }
    EditModeOff = (e) => {
        if (!this.state.newTaskName){this.setState({editMode: false})
        }
        else {

            // (toDoListId,taskId,newTaskName)
        this.props.changeTaskName(this.props.todoListId, this.props.taskId,this.state.newTaskName)
        this.setState({editMode: false, newTaskName: ""})}

    }
    setNewTaskName = (e) => {
        this.setState({newTaskName: e.target.value})
    }

    render = () => {
        return <div className={`todoList-task ${this.props.task.checked ? "taskChecked" : ""}`}>
            <input onChange={(e) => {
                this.props.changeTaskCheckedValue(this.props.todoListId, this.props.taskId,e.target.checked)
            }} type={this.props.task.type} checked={this.props.task.checked}/>
            {!this.state.editMode &&
            <span onDoubleClick={this.EditModeOn}>{`${this.props.task.taskId} - ${this.props.task.taskName} ${this.props.task.priority}`}</span>}
            {this.state.editMode && <input autoFocus={true} onBlur={this.EditModeOff} onChange={this.setNewTaskName}
                                           value={this.state.newTaskName} type="text"/>}
            <button onClick={()=>{this.props.deleteCurrentTask(this.props.todoListId,this.props.taskId)}}>X</button>
        </div>
    }
}

export default TodoListTask;

