import React, { useRef, useImperativeHandle, forwardRef } from 'react'

/* 
  useImperativeHandle 就是说父组件就只能拿到你给他的东西了，这样父组件就不能任意操作子组件了

  useImperativeHandle 应当与 forwardRef 一起使用

*/

// 子组件
const WJforward = forwardRef((props, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focu() {
      inputRef.current.focus()
    },
  }))

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
})

// 父组件
export default function ImperatvieHandleDeo() {
  const forwardRef = useRef()

  function forwardClick() {
    forwardRef.current.focu()
  }

  return (
    <div>
      <WJforward ref={forwardRef} />
      <button onClick={forwardClick}>聚焦</button>
    </div>
  )
}
