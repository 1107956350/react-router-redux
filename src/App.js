import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/index"
// 路由页面渲染及显示页面
import RouterView from "./router/RouterView"
// 路由页面配置
import routes from "./router/router-config"
function App() {
  return (
// react-redux中Provider包住子组件，并传递store仓库
    <Provider store={store}>
      {/* 路由页面 */}
      <BrowserRouter>
        <div className="App">
          {/* 显示路由页面及传递路由配置 */}
         <RouterView routes={routes} />
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
