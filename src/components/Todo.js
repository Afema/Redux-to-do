import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, date }) => {
  console.log("date: ", date);
  return (
  <li
    onClick={onClick}
    
  >
  <span style={{
      textDecoration: completed ? 'line-through' : 'none'
    }} >{text}</span> 
        <span style={{margin: "20px"}}>{date && date.toDateString()}</span>
  </li>
)}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date)
}

export default Todo