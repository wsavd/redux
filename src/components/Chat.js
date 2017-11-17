import React from 'react'
import {connect} from 'react-redux'

const Chat = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Chat</h1>
      <button onClick={()=>props.dispatch({ type: 'ADD_NEW_USER' })}>add new user</button>
      {props.todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}

export default connect(state => {
  return {
    todos: state
  }
})(Chat)