import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        //using ternary operator
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration : this.props.todo.completed? 'line-through':'none'
        }
        //another way
        /*
        if(this.props.todo.completed){
            return{
                textDecoration:'line-through'
            }
        }else
        {
            return{
                textDecoration:'none'
            }
        }
        */
    }

  
  render() {
    const{ id,title}=this.props.todo;
    return (
        //for inline style use '{{}}' braces
        //<div  style={{backgroundColor:'#f4f4f4'}}>
        //by variables
        //<div  style={itemStyle}>
      <div  style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
            {title}
            <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propType={
    todo:PropTypes.object.isRequired
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'6px 7px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
/*
const itemStyle={
    backgroundColor:'#f4f4f4'
}
*/
export default TodoItem

