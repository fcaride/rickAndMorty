import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import charactersReducer from 'slices/characters.slice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  characters: charactersReducer,
  // add more reducers
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
})

const store = configureStore({
  reducer: persistedReducer,
  // eslint-disable-next-line no-undef
  middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
})

const persistor = persistStore(store)

export { store, persistor }
