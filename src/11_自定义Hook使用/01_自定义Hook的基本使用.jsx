import React, { useEffect } from 'react'

/* 
  自定义Hook本质上只是一种函数代码逻辑的抽取，严格意义上来说，它本身并不算React的特性
*/

function Person(params) {
  useHookPersonStudent('Person')
  return <div>Person</div>
}

function Student(params) {
  useHookPersonStudent('Student')
  return <div>Student</div>
}

export default function CustomizeHookDemo1() {
  useHookPersonStudent('CustomizeHookDemo1')
  return (
    <div>
      <Person />
      <Student />
    </div>
  )
}

function useHookPersonStudent(name) {
  return useEffect(() => {
    console.log(`${name}创建了`)
    return () => {
      console.log(`${name}销毁了`)
    }
  })
}
