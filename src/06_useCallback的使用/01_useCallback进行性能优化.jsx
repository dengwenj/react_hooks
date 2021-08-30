import React, { memo, useCallback, useState } from 'react'

/* 
  useCalback的场景？
    在将一个组件中的函数，传递给子组件进行回调使用时，使用 useCallback 对函数进行处理

*/

// memo 和 PureComponent 是一样的
const HYButton = memo((props) => {
  console.log(props.title)
  return (
    <div>
      <button onClick={props.jia}>+</button>
    </div>
  )
})

export default function CallbackHookDemo() {
  console.log('CallbackHookDemo')
  const [count, setCount] = useState(0)
  const [isShow, setIsShow] = useState(true)

  const jia1 = () => {
    console.log('jia1')
    setCount(count + 1)
  }

  const jia2 = useCallback(() => {
    console.log('jia2')
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setIsShow(!isShow)}>isShow</button>
      <HYButton title="btn1" jia={jia1} />
      <HYButton title="btn2" jia={jia2} />
    </div>
  )
}
