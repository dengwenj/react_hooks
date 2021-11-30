import React, { memo } from 'react'

const Child = memo(({ num, click }) => {
    const headleClickChild = () => {
        click()
    }

    console.log('被调用了');
    return (
        <>
            <div>num:{num}</div>
            <button onClick={headleClickChild}>+1</button>
        </>
    )
})

export default Child


