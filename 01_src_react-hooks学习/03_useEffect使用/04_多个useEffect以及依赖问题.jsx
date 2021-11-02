import React, { useState, useEffect } from 'react'

export default function MultiEffectHookDemo() {
  const [count, setCount] = useState(0)

  /* 
   第二个参数是一个数组，数组里面写的是所依赖的一些变量，只要依赖的变量变了就会重新执行回调函数
   写的是个空数组的话，就不是谁都不依赖，就是说只执行一次，以后就不会再执行这个回调函数了
   第一个参数的返回值要是一个函数，这个函数就相当于 class 组件里面的 componentWillUnmount 钩子
  */

  useEffect(() => {
    console.log('修改了dom')
  }, [count])

  useEffect(() => {
    console.log('发送请求')
  }, [])

  useEffect(() => {
    console.log('订阅发布')
  }, [])

  return (
    <div>
      MultiEffectHookDemo
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
