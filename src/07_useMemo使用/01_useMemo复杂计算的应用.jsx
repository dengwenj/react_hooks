import React, { useState, useMemo } from 'react'

function totlefunc(count) {
  let totle = 0
  for (let i = 0; i <= count; i++) {
    console.log(i)
    totle += i
  }
  return totle
}

export default function MemoDemo1() {
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)

  // 只有这里 count 改变了 才会执行这个回调函数
  const totle = useMemo(() => {
    return totlefunc(count)
  }, [count])

  return (
    <div>
      <h2>{totle}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setShow(!show)}>show</button>
    </div>
  )
}
