import { userInfoContext, tokenContext } from '../App'
import { useContext } from 'react'

function useUserToken(params) {
  const user = useContext(userInfoContext)
  const token = useContext(tokenContext)

  return [user, token]
}

export default useUserToken