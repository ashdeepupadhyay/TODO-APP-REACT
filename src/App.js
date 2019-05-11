import React from 'react';
import Header from './components/layouts/Header'
import Todos from './components/Todos'

import './App.css';

class App extends React.Component{
  state={
    todos:[
      {
        id:1,
        title:'learn basic',
        completed:false
      },
      {
        id:2,
        title:'learn language',
        completed:false
      },
      {
        id:3,
        title:'learn technology',
        completed:false
      }
    ]
  }

  //on toggle change state
  markComplete=(id)=>{
    console.log('from app.js'+id);
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id)
      {
        todo.completed=!todo.completed
      }
      return todo;
    })});
}
//Delete ToDO
delTodo=(id)=>{
  console.log('from app.js'+id);
  //... copy function as state
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
}
  render(){

    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos}
        markComplete={this.markComplete}
        delTodo={this.delTodo}/>
        
      </div>
    );
  }
}


export default App;
