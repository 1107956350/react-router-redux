import Request from "../util/Request"
// 异步接受数据，传入接口列表，并通过setList方法传入redux
export function List(next) {
   Request("/list").then(res=>{
    next({
      type:"ALL_LIST",
      value:res
    })
  })
}