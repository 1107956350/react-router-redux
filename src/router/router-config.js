import Item from "../components/index"
import Style from "../components/style"

let routes = [
  // 一级路由
  {
    path:"/item",
    component:Item,
    children:[{//二级路由配置
      path:"/item/style",
      component:Style
    }]
  },
  {
    path:"/",
    redirect:"/item"
  }
]

export default routes