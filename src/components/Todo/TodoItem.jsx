import React, { Component} from 'react';
import './TodoItem.css';


class TodoItem extends Component{
    render(){
        const {item} = this.props;

        return(
            <div className={`todo-item ${item.isComplete && 'todo-item__complete'}`}>
                <p>{item.title}</p>
            </div>
        )
    }
}

export default TodoItem