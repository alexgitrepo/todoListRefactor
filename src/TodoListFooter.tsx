import React from 'react';
import './App.css';

interface IProps {
    changeFilterValue:(newFilterValue:string)=>void
    filterValue:string
}
class TodoListFooter extends React.Component<IProps> {
    state = {showMode: true}
    changeShowMode = () => {
        let newShowModeValue = !this.state.showMode
        this.setState({showMode: newShowModeValue})
    }
    render = () => {
        let classForAll = this.props.filterValue === "ALL" ? "filter-active" : ""
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : ""
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : ""

        return (
            <div className="todoList-footer">
                {this.state.showMode && <div>
                    <button onClick={() => {
                        this.props.changeFilterValue("ALL")
                    }} className={classForAll}>All
                    </button>
                    <button onClick={() => {
                        this.props.changeFilterValue("Completed")
                    }} className={classForCompleted}>Completed
                    </button>
                    <button onClick={() => {
                        this.props.changeFilterValue("Active")
                    }} className={classForActive}>Active
                    </button>
                </div>}
                {this.state.showMode && <span onClick={this.changeShowMode}>Hide all</span>}
                {!this.state.showMode && <span onClick={this.changeShowMode}>Show all</span>}

            </div>
        );
    }
}

export default TodoListFooter;

