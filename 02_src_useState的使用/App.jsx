import React, { useState } from 'react'

export default function App() {
  /* 
    useState解析
      参数：初始化值，如果不设置为 undefined
      返回值：数组，包含两个元素
          元素一：当前状态的值（第一调用为初始化值）
          元素二：设置状态值的函数！！ 函数！！
  */
  const [count, setCount] = useState(0)

  const handleUseState = () => {
    // 写成一个函数
    // setCount((state) => {
    //   return state + 1
    // })
    // 写成一个普通值
    setCount(count + 1)
  }

  console.log('render')

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleUseState}>点击+1</button>
    </div>
  )
}
