import { useState, useEffect } from 'react'

function useScroll() {
  const [scroll, setScroll] = useState(0)

  function handleScroll() {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}

export default useScroll