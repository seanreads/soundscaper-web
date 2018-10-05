import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { seamlessImmutableReconciler, seamlessImmutableTransformer } from 'redux-persist-seamless-immutable'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers'
import rootSaga from 'sagas'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformer]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (initialState = {}) => {
  const enhancers = []
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  const sagaMiddleware = createSagaMiddleware()
  enhancers.push(applyMiddleware(sagaMiddleware))

  const store = createStore(persistedReducer, initialState, composeEnhancers(...enhancers))

  sagaMiddleware.run(rootSaga, store.dispatch)

  const persistor = persistStore(store)

  return { persistor, store }
}
