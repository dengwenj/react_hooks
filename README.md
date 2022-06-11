**Hook 为已知的 React 概念提供了更直接的 API：props， state，context，refs 以及生命周期**

**Hook 使你在无需修改组件结构的情况下复用状态逻辑**

**Hook 将组件中相互关联的部分拆分成更小的函数**

**useState**

​		`useState` 会返回一对值：**当前**状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 `this.setState`，但是它不会把新的 state 和旧的 state 进行合并。`useState` 唯一的参数就是初始 state，不同于 `this.state`，这里的 state 不一定要是一个对象 —— 如果你有需要，它也可以是。这个初始 state 参数只有在第一次渲染时会被用到

```jsx
const [count, setCount] = useState(0) // count 和 setCount 当前状态和一个让你更新它的函数

const headleClick = () => {
  setCount((state) => state + 1)
}

<div>
    <h3>{count}</h3>
    <button onClick={headleClick}>点击</button>
</div>
```





**useEffect**

	* **effect（副作用）：指那些没有发生在数据向视图转换过程中的逻辑**
	* **useEffect 接收一个函数，该函数会在组件渲染到屏幕之后才执行，该函数有要求：要么返回一个能清除副作用的函数，要么就不返回任何内容**

​       useEffect 是在 `dom`渲染后执行，相当于三个钩子`componentDidMount` `componentWillUnmount` `componentDidUpdate` useEffect的第一个参数是函数，第二个参数是一个数组，数组里面写的是依赖项，没有写依赖项的话（[]）就只会执行componentDidMount，写了依赖项的话每次这个依赖项发生改变的时候这个函数也会执行，这个函数也有一个返回值，也是一个函数，在当依赖项发生改变的时候会调用，没写第二个参数的话也会执行，还有就是没有写依赖项的时候（[]），是在这个组件将要卸载的时候会被调用。当不写第二个参数的话，在一上来和更新的时候都会调用

```jsx
useEffect(() => {
  return () => {}
}, ['依赖项'])
```



**Hook 规则**

1、只在最顶层使用 `hook`，不要在循环，条件或嵌套函数中调用 hook。如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的*内部*：

```jsx
useEffect(() => {
  if (name !== '') {
    console.log(name)
  }
})
```

**useContext**

`Context`的作用就是对它所包含的组件树提供全局共享数据的一种技术

关于`Context`还有一个比较重要的点是：当Context Provider的value发生变化时，他的所有子级消费者都会rerende

用于祖先组件给后代组件传数据

还是先要 `createContext`，比如在 App 组件里面，

```jsx
import { createContext } from 'React'

export const myConext = createContxt() // 创建一个 context 对象

<myContext.Provider value={{ name: 'dwj', age: 21 }}>
		<Demo />
<myContext.Provider>

然后在 Demo 组件里面
import { useContext } from 'React'
import { myContext } from '../../App'

export defauft function Demo() {
    const userInfo = useContext(myContext) // useContext 的参数必须是 context 对象本身！！！！！！！
    console.log(userInfo) // { name: 'dwj', age: 21 }
    return <></>
}
```

**useReducer**

它是 `useState`的替代品，知道 `redux`就只应该知道他怎么工作的。**state 逻辑较复杂且包含多个子值**，或者下一个 state 依赖于之前的 state 等。并且，使用 `useReducer` 还能给那些会触发深更新的组件做性能优化，因为[你可以向子组件传递 `dispatch` 而不是回调函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down) 。

**useReducer更多的时候与useContext搭配起来用**。

useReducer： 是阉割版的 redux，只缺省一个状态的共享能力，与useContext 搭配刚刚好。useReducer适合局部数据流。

其实useState是useReducer的一个子集，useState 返回的函数内部封装了一个 dispatch

`useReducer`接收两个参数：

第一个参数：reducer函数。第二个参数：初始化的state。返回值为最新的state和dispatch函数（用来触发reducer函数，计算对应的state）。按照官方的说法：对于复杂的state操作逻辑，嵌套的state的对象，推荐使用useReducer。

```jsx
const initState = {
        name: '',
        pwd: '',
        isLoading: false,
        error: '',
        isLoggedIn: false,
    }
    function loginReducer(state, action) {
        switch(action.type) {
            case 'login':
                return {
                    ...state,
                    isLoading: true,
                    error: '',
                }
            case 'success':
                return {
                    ...state,
                    isLoggedIn: true,
                    isLoading: false,
                }
            case 'error':
                return {
                    ...state,
                    error: action.payload.error,
                    name: '',
                    pwd: '',
                    isLoading: false,
                }
            default: 
                return state;
        }
    }
    function LoginPage() {
        const [state, dispatch] = useReducer(loginReducer, initState);
        const { name, pwd, isLoading, error, isLoggedIn } = state;
        const login = (event) => {
            event.preventDefault();
            dispatch({ type: 'login' });
            login({ name, pwd })
                .then(() => {
                    dispatch({ type: 'success' });
                })
                .catch((error) => {
                    dispatch({
                        type: 'error'
                        payload: { error: error.message }
                    });
                });
        }
        return ( 
            //  返回页面JSX Element
        )
    }
集中式的处理复杂的 state 管理
```

```jsx
import React, { useReducer, createContext, useEffect } from 'react';
import AsyncIncrement from './components/AsyncIncrement';

export const asyncContext = createContext();

// const initState = { count: 0, num: 2 }; // 初始值

// initState 函数的参数就是 useReducer 的第二个参数
function initState(num) {
    console.log(num);
    return {
        count: num
    }
}
function reducer(preState, action) {
    console.log(preState);
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return { ...preState, count: preState.count + data };
        case 'decrement':
            return { count: preState.count - data };
        case 'asyncIncrement':
            return { count: preState.count + data };
        default:
            return preState.count;
    }
}



export default function Demo({ num }) {
    // 第三个参数是一个函数，不写第三个参数的话，第二个参数就是 state 的值
    const [state, dispatch] = useReducer(reducer, 0, initState);
    // const [state, dispatch] = useReducer(reducer, initState);
    console.log(state); // state 的值就是 initState 函数的返回值

    useEffect(() => {
        dispatch({ type: 'increment', data: 1 })
    }, [])
    return (
        <>
            <h3>{state.count}</h3>
            <button
                onClick={() => {
                    dispatch({ type: 'increment', data: 1 });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'decrement', data: 1 });
                }}
            >
                -
            </button>
            <hr />
            <asyncContext.Provider value={{ dispatch }}>
                <AsyncIncrement />
            </asyncContext.Provider>
        </>
    );
}
```



**总结**

- 如果你的`state`是一个数组或者对象
- **如果你的`state`变化很复杂，经常一个操作需要修改很多state**

**useContext和useReducer**

   **将dispatch函数作为context的value**，共享给页面的子组件。在useReducer结合useContext，通过context把dispatch函数提供给组件树中的所有组件使用 ，而不用通过props添加回调函数的方式一层层传递。

- 如果你的页面`state`很简单，可以直接使用`useState`
- 如果你的页面`state`比较复杂（state是一个对象或者state非常多散落在各处）请使用userReducer
- 如果你的页面组件层级比较深，并且需要子组件触发`state`的变化，可以考虑useReducer + useContext

```jsx
import React, { useReducer, createContext } from 'react';

import AsyncIncrement from './components/AsyncIncrement';

export const asyncContext = createContext();

const initState = { count: 0 }; // 初始值
function reducer(preState, action) {
    console.log(preState);
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return { count: preState.count + data };
        case 'decrement':
            return { count: preState.count - data };
        case 'asyncIncrement':
            return { count: preState.count + data };
        default:
            return preState.count;
    }
}

export default function Demo() {
    const [state, dispatch] = useReducer(reducer, initState);
    console.log(state);
    return (
        <>
            <h3>{state.count}</h3>
            <button
                onClick={() => {
                    dispatch({ type: 'increment', data: 1 });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'decrement', data: 1 });
                }}
            >
                -
            </button>
            <hr />
            <asyncContext.Provider value={{ dispatch }}>
                <AsyncIncrement />
            </asyncContext.Provider>
        </>
    );
}

// AsyncIncrement 组件
import React, { useContext } from 'react';

import { asyncContext } from '../../index';

export default function AsyncIncrement() {
    const { dispatch } = useContext(asyncContext);

    const asyncIncrement = () => {
        setTimeout(() => {
            dispatch({ type: 'asyncIncrement', data: 1 });
        }, 1000);
    };

    return (
        <div>
            <button onClick={asyncIncrement}>异步加</button>
        </div>
    );
}

```

****

**useCallback**

 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。（就是返回一个有记忆的函数），主要是用来做**`性能优化`**的

```jsx
const memoizedCallback = useCallback(() => {a++}, [a])
```

当这个依赖项不发生变化的时候，返回的函数总是一样的

```
import React, { memo, useCallback, useState } from 'react';

// memo 当你传入的值没有发生改变的话不会调用这个组件，浅比较，只有当地址值发生变化才会执行，每次对 props 进行一次浅比较
const Dwj = memo(({ increment, title }) => {
    console.log(increment);
    console.log(title);
    return (
        <>
            <button onClick={increment}>{title}</button>
        </>
    );
});

export default function Demo() {
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(0);

    // 当依赖项不发生改变的时候，永远都是返回一个有记忆的函数
    const callback = useCallback(() => {
        console.log(count);
        setCount(count + 1);
    }, [count]);

    const increment = () => {
        setFlag(!flag);
    };

    return (
        <div>
            <div>count:{count}</div>
            <button>{flag ? 'true' : 'false'}</button>
            <br />
            <Dwj increment={callback} title={'btn1'} />
            <br />
            <Dwj increment={increment} title={'btn2'} />
        </div>
    );
}

```

**useMemo**返回一个有记忆的值，当依赖项没有改变的时候返回的值都是一样的，只有当依赖项发生改变的话，才返回不是一样的值，也是用来做**`性能优化`**的。它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

```
import React, { useMemo, memo, useState } from 'react';

const Dwj = memo(({ info }) => {
    console.log(Math.random());
    return <div></div>;
});

function callbackCount(count) {
    let zCount = 0;
    for (let i = 0; i <= count; i++) {
        zCount = zCount + count;
    }
    return zCount;
}

export default function Demo() {
    const [count, setCount] = useState(1);
    const [flag, setFlag] = useState(false);
    /* 返回一个有记忆的值，当这个依赖项不发生改变的时候，返回的值都是一样的，我这里写的[]这里谁都不依赖，
       返回的值始终是一样的 
    */
    /* mac上： shift + option + a */
    const info = useMemo(() => {
        return { name: 'dwj', age: 21 };
    }, []);
    // const info = { name: '1' };

    const zSCount = useMemo(() => {
        return callbackCount(count);
    }, [count]);
    console.log(zSCount);

    const add = () => {
        setCount(count + 1);
    };

    const tf = () => {
        setFlag(!flag);
    };
    return (
        <>
            <h3>{zSCount}</h3>
            <button onClick={add}>{count}</button>
            <button onClick={tf}>{flag ? 'true' : 'false'}</button>
            <Dwj info={info} />
        </>
    );
}
```

**useRef**

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 ref 对象在组件的整个生命周期内持续存在

- **useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个（使用 React.createRef ，每次重新渲染组件都会重新创建 ref）**

```jsx
import React, { useEffect, useRef, useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);
    /* 
      `useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。
      返回的 ref 对象在组件的整个生命周期内持续存在
         因为在整个生命周期中保持不变（地址值不变）所以即使修改了内部，也不会影响

       最常用的 ref 是两种用法：
       用法1：引入 DOM (或者组件，但是需要是 class 组件)元素
       用法二：保存一个数据，这个对象在整个生命周期中可以保持不变（ref这个对象）！！！！！！
    */
    const ref = useRef(0); // useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（`initialValue`）。
    // console.log(ref.current); // 0

    const inputRef = useRef();
    // console.log(inputRef);
    // console.log(inputRef.current); // 这里取是取不到的，因为，执行这里的时候还没有 render 在 useEffect 中就能取到

    useEffect(() => {
        console.log(count);
        ref.current = count;
        // console.log(ref.current);

        console.log(inputRef.current); // 这里就可以取到 dom 节点了
        inputRef.current.focus();
    });
    return (
        <>
            <h3>上一次的值：{ref.current}</h3>
            <h3>这一次的值：{count}</h3>
            <button
                onClick={() => {
                    setCount(count + 10);
                }}
            >
                点击
            </button>
            <input ref={inputRef} />
        </>
    );
}
```

###  forwardRef

- **因为函数组件没有实例，所以函数组件无法像类组件一样可以接收 ref 属性**
- **forwardRef 可以在父组件中操作子组件的 ref 对象**
- **forwardRef 可以将父组件中的 ref 对象转发到子组件中的 dom 元素上**
- **子组件接受 props 和 ref 作为参数**



### useImperativeHandle

#### 主要是解决父组件获取子组件的数据或者调用子组件的里声明的函数。

- `useImperativeHandle`可以让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛
- **在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用**
- **父组件可以使用操作子组件中的多个 ref**

```javascript
useImperativeHandle(ref, createHandle, [deps])
```

1. `ref`
   需要被赋值的`ref`对象。
2. `createHandle`：
   `createHandle`函数的返回值作为`ref.current`的值。
3. `[deps]`
   依赖数组，依赖发生变化会重新执行`createHandle`函数。

```jsx
import React, { useEffect, useRef } from 'react'

import Demo2 from './Demo2'

export default function Demo() {
  const ref = useRef()

  useEffect(() => {
    console.log(ref);
    ref.current.inputRef.current('子船夫')
  })

  return (
    <>
      <Demo2 ref={ref}/>
    </>
  )
}
```

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export default forwardRef((props, ref) => {
  function fn(data) {
    console.log(data);
    console.log(1);
  }
  const inputRef = useRef(fn)
  const inputRef1 = useRef() 
  const div = useRef(122)

  // 主要是解决父组件获取子组件的数据或者调用子组件的里声明的函数。
  // 利用useImperativeHandle子组件可以向父组件输出任意数据。
  useImperativeHandle(ref, () => {
    return {
      inputRef,
      inputRef1,
      div,
    }
  })
  return (
    <>
      <input ref={inputRef1} type="text" />
      <div ref={div}></div>
    </>
  )
})
```





**useLayoutEffect**  (用到比较少，功能和 useEffect 相似)

​    useEffect 会在渲染的内容更新到 DOM 上后执行，不会阻塞 DOM 的更新

​    useLayoutEffect 会在渲染的内容更新到 DOM 上之前执行，会阻塞 DOM 的更新

​    如果我们希望在某些操作发生之后再更新 DOM，那么应该将这个操作放到 useLayoutEffect



补充下 `switch` 语句

```js
switch(表达式1){ // 表大式1和表达式2匹配上了就执行代码段
  case 表达式2:
    console.log('dwj')
    break
}

const type = 'increment'
switch(type) {
  case type === 'increment' || 'asyncIncrement':
    console.log(type)
    break
}
```
### 要不要使用 useMemo 和 useCallback

**useMemo 缓存的是一个变量，useCallback 缓存的是一个函数。在依赖没有变的时候返回的变量或者函数都是旧的那个**



#### 哪些情况一个组件会重新渲染？

  **1、组件自己的 state 变化**

  **2、父组件传递过来的 props 变化**

  **3、父组件重新渲染了**



#### useMemo 使用场景

**如果一些值的计算量很大，那么可以用 useMemo 来做一个缓存，只有依赖变化时才会重新计算，而不是每次渲染时都进行计算**

#### useCallback 使用场景

**1、对于需要传递`函数`给子组件的场合，不使用 useCallback 的话，子组件每次都会重新渲染**

**2、在调用节流、防抖函数时**

**3、在 useEffect（） 中使用外部创建的函数, 但不希望这个函数一直变化, 导致 useEffect 被重复触发**

父组件：

```jsx
import React, { useCallback, useMemo, useState } from 'react'

import Child from './Child'

export default function Demo() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)

    const [totle, setTotle] = useState(10)

    const headleClick = () => {
        setCount(count + 1)
    }

    /* 父组件给子组件传递函数的时候可以用 useCallback，如果没有用 useCallback 当父组件更新的时候子组件也会更新，
      但是子组件仅仅是更新而已，没有做别的事情 
        useCallback 是返回的一个函数，当依赖项没有变化的时候返回的这个函数永远是一样的  
    */
    const clickNum = useCallback(() => {
        setNum(num + 1)
    }, [num])

    /* 
        useMemo 它的一个参数是函数，函数要有一个返回值，这个返回值就是 useMemo 的返回值。
        当它的依赖项没有改变的时候返回的是原来的值
        如果一些值的计算量很大，那么可以用 useMemo 来做一个缓存，只有依赖变化时才会重新计算，而不是每次渲染时都进行计算
    */
    function t(value) {
        console.log('被调用了！！');
        let count = 0;
        for (let i = 1; i <= value; i++) {
            count += i
        }
        return count
    }

    // const totleCount = t(totle)
    const totleCount = useMemo(() => {
        return t(totle)
    }, [totle])

    const headleTotle = () => {
        setTotle(totle + 1)
    }

    return (
        <div>
            <div>count:{count}</div>
            <button onClick={headleClick}>+1</button>
            <button onClick={headleTotle}>+</button>
            <div>totleCount:{totleCount}</div>
            <hr />
            <Child click={clickNum} num={num} />
        </div>
    )
}

// export default function Hello() {
//     /* 
//         useCallback 结合 useEffect 使用
//     */
//     const [name, setName] = useState('');
//     // const consoleLog = () => {
//     //     console.log('没有被 useCallback 包裹的consoleLog执行了');
//     // };
//     // 这样的话 这个函数只有不会变化了
//     const consoleLog = useCallback(() => {
//         console.log('没有被 useCallback 包裹的consoleLog执行了');
//     }, [])
//     useEffect(() => {
//         consoleLog();
//         console.log("useEffect 执行了");
//     }, [consoleLog]);
//     console.log("render 生命周期触发了");
//     return (<div>
//         <input value={name} onChange={(e) => {
//             setName(e.target.value);
//         }} />
//     </div>);
// }
```

子组件：

```jsx
import React, { memo } from 'react'

const Child = memo(({ num, click }) => {
    const headleClickChild = () => {
        click()
    }

    console.log('被调用了');
    return (
        <>
            <div>num:{num}</div>
            <button onClick={headleClickChild}>+1</button>
        </>
    )
})

export default Child
```

### 个人观点

**1、在出现性能问题后，进行优化时可以考虑使用 useMemo 和 useCallback 对性能进行一定的优化**

**2、如果没有性能问题可以不用，这样可以更专注于代码本身逻辑**

 个人认为：

​       1、真的要做性能优化 useCallback 写在父组件里，因为传给子组件的是这个函数，在子组件加上 memo 函数，只有当 props

​             发生改变的时候（浅比较，比较的是地址值，而不会比较具体这个地址存的数据是否完全一致）子组件才会 render。

​       2、useCallback 使用场景：在将一个组件中的函数，传递给子组件进行回调使用时，使用 useCallback 对函数进行处理

​       3、不要把每一个回调函数封装在 useCallback() 里面，每个回调函数都应该被记住。 useCallback() 的这种用法会使组件变慢，从而          损害性能，因为 1、要额外执行 useCallback 函数。2、为了能判断 useCallback 要不要更新结果，还要在内存保存上一次的依赖。 3、如果我们的 useCallback 返回的函数依赖了组件其他的值，由于闭包的特性，他们也会一直存在而不被销毁。

