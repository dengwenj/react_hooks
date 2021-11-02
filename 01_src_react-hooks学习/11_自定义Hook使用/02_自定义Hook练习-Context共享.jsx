import React from 'react'
import useUserToken from '../Hooks/user_token'

export default function CustomizeHookDemo2() {
  const [user, token] = useUserToken()
  console.log(user, token)

  return <div></div>
}
