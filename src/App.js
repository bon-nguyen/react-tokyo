import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TodoItems from './components/Todo/TodoItem'
import styled from 'styled-components'

const GREEN = 0;
const ORANGE = 1;
const RED = 2

class App extends Component{
  constructor(){
    super();
    this.state= {
      TodoItems: [
        {title: 'bon', isComplete: true},
        {title: 'beo', isComplete: false},
        {title: 'beo beo', isComplete: true}
      ]
    }
  }
  handleClick(event){
    return ()=> {
      const itemCurrent = this.state.TodoItems.indexOf(event);
      console.log("itemCurrent", itemCurrent);
      if(itemCurrent != -1){
        this.setState(this.state.TodoItems[itemCurrent] = {
          ...this.state.TodoItems[itemCurrent],
          isComplete: !this.state.TodoItems[itemCurrent].isComplete
        })
      }
    }
  }

  render(){
    // not rerender


    return(
      <div className='App'>

        {
          this.state.TodoItems.map((item, index)=> (
            <TodoItems key={index} item={item} onClick ={this.handleClick(item)} />
          ))
        }

      </div>  
    )
  }
}

export default App;

