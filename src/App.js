import React from 'react';
import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends React.Component{
  state={
    todos:[
      {
        id:uuid.v4(),
        title:'learn basic',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'learn language',
        completed:false
      },
      {
        id:uuid.v4(),
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
//Delete Todo
delTodo=(id)=>{
  console.log('from app.js'+id);
  //... copy function as state
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
}

//Add Todo
addTodo=(title)=>{
console.log(title);
const newTodo={
  id:uuid.v4(),
  title,//title:title,
  completed:false
}
this.setState({todos:[...this.state.todos,newTodo]});
}
  render(){

    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}


export default App;
