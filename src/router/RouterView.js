import React, { Component } from 'react'
import { Switch,Redirect,Route } from "react-router-dom"
export default class RouterView extends Component {
  render() {
    // 结构传入的参数
    let { routes } = this.props
    // 判断数据中是否包含redirect项，返回不同的数组
    let redirect = routes.filter(v=>v.redirect)
    let newRoutes = routes.filter(v=>!v.redirect)
    return (
      // Switch只做单一匹配
      <Switch>
        {
          // 非重定向页面渲染
          newRoutes.map((v,i)=>(
            <Route key={i} path={v.path} render={props=>{
              if(v.children){
                // 如果二级路由存在，则传入参数递归渲染
                return <v.component {...props} routes={v.children} />
              }else{
                // 没有二级路由，非路由显示页面缺少this.props部分属性，所以把props传递到页面
                return <v.component {...props} />
              }
            }} />
          ))
        }
        {
          // 重定向页面渲染
          redirect.map((v,i)=>{
            return <Redirect key={i} from={v.path} to={v.redirect} />
          })
        }
      </Switch>
    )
  }
}
