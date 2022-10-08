// 合并所有的reducer
import { combineReducers } from 'redux'

import layout from './layout';

const rootReducer = combineReducers({
    layout
})

export default rootReducer