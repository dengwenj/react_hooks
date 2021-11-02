import React, { useContext } from 'react'
import { userContext } from '../App'

export default function ContextHookDemo() {
  const user = useContext(userContext)
  console.log(user)

  return <div>ContextHookDemo</div>
}
