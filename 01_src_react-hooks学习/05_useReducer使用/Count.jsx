import React, { useReducer } from 'react'
import reducer from './reducer'

export default function Count() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: 'jia', data: 111 })}>+</button>
      <button onClick={() => dispatch({ type: 'jian', data: 222 })}>-</button>
    </div>
  )
}
