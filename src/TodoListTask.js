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
        this.props.changeTaskName(this.state.newTaskName, this.props.task)
        this.setState({editMode: false, newTaskName: ""})}

    }
    setNewTaskName = (e) => {
        this.setState({newTaskName: e.target.value})
    }

    render = () => {
        return <div className={`todoList-task ${this.props.task.checked ? "taskChecked" : ""}`}>
            <input onChange={(e) => {
                this.props.onChangeInputValue(e.target.checked, this.props.task)
            }} type={this.props.task.type} checked={this.props.task.checked}/>
            {!this.state.editMode &&
            <span onDoubleClick={this.EditModeOn}>{`${this.props.task.taskId} - ${this.props.task.taskName} ${this.props.task.priority}`}</span>}
            {this.state.editMode && <input autoFocus={true} onBlur={this.EditModeOff} onChange={this.setNewTaskName}
                                           value={this.state.newTaskName} type="text"/>}
        </div>
    }
}

export default TodoListTask;

