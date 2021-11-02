import React, { useState, createContext } from 'react'

import Demo from './component/Demo'

// 创建 context 容器对象
export const Context = createContext()

export default function App() {
  const [flag, setFlag] = useState(true)

  const handleDelete = () => {
    setFlag(false)
  }

  return (
    <div>
      <button onClick={handleDelete}>点击删除</button>
      {flag ? (
        <Context.Provider value={{ name: 'dwj', age: 21 }}>
          <Demo></Demo>
        </Context.Provider>
      ) : (
        ''
      )}
    </div>
  )
}
