import React, { useRef, useState, useEffect } from 'react'

export default function RefDemo2() {
  const [count, setCount] = useState(0)

  const numRef = useRef(count)

  useEffect(() => {
    numRef.current = count
  }, [count])

  return (
    <div>
      <h2>上一次的值：{numRef.current}</h2>
      <h2>这一次的值：{count}</h2>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
