import React from 'react'
import useLocalStorage from '../Hooks/localStorage'

export default function CustomizeHookDemo4() {
  const [name, setName] = useLocalStorage('name')
  return (
    <div>
      <h2>名字： {name}</h2>
      <button onClick={() => setName('dwj')}>点击</button>
    </div>
  )
}
