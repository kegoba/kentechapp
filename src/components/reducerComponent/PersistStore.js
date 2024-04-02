import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {AppReducer} from './ProductReducer' 

const persistConfig = { 
    key: 'root',
    storage: storage,
    whitelist: ['cart', 'user', 'cart_info'], 
   blacklist: ['navigation'] 

}

const persistedReducer = persistReducer(persistConfig, AppReducer)

const store = createStore(
    persistedReducer, 
    applyMiddleware() 
)

const persistor = persistStore(store); 

export { store, persistor }