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
    return (
        //for inline style use '{{}}' braces
        //<div  style={{backgroundColor:'#f4f4f4'}}>
        //by variables
        //<div  style={itemStyle}>
      <div  style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItem.propType={
    todo:PropTypes.object.isRequired
}
/*
const itemStyle={
    backgroundColor:'#f4f4f4'
}
*/
export default TodoItem

