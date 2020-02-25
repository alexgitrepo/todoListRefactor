import React from 'react';
import './App.css';
import ItemInput from "./ItemInput";
interface IProps {
    deleteTodoList: (todolistId: string) => void
    todoListId:string
    placeholder:string
    title:string
    addTask: (taskTitle: string, todolistId: string) => void
}
class TodoListHeader extends React.Component<IProps> {
    render = () => {

        return (
            <div className="todoList-header">
                <div className="todoList-headerWrapper">
                <h3 className="todoList-header__title">{this.props.title}</h3>
                    <button onClick={()=>{this.props.deleteTodoList(this.props.todoListId)}}>X</button>
                </div>
                <ItemInput todoListId={this.props.todoListId} placeholder={this.props.placeholder} addItem={this.props.addTask} className="todoList-newTaskForm"/>
            </div>
        );
    }
}

export default TodoListHeader;

