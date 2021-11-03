import React, { useState } from 'react'

import Demo from './component/Demo'

export default function App() {
  const [flag, setFlag] = useState(true)

  const handleDelete = () => {
    setFlag(false)
  }

  return (
    <div>
      <button onClick={handleDelete}>点击删除</button>
      {flag ? <Demo></Demo> : ''}
    </div>
  )
}
