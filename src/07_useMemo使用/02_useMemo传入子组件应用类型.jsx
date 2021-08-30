import React, { useState, useMemo, memo } from 'react'

const HYiInfo = memo((props) => {
  console.log('HYiInfo')
  return 1
})

export default function MemoDemo2() {
  console.log('MemoDemo2')
  // const [info, setInfo] = useState({ name: 'xd', age: 21 })
  const [show, setShow] = useState(true)

  const info = useMemo(() => {
    return { name: 'xd', age: 21 }
  }, []) // 这里只执行一次就不执行这里了 因为这里谁都不依赖

  return (
    <div>
      <HYiInfo info={info} />
      <button onClick={() => setShow(!show)}>show</button>
    </div>
  )
}
