import React, { useState } from 'react';

import Demo from './components/Demo';

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
            {flag ? <Demo num={1} /> : ''}
        </div>
    );
}
