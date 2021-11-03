import React, { forwardRef, useEffect, useRef } from 'react'

const Dwj = forwardRef((props, ref) => {
  useEffect(() => {
    console.log(ref.current)
  })
  return (
    <>
      <input ref={ref} type="text" />
    </>
  )
})

export default function Demo() {
  const inputRef = useRef()
  return (
    <div>
      <Dwj ref={inputRef}></Dwj>
    </div>
  )
}
