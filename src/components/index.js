import React, { Component } from 'react'
import { connect } from "react-redux"
import { List } from "../actions/DataList"
import RouterView from "../router/RouterView"
class Item extends Component {

  componentDidMount() {
    // 执行setList

      this.props.setList()
  }
  render() {
    // 获取到的redux数据，通过this.props
    console.log(this.props.list)
    return (
      <div>
        一级路由
        <RouterView routes={this.props.routes} />
      </div>
    )
  }
}

let mapStateToProps = state => {
  //获取redux仓库里面的数据
  return {
    list:state.AllReducer.allList
  }
}
let mapDispatchToProps = dispatch => {
  return {
    setList() {
      // 以setList方法获取数据列表，并以action中dispatch返回到redux中
      // 接收参数
      dispatch(List)
    }
  }
}
// react—redux中connect方法及接受参数
export default connect(mapStateToProps,mapDispatchToProps)(Item)