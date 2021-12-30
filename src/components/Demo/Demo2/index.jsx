import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export default forwardRef((props, ref) => {
  function fn(data) {
    console.log(data);
    console.log(1);
  }
  const inputRef = useRef(fn)
  const inputRef1 = useRef() 
  const div = useRef(122)

  // 主要是解决父组件获取子组件的数据或者调用子组件的里声明的函数。
  // 利用useImperativeHandle子组件可以向父组件输出任意数据。
  useImperativeHandle(ref, () => {
    // 这个 return 的这个 都会在 ref.current 里面去
    return {
      inputRef,
      inputRef1,
      div,
    }
  })
  return (
    <>
      <input ref={inputRef1} type="text" />
      <div ref={div}></div>
    </>
  )
})
