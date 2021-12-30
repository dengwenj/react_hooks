import React, { forwardRef, useEffect, useRef } from 'react'

const Dwj = forwardRef((props, ref) => {
  // console.log(ref);
  // useEffect(() => {
  //   console.log(ref.current)
  // })
  return (
    <>
      <input ref={ref} type="text" />
    </>
  )
})
// **forwardRef 可以在父组件中操作子组件的 ref 对象**
export default function Demo() {
  const inputRef = useRef()
  useEffect(() => {
     console.log(inputRef); // 子组件里面的 input 标签
     inputRef.current.focus()
  })
  return (
    <div>
      <Dwj ref={inputRef}></Dwj>
    </div>
  )
}
