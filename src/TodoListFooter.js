import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    render = () => {
        let classForAll=this.props.filterValue==="ALL"?"filter-active":""
        let classForCompleted=this.props.filterValue==="Completed"?"filter-active":""
        let classForActive=this.props.filterValue==="Active"?"filter-active":""



        return (
            <div className="todoList-footer">
                <button onClick={()=>{this.props.changeFilterValue("ALL")}} className={classForAll}>All</button>
                <button onClick={()=>{this.props.changeFilterValue("Completed")}} className={classForCompleted}>Completed</button>
                <button onClick={()=>{this.props.changeFilterValue("Active")}} className={classForActive}>Active</button>
            </div>
        );
    }
}

export default TodoListFooter;

