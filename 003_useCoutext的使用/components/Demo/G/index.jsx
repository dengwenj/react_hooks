import React, { useContext } from 'react';

import { myContext } from '../../../App';

export default function G({ hobby }) {
    const info = useContext(myContext);
    return (
        <>
            <span>我的姓名：{info.name}</span>
            <span>我的年龄：{info.age}</span>
            <ul>
                {hobby.map(item => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </>
    );
}
