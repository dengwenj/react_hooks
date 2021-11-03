import React, { useEffect, useLayoutEffect } from 'react'

export default function Demo() {
  /* 
    useEffect 会在渲染的内容更新到 DOM 上后执行，不会阻塞 DOM 的更新
    useLayoutEffect 会在渲染的内容更新到 DOM 上之前执行，会阻塞 DOM 的更新

    如果我们希望在某些操作发生之后再更新 DOM，那么应该将这个操作放到 useLayoutEffect
  */
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })

  useEffect(() => {
    console.log('useEffect')
  })

  Promise.resolve().then(() => {
    console.log('promise')
  })
  return <div>useLayoutEffect</div>
}
