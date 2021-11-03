import React, { memo, useCallback, useState } from 'react'

// memo 浅层比较，只比较地址值变没有
const DwjButton = memo((props) => {
  console.log('DwjButton ', props.increment)
  return <button onClick={props.increment}>DwjButton+1</button>
})

export default function Demo() {
  const [count, setCount] = useState(0)
  const [isShow, setShow] = useState(true)

  const increment1 = () => {
    setCount(count + 1)
    console.log('increment1')
  }

  /* 
    useCallback 会返回一个函数的 memoized(记忆的)值
    在依赖项不变的情况下，多次定义的时候，返回的值是相同的
  */

  const increment2 = useCallback(() => {
    setCount(count + 1)
    console.log('useCallback')
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <DwjButton increment={increment1} />
      <DwjButton increment={increment2} />

      <button onClick={() => setShow(!isShow)}>显示</button>
    </div>
  )
}
