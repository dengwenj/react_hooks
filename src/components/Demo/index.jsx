import React, { useCallback, useEffect, useRef } from 'react'

import Demo2 from './Demo2'

export default function Demo() {
  const ref = useRef() // 子组件的 ref

  const refNum = useRef('ref')
  console.log(refNum);

  const callback = useCallback((res) => {
    console.log(res);
  }, [])

  useEffect(() => {
    refNum.current = ref.current.inputRef.current
    console.log(ref);
    callback(111111111111111)
    ref.current.inputRef.current('子船夫')
    ref.current.hhhhhhh()
    ref.current.inputRef1.current.focus()
  })

  setTimeout(() => {
    console.log(refNum.current);
  }, 1000);

  return (
    <>
      <Demo2 ref={ref}/>
    </>
  )
}
