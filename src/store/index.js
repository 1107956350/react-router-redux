import { createStore,applyMiddleware,combineReducers } from "redux"
import thunk from "redux-thunk"
// 引入外部reducer
import AllReducer from "./actions/AllReducer"
// reducer合并
let reducers = combineReducers({
  AllReducer
})

// store中接受参数reducer，及appliMiddleware(thunk)中间件，使dispatch更强大可以接受参数
const store = createStore(reducers,applyMiddleware(thunk))

export default store