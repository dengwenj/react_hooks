import React, { useCallback, useMemo, useState } from 'react'

import Child from './Child'

export default function Demo() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)

    const [totle, setTotle] = useState(10)

    const headleClick = () => {
        setCount(count + 1)
    }

    /* 父组件给子组件传递函数的时候可以用 useCallback，如果没有用 useCallback 当父组件更新的时候子组件也会更新，
      但是子组件仅仅是更新而已，没有做别的事情 
        useCallback 是返回的一个函数，当依赖项没有变化的时候返回的这个函数永远是一样的  
    */
    const clickNum = useCallback(() => {
        setNum(num + 1)
    }, [num])

    /* 
        useMemo 它的一个参数是函数，函数要有一个返回值，这个返回值就是 useMemo 的返回值。
        当它的依赖项没有改变的时候返回的是原来的值
        如果一些值的计算量很大，那么可以用 useMemo 来做一个缓存，只有依赖变化时才会重新计算，而不是每次渲染时都进行计算
    */
    function t(value) {
        console.log('被调用了！！');
        let count = 0;
        for (let i = 1; i <= value; i++) {
            count += i
        }
        return count
    }

    // const totleCount = t(totle)
    const totleCount = useMemo(() => {
        return t(totle)
    }, [totle])

    const headleTotle = () => {
        setTotle(totle + 1)
    }

    return (
        <div>
            <div>count:{count}</div>
            <button onClick={headleClick}>+1</button>
            <button onClick={headleTotle}>+</button>
            <div>totleCount:{totleCount}</div>
            <hr />
            <Child click={clickNum} num={num} />
        </div>
    )
}
