import React, { useReducer, createContext, useEffect } from 'react';
import AsyncIncrement from './components/AsyncIncrement';

export const asyncContext = createContext();

// const initState = { count: 0, num: 2 }; // 初始值

// initState 函数的参数就是 useReducer 的第二个参数
function initState(num) {
    console.log(num);
    return {
        count: num
    }
}
function reducer(preState, action) {
    console.log(preState);
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return { ...preState, count: preState.count + data };
        case 'decrement':
            return { count: preState.count - data };
        case 'asyncIncrement':
            return { count: preState.count + data };
        default:
            return preState.count;
    }
}



export default function Demo({ num }) {
    // 第三个参数是一个函数，不写第三个参数的话，第二个参数就是 state 的值
    const [state, dispatch] = useReducer(reducer, num, initState);
    // const [state, dispatch] = useReducer(reducer, initState);
    // console.log(state); // state 的值就是 initState 函数的返回值

    useEffect(() => {
        // dispatch({ type: 'increment', data: 1 })
    }, [])
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
