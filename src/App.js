import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TodoItems from './components/Todo/TodoItem'

class App extends Component{
  constructor(){
    super();
    this.todoItems = [
      {
        title: 'bimbim',
        isComplete: true,
      }, 
      {
        title: 'da bong',
        isComplete: false,
      },
      {
        title: "xxem phim",
        isComplete: false, 
      }
    ]
  }

  render(){
    return(
      <div className='App'>
          {
            this.todoItems.length > 0 &&  this.todoItems.map((item, index) => (
              <TodoItems key={index} item={item} />
            ))
          }
          {
            this.todoItems.length === 0 && <div>No thing here</div>
          }


      </div>  
    )
  }
}

export default App;