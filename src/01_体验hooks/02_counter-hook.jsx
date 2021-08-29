import React, { useState } from 'react'

export default function CounterHook() {
  /* 
   useState
     本身是一个函数，来自 react 包
     参数和返回值
     1 参数：作用是给创建出来的状态一个默认值
     2 返回值：数组
          元素1：当前 state 的值
          元素2：设置新的值是，使用的一个函数  
 */

  const [count, setCount] = useState(0)

  function jia() {
    setCount(count + 1)
  }

  function jian() {
    setCount((count) => count - 1)
  }
  return (
    <div>
      <h2>当前计算为：{count}</h2>
      <button onClick={jia}>+</button>
      <button onClick={jian}>-</button>
    </div>
  )
}
