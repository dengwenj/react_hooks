import React, { forwardRef, useRef } from 'react'

/* 
 forwardRef 可以父组件拿到子组件的 ref 这样父组件就可以操作子组件了

*/

// 子组件
const WJForward = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
})

// 父组件
export default function ForwardDemo() {
  const forwardRef = useRef()

  function forwardClick() {
    forwardRef.current.focus()
  }

  return (
    <div>
      <WJForward ref={forwardRef} />
      <button onClick={forwardClick}>聚焦</button>
    </div>
  )
}
