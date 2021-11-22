import React, { forwardRef, useEffect, useRef } from 'react';

const Dwj = forwardRef((props, ref) => {
    return (
        <>
            <input ref={ref} type="text" />
        </>
    );
});

export default function Demo() {
    const inputRef = useRef();
    // console.log(inputRef.current);
    // 父组件也可以拿子组件的某个节点
    useEffect(() => {
        console.log(inputRef.current);
    });

    return (
        <div>
            <Dwj ref={inputRef}></Dwj>
        </div>
    );
}
