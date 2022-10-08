import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {  persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import reducer from './reducer';

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    blacklist: []
}

// 创建store 传入合并后的reducer
const store = createStore(persistReducer(persistConfig, reducer),composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store)

// 暴露出store
export {
    store,
    persistor
}