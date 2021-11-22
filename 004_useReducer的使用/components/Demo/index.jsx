import React, { useReducer, createContext } from 'react';

import AsyncIncrement from './components/AsyncIncrement';

export const asyncContext = createContext();

const initState = { count: 0 }; // 初始值
function reducer(preState, action) {
    console.log(preState);
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return { count: preState.count + data };
        case 'decrement':
            return { count: preState.count - data };
        case 'asyncIncrement':
            return { count: preState.count + data };
        default:
            return preState.count;
    }
}

export default function Demo() {
    const [state, dispatch] = useReducer(reducer, initState);
    console.log(state);
    return (
        <>
            <h3>{state.count}</h3>
            <button
                onClick={() => {
                    dispatch({ type: 'increment', data: 1 });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'decrement', data: 1 });
                }}
            >
                -
            </button>
            <hr />
            <asyncContext.Provider value={{ dispatch }}>
                <AsyncIncrement />
            </asyncContext.Provider>
        </>
    );
}
