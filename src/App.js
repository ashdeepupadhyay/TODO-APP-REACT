import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';

import uuid from 'uuid';

import './App.css';
import axios from 'axios';

class App extends React.Component{
  state={
    todos:[]
  }

  //another life cycle method such as render
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then(res=>{
            console.log(res.data);
            this.setState({todos:res.data})
          })
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
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}))
  //... copy function as state
  //this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
}

//Add Todo
addTodo=(title)=>{
console.log(title);
axios.post('https://jsonplaceholder.typicode.com/todos',{
  id:uuid.v4(),
  title,
  completed:false
}).then(res=>this.setState({
  todos:[...this.state.todos,res.data]
}))
/*
const newTodo={
  id:uuid.v4(),
  title,//title:title,
  completed:false
}
this.setState({todos:[...this.state.todos,newTodo]});
*/
}
  render(){

    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
       </div>
      </Router>
      
    );
  }
}


export default App;
