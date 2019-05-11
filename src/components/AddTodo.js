import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
//component level state
  state={
      title:''
  }

  //onChange=(e)=>this.setState({title:e.target.value});//if single field
  onChange=(e)=>this.setState({[e.target.name]:e.target.value});//if multiple fields         

  onSubmit=(e)=>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title:''});
  }
  render() {
    return (
     <form onSubmit={this.onSubmit} style={{display:'flex'}}>
        <input 
        type="Text" 
        name="title"
        style={{flex:'10',padding:'5px'}} 
        placeholder="Add Todo..."
        value={this.state.title}
        onChange={this.onChange}
        />
        <input 
        type="submit"
        value="submit"
        className='btn'
        style={{flex:'1'}}
        />
     </form>
    )
  }
}

AddTodo.propType={
  addTodo:PropTypes.func.isRequired
}

export default AddTodo
