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

export default function Demo() {
  const inputRef = useRef()
  useEffect(() => {
     console.log(inputRef); // 子组件里面的 input 标签
  })
  return (
    <div>
      <Dwj ref={inputRef}></Dwj>
    </div>
  )
}
