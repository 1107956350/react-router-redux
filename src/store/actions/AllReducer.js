// 外部操作redux数据
let initState = {
  list:["张三","赵四"],
  allList:[]
}
let actions = {
  // 通过设置的actiont.type命名函数，并进行下一步操作
  "ALL_LIST"(state,action){
    state.allList = action.value
  }
}

function Reducer(state=initState,action){
  // 首先shenkaob一份数据，否则引用型数据比较相同地址可能回出错
  let newState = {...state}
  // 如果actions[action.type],如果存在则向actions[action.type]中传入参数
  actions[action.type]&&actions[action.type](newState,action)
  // 返回新的数据
  return newState
}
export default Reducer