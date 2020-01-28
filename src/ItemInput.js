import React from 'react';
import './App.css';

class ItemInput extends React.Component {
    state = {
        inputValue: '',
        inputErrorStyle: false
    }
    inputOnChange = (e) => {
        this.setState({inputValue: e.target.value})
        this.setState({inputErrorStyle: false})
    }
    addNewItem = (e) => {
        if (this.state.inputValue === '') {
            this.setState({inputErrorStyle: true})
        } else {
            this.props.addItem(this.state.inputValue);
            this.setState({inputValue: ""})
            this.setState({inputErrorStyle: false})
        }

    }

    render = () => {
        return (<div className="todoList-newTaskForm">
                <input className={this.state.inputErrorStyle ? "inputErrorStyle" : ""} onChange={this.inputOnChange}
                       value={this.state.inputValue} type="text" placeholder={this.props.placeholder}/>
                <button onClick={this.addNewItem}>Add</button>
            </div>

        );
    }
}

export default ItemInput;

