import React, { useState } from 'react';

import Demo from './components/Demo';
import Demo2 from './components/Demo2'

export default function App() {
    const [flag, setFlag] = useState(true);

    return (
        <div>
            {flag ? <Demo2 /> : ''}
            <button
                onClick={e => {
                    setFlag(false);
                }}
            >
                删除
            </button>
            {flag ? <Demo /> : ''}
        </div>
    );
}
