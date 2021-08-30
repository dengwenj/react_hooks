export default function reducer(state, action) {
  console.log(state)
  const { type, data } = action
  console.log(type, data)
  switch (type) {
    case 'jia':
      return {...state, count: state.count + 1 }

    case 'jian':
      return {...state, count: state.count - 1 }

    default:
      return state
  }
}