import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './component/TodoItem';

class App extends Component{
  constructor(){
    super();
    this.TodoItem=[
      {title:'Buy some pop' , isComplete:true },
      {title:'Playing football',isComplete:true},
      {title:'Reading book'},
    ];
  }
  render(){
    return (
      <div className="App">
        {
         this.TodoItem.length > 0 && this.TodoItem.map((item,index)=>
            <TodoItem key={index} item={item}/>)
        }
        {this.TodoItem.length === 0 && 'Nothing here.'}
      </div>
    );
  }
}
export default App;
