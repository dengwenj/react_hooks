import React, { createContext, useState } from 'react'

// import CounterClass from './01_体验hooks/01_counter-class'
// import CounterHook from './01_体验hooks/02_counter-hook'
// import MultiHookState from './02_useState使用/01_多个状态的使用'
// import ComplexHookState from './02_useState使用/02_复杂状态的修改'
// import UpdateClass from './03_useEffect使用/01_class实现title的修改'
// import HookTitle from './03_useEffect使用/02_hook实现title的修改'
// import EffectHookDemo from './03_useEffect使用/03_useEffect模拟订阅和取消订阅'
// import MultiEffectHookDemo from './03_useEffect使用/04_多个useEffect以及依赖问题'
// import ContextHookDemo from './04_useContext使用/useContext的使用'
import Home from './05_useReducer使用/home'
import Count from './05_useReducer使用/Count'

// 创建 context 容器对象
export const userContext = createContext()

export default function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      {/* 初体验hooks */}
      {/* <CounterClass />
      <CounterHook /> */}
      {/* useState的使用 */}
      {/* <MultiHookState /> */}
      {/* <ComplexHookState /> */}
      {/* useEffect的使用 */}
      {/* <UpdateClass /> */}
      {/* <HookTitle /> */}
      {/* 这个意思就是 如果第一个为真就执行第二个，如果第一个为假，就不执行第二个 */}
      {/* {isShow && <EffectHookDemo />} */}
      {/* <MultiEffectHookDemo /> */}
      {/* useContext的使用 */}
      {/* <userContext.Provider value={{ name: '小邓', age: '18' }}>
        <ContextHookDemo />
      </userContext.Provider> */}
      {/* useReducer的使用 */}
      <Home />
      <Count />
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
