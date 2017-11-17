import React from 'react'
import {connect} from 'react-redux'

const Chat = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Chat</h1>
      <button onClick={props.addNewUser}>add new user</button>
      {props.todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: ()=>dispatch({ type: 'ADD_NEW_USER' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)