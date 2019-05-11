import React from 'react';
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
  render(){

    return (
      <div className="App">
        <Todos/>
  
      </div>
    );
  }
}


export default App;
