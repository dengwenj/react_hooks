import React, { memo, useCallback, useState } from 'react';

// memo 当你传入的值没有发生改变的话不会调用这个组件，浅比较，只有当地址值发生变化才会执行，每次对 props 进行一次浅比较
const Dwj = memo(({ increment, title }) => {
    console.log(increment);
    console.log(title);
    return (
        <>
            <button onClick={increment}>{title}</button>
        </>
    );
});

export default function Demo() {
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(0);

    // 当依赖项不发生改变的时候，永远都是返回一个有记忆的函数
    const callback = useCallback(() => {
        console.log(count);
        setCount(count + 1);
    }, [count]);

    const increment = () => {
        setFlag(!flag);
    };

    return (
        <div>
            <div>count:{count}</div>
            <button>{flag ? 'true' : 'false'}</button>
            <br />
            <Dwj increment={callback} title={'btn1'} />
            <br />
            <Dwj increment={increment} title={'btn2'} />
        </div>
    );
}
