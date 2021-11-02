import React, { useContext } from 'react'

import { Context } from '../../App'

export default function Demo() {
  const user = useContext(Context) // 这里面放的是容器对象
  console.log(user) // {name: "dwj", age: 21}
  return <div>Demo</div>
}
