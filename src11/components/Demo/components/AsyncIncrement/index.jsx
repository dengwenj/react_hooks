import React, { useContext } from 'react';

import { asyncContext } from '../../index';

export default function AsyncIncrement() {
    const { dispatch } = useContext(asyncContext);

    const asyncIncrement = () => {
        setTimeout(() => {
            dispatch({ type: 'asyncIncrement', data: 1 });
        }, 1000);
    };

    return (
        <div>
            <button onClick={asyncIncrement}>异步加</button>
        </div>
    );
}
