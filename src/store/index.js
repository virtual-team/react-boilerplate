

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

// 初始状态
const initialState = {
  username: 'Tony Stark'
}

const reducers = combineReducers({
  username: (state = initialState.username, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return action.payload
      default:
        return state
    }
  }
})

export const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
)
