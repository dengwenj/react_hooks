import React, { useState, useEffect } from 'react'

export default function HookTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count
  })

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>当前数字为：{count}</h2>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
