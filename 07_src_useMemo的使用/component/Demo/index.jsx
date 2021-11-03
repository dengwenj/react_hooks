import React, { memo, useMemo, useState } from 'react'

const Dwj = memo((props) => {
  console.log(props)
  return <div></div>
})

export default function Demo() {
  /* 
     useMemo 实际的目的也是为了进行性能的优化

     useMemo 返回的也是一个 memoized(记忆)值
     在依赖不变的情况下，多次定义的时候，返回的值都是相同的
  */
  // const [count, setCount] = useState(0)
  const [isShow, setShow] = useState(true)

  // const info = { name: 'd', age: 21 }
  const info = useMemo(() => {
    // 在依赖项发生改变的时候才会重新执行这个回调函数 ！！！！！！！！！！！！！！！
    return { name: 'd', age: 21 }
  }, [])

  return (
    <div>
      {/* <h2>{count}</h2> */}
      <button onClick={() => setShow(!isShow)}>切换</button>
      <Dwj info={info}></Dwj>
    </div>
  )
}
