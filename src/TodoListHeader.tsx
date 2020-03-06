import React from 'react';
import './App.css';
import ItemInput from "./ItemInput";
import deleteIcon from '../src/assets/img/svg/rubbish.svg'
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
                    <button className="todoList-header__delete-button" onClick={()=>{this.props.deleteTodoList(this.props.todoListId)}}>
                        <img className='todoList-header__delete-button-img' src={deleteIcon} alt=""/></button>
                </div>
                <ItemInput todoListId={this.props.todoListId} placeholder={this.props.placeholder} addItem={this.props.addTask} className="todoList-newTaskForm"/>
            </div>
        );
    }
}

export default TodoListHeader;

