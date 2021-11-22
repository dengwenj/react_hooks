import React, { useEffect, useState, useRef } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    const ref = useRef();

    // 不加第二个参数就是一上来就要调用一次，还有在每次更新的时候也会调用
    // 相当于三个钩子 componentDidMount，componentWillUnmount，componentDidUpdate
    // 第二个参数是数组，数组里面写了依赖项的话当你的依赖项发生变化的话就要执行里面的函数，当依赖项为空数组的话就只会执行一次，就是一上来的时候会执行
    useEffect(() => {
        return () => {
            console.log(
                `这个函数是当要卸载的时候才会执行，
                 这个函数在更新时候也会执行，以前的话以为这个函数只是在要卸载的时候才会执行，再更新的时候不会执行❌的
                 就是说当他的依赖项发生改变也会执行 
                `
            );
        };
    }, []);

    const headleClick = () => {
        setCount(state => {
            return state + 1;
        });
        // console.log(count); // 这里拿不到最新的值，因为更新状态是异步的，要在 useEffect里面才可以拿到最新的值
    };

    return (
        <div>
            当前求和为：{count}
            <button ref={ref} onClick={headleClick}>
                点击
            </button>
        </div>
    );
}
