import React, { useMemo, memo, useState } from 'react';

const Dwj = memo(({ info }) => {
    console.log(Math.random());
    return <div></div>;
});

function callbackCount(count) {
    let zCount = 0;
    for (let i = 0; i <= count; i++) {
        zCount = zCount + count;
    }
    return zCount;
}

export default function Demo() {
    const [count, setCount] = useState(1);
    const [flag, setFlag] = useState(false);
    /* 返回一个有记忆的值，当这个依赖项不发生改变的时候，返回的值都是一样的，我这里写的[]这里谁都不依赖，
       返回的值始终是一样的 
    */
    /* mac上： shift + option + a */
    const info = useMemo(() => {
        return { name: 'dwj', age: 21 };
    }, []);
    // const info = { name: '1' };

    const zSCount = useMemo(() => {
        return callbackCount(count);
    }, [count]);
    console.log(zSCount);

    const add = () => {
        setCount(count + 1);
    };

    const tf = () => {
        setFlag(!flag);
    };
    return (
        <>
            <h3>{zSCount}</h3>
            <button onClick={add}>{count}</button>
            <button onClick={tf}>{flag ? 'true' : 'false'}</button>
            <Dwj info={info} />
        </>
    );
}
