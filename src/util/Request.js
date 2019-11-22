import mock from "../mock/mock"

let Request = (url)=>{
  // 通过url返回值请求数据并返回抛出
  return new Promise(res=>{
    res(mock[url]())
  })
}

export default Request