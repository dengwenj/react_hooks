import React, { useRef } from 'react'

export default function RefDemo1() {
  const titleRef = useRef()

  const numRef = useRef(10)

  function titleClick() {
    titleRef.current.innerHTML = 'hello world'
  }

  return (
    <div>
      <h2 ref={numRef}>{numRef.current}</h2>
      <h2 ref={titleRef}>useRef</h2>
      <button onClick={titleClick}>修改dom</button>
    </div>
  )
}
