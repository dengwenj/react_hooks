import React, { useState } from 'react';

export default function App() {
    // 第一个参数是当前的值，第二个参数是更新这个值的函数
    const [count, setCount] = useState(0);

    const add = () => {
        // setCount(count + 1);

        // 这里会合并 输出为 2
        // setCount(count + 1);
        // setCount(count + 2);

        // 这里不会合并输出为 3
        setCount(state => {
            return state + 1;
        });
        setCount(state => {
            return state + 2;
        });
    };

    return (
        <div>
            当前求和为：{count}
            <button onClick={add}>点击+1</button>
        </div>
    );
}
