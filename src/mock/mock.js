import Mock from "mockjs"

let dataList = [];
for(let i=0; i < 10; i++){
  dataList.push({
    id:i,
    title:Mock.Random.ctitle()
  })
}

// 抛出接口
let mock = {
  "/list"(){
    return dataList
  }
}
export default mock