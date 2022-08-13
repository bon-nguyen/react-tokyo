import React, { Component} from 'react';
import './TodoItem.css';


class TodoItem extends Component{
    render(){
        const {item, onClick} = this.props;

        return(
            <div onClick={onClick} className={`todo-item ${item.isComplete && 'todo-item__complete'}`}>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoItem