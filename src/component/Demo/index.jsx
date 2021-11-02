import React, { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  /* 
    useEffect 相当于 三个钩子  componentDidMount、 componentWillUnmount、 componentDidUpdate
    useEffect 会在页面渲染在 DOM 之后执行 (宏任务也是在 页面渲染 dom 后执行)！！！！！！！！！！！！！！！！！！！！！！
    一上来会调用一次
    如果不写第二个参数，第一次和更新都会调用,
    如果第二个参数只写一个空数组，那就只有一上来的时候调用一次，相当于 componentDidMount
    当有依赖项(count)的时候要写在数组里面，当依赖项发生改变，这个回调函数会被调用,相当于 componentDidUpdate
    这个回调函数还可以 return 一个函数，这个函数就相当于 componentWillUnmount，
       但是这个 return 的函数在有依赖项更新的时候也会执行，只有没有依赖项的时候才不会执行
  */
  useEffect(() => {
    // console.log('useEffet') // 3
    // console.log('[]只有一上来调用一次其他都不会在调用了')
    // document.title = count
    return () => {
      console.log(
        '要被卸载了，在这里面做一些收尾的事情，清除定时器，取消订阅等等'
      )
    }
  }, [])

  useEffect(() => {
    // console.log('useEffet') // 3
    // console.log('[]只有一上来调用一次其他都不会在调用了')
    document.title = count // 当有依赖项(count)的时候要写在数组里面，当依赖项发生改变，这个回调函数会被调用
    return () => {
      console.log(
        '这个 return 的函数在有依赖项更新的时候也会执行，只有没有依赖项的时候才不会执行'
      )
    }
  }, [count])

  const handleUseEffect = () => {
    setCount(count + 1)
  }

  Promise.resolve().then(() => {
    console.log('resolve') //2
  })
  console.log('render') // 1

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleUseEffect}>点击加1</button>
    </div>
  )
}
