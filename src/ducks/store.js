import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const composeEnhancers = composeWithDevTools({})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)

