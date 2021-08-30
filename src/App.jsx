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
// import Home from './05_useReducer使用/home'
// import Count from './05_useReducer使用/Count'
// import CallbackHookDemo from './06_useCallback的使用/01_useCallback进行性能优化'
// import MemoDemo1 from './07_useMemo使用/01_useMemo复杂计算的应用'
// import MemoDemo2 from './07_useMemo使用/02_useMemo传入子组件应用类型'
// import RefDemo1 from './08_useRef使用/01_useRef引用DOM'
// import RefDemo2 from './08_useRef使用/02_useRef引用其他数据'
// import ForwardDemo from './09_useImperatvieHandle使用/01_回顾forwardRef的用法'
// import ImperatvieHandleDeo from './09_useImperatvieHandle使用/02_useImperatvieHandle的用法'
// import LayoutEffectDemo from './10_useLayoutEffect使用/uselauoutEffect的count修改'
// import CustomizeHookDemo1 from './11_自定义Hook使用/01_自定义Hook的基本使用'
// import CustomizeHookDemo2 from './11_自定义Hook使用/02_自定义Hook练习-Context共享'
// import CustomizeHookDemo3 from './11_自定义Hook使用/03_自定义Hook练习-获取滚动位置'
import CustomizeHookDemo4 from './11_自定义Hook使用/04_自定义Hook练习-localStorage存储'

// 创建 context 容器对象
export const userContext = createContext()

export const userInfoContext = createContext()
export const tokenContext = createContext()

export default function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      {/* 初体验hooks */}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}

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
      {/* <Home /> */}
      {/* <Count /> */}

      {/* useCallback的使用 */}
      {/* <CallbackHookDemo /> */}
      {/* useMemo的使用 */}
      {/* <MemoDemo1 /> */}
      {/* <MemoDemo2 /> */}

      {/* useRef的使用 */}
      {/* <RefDemo1 /> */}
      {/* <RefDemo2 /> */}

      {/* useImperatvieHandle的使用 */}
      {/* <ForwardDemo /> */}
      {/* <ImperatvieHandleDeo /> */}
      {/* <LayoutEffectDemo /> */}

      {/* 自定义Hook */}
      {/* {isShow && <CustomizeHookDemo1 />} */}
      {/* <userInfoContext.Provider value={{ name: 'xiaodeng', age: 21 }}>
        <tokenContext.Provider value="hjsjsaddddklfowpopq">
          <CustomizeHookDemo2 />
        </tokenContext.Provider>
      </userInfoContext.Provider> */}
      {/* <CustomizeHookDemo3 /> */}
      <CustomizeHookDemo4 />
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
