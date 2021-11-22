import React, { useContext } from 'react';
import G from './G';

import { myContext } from '../../App';

export default function Demo() {
    const userInfo = useContext(myContext);
    console.log(userInfo);

    const hobby = ['抽烟', '喝酒', '烫头'];
    return (
        <>
            <G hobby={hobby} />
        </>
    );
}
