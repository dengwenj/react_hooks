import React, { useLayoutEffect, useState } from 'react'

/* 
  useEffect 在渲染的内容更行到 DOM 之后执行
  useLayoutEffect 在渲染的内容更新 DOM 之前执行

*/

export default function LayoutEffectDemo() {
  const [count, setCount] = useState(10)

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random())
    }
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(0)}>点击</button>
    </div>
  )
}
