import React, { useState } from 'react'

export default function ComplexHookState() {
  const [friend, setFriend] = useState([
    { id: '001', name: 'xiaodeng', age: 18 },
    { id: '002', name: 'xiaowang', age: 20 },
    { id: '003', name: 'xiaogao', age: 50 },
  ])

  function ageClick(index) {
    return () => {
      const newFriend = [...friend]
      newFriend[index].age += 1
      setFriend(newFriend)
    }
  }

  return (
    <div>
      <ul>
        {friend.map((item, index) => {
          return (
            <li key={item.id}>
              <span>
                姓名：{item.name}，年龄：{item.age}
              </span>
              <button onClick={ageClick(index)}>点击+年龄</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
