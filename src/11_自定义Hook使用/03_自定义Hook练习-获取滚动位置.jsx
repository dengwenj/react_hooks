import React from 'react'
import useScroll from '../Hooks/scroll'

export default function CustomizeHookDemo2() {
  const scroll = useScroll()

  return (
    <div style={{ paddingTop: 1000 }}>
      <h2 style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        1111{scroll}
      </h2>
    </div>
  )
}
