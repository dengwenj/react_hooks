import React, { useEffect, useRef, useState } from 'react'

export default function Demo() {
  const [count, setCount] = useState(0)

  /* 
    useRef 返回一个 ref 对象，返回的 ref 对象在组件的整个生命周期保持不变

    最常用的 ref 是两种用法：
       用法1：引入 DOM (或者组件，但是需要是 class 组件)元素
       用法二：保存一个数据，这个对象在整个生命周期中可以保持不变
  */
  const myRef = useRef()

  const numRef = useRef(count)

  useEffect(() => {
    console.log(myRef.current)
    numRef.current = count
  })

  return (
    <div>
      <h2>current:{numRef.current}</h2>
      <h2>count:{count}</h2>
      <input ref={myRef} type="text" />
      <br />
      <button onClick={() => setCount(count + 10)}>+</button>
    </div>
  )
}
