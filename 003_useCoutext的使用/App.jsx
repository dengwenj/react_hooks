import React, { useState, createContext } from 'react';

import Demo from './components/Demo';

export const myContext = createContext();

export default function App() {
    const [flag, setFlag] = useState(true);

    return (
        <div>
            <button
                onClick={e => {
                    setFlag(false);
                }}
            >
                删除
            </button>
            {flag ? (
                <myContext.Provider value={{ name: 'dwj', age: 21 }}>
                    <Demo />
                </myContext.Provider>
            ) : (
                ''
            )}
        </div>
    );
}
