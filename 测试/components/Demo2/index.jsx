import React, { useEffect, useMemo, useRef, useState } from 'react'

const hh = {
  name: 'dengwenjie'
}
export default function Demo2() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(111111);
    return () => {
      console.log('卸载了');
    }
  }, [])

  const headleClick = () => {
    setCount(preState => preState + 1)
  };
  // const [state, setState] = useState({
  //   name: 'dengwenjie',
  //   age: 21,
  //   sex: ['男', '女']
  // })
  // console.log(state);
  // const headleClick = () => {
  //   setState({
  //     ...state,
  //     name: 'dwj'
  //   })
  // }

  // useEffect(() => {
  //   // function hh() {
  //   //   console.log(1);
  //   // }
  //   // hh()
  //   (async function() {
  //     // console.log(22);
  //   })()
  // })

  // const m = () => {
  //   return hh
  // }

  // const memo = useMemo(() => {
  //   return m
  // }, []);

  // const ref = useRef(m)

  // useEffect(() => {
  //   console.log(ref.current);
  // }, [state])
  


  
  // setTimeout(() => {
  //   console.log(ref.current === memo);
  //   console.log(ref.current === m);
  // });


  return (
    <div>
      <h3>{count}</h3>
      <button onClick={headleClick}>点击</button>
      {/* <h3>{state.name}</h3>
      <h3>{state.age}</h3>
      <h3>{state.sex}</h3> */}
    </div>
  )
}
