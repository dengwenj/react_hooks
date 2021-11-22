import React, { useEffect, useRef, useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);
    /* 
      `useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。
      返回的 ref 对象在组件的整个生命周期内持续存在
         因为在整个生命周期中保持不变（地址值不变）所以即使修改了内部，也不会影响

       最常用的 ref 是两种用法：
       用法1：引入 DOM (或者组件，但是需要是 class 组件)元素
       用法二：保存一个数据，这个对象在整个生命周期中可以保持不变（ref这个对象）！！！！！！
    */
    const ref = useRef(0); // useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（`initialValue`）。
    // console.log(ref.current); // 0

    const inputRef = useRef();
    // console.log(inputRef);
    // console.log(inputRef.current); // 这里取是取不到的，因为，执行这里的时候还没有 render 在 useEffect 中就能取到

    useEffect(() => {
        console.log(count);
        ref.current = count;
        // console.log(ref.current);

        console.log(inputRef.current); // 这里就可以取到 dom 节点了
        inputRef.current.focus();
    });
    return (
        <>
            <h3>上一次的值：{ref.current}</h3>
            <h3>这一次的值：{count}</h3>
            <button
                onClick={() => {
                    setCount(count + 10);
                }}
            >
                点击
            </button>
            <input ref={inputRef} />
        </>
    );
}
