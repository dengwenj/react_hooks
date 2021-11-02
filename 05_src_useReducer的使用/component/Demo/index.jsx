import React, { useReducer } from 'react'

// const initState = { count: 1 }

/* 
  你可以选择惰性地创建初始 state。为此，
     需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。
  
  官网的话
*/
function init(initialCount) {
  return { ...initialCount }
}
// init(initialCount) 底层会这样做

function reducer(preState, action) {
  const { type, data } = action
  // console.log(preState)
  // console.log(data)
  switch (type) {
    case 'increment':
      return { count: preState.count + data }
    case 'decrement':
      return { count: preState.count - data }
    default:
      return preState
  }
}

export default function Demo({ initialCount }) {
  /* 
    useReducer 是 useState 的替代方案，它接收一个形如 (state,action) => newState 的 reducer，
        并返回当前的 state 以及与其配套的 disoatch 方法 (属性 redux 就比较好理解这个)

    在比较复杂的场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，
       或者下一个 state 依赖于之前的 state
  */
  // const [state, dispatch] = useReducer(reducer, initState)
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  const increment = () => {
    dispatch({ type: 'increment', data: 1 })
  }

  const decrement = () => {
    dispatch({ type: 'decrement', data: 1 })
  }

  return (
    <div>
      <h2>count:{state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
