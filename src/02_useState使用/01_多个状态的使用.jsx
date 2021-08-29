import React, { useState } from 'react'

export default function MultiHookState() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState(['张三', '小邓'])

  function addPerson() {
    setPerson([...person, '嘻嘻']) // 不能用 push 添加 没有改变内存地址 要这样添加 ...
  }

  return (
    <div>
      <h2>{count}</h2>
      <ul>
        {person.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addPerson}>添加一个人</button>
    </div>
  )
}
