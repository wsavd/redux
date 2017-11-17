import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {todos} from './data'
import Chat from './components/Chat'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_USER':
      let todo = {
        id: Date.now(),
        title: "gt",
        completed: false
      }
      return [...state, todo]
    default:
      return state
  }
}

const store = createStore(reducer, todos)

store.subscribe(() => { console.log(store.getState()) })
window.store = store
//store.dispatch(action)

const App = () => {  
  return(
    <Provider store={store}>
      <div>
        <h1>App </h1>
        <Chat />
      </div>
    </Provider>
  )
}

export default App