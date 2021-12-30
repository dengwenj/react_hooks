import React, { useEffect, useRef } from 'react'

import Demo2 from './Demo2'

export default function Demo() {
  const ref = useRef() // 子组件的 ref

  useEffect(() => {
    console.log(ref);
    ref.current.inputRef.current('子船夫')
  })

  return (
    <>
      <Demo2 ref={ref}/>
    </>
  )
}
