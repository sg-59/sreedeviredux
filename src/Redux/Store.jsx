// import {configureStore} from '@reduxjs/toolkit'
// import userSlice from './Fakeapislice'
// export default configureStore({
//     reducer:{
//         Userdata:userSlice
//     }
// })

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// import App from './App'
// import rootReducer from './reducers'

import Userslicepage from './Fakeapislice'
import Demopage from './Secondslice'

const persistConfig = {
  key: 'SreedeviData',
  version: 1,
  storage,
}

const Rootreducer=combineReducers({Userdata:Userslicepage,Demodata:Demopage})

const persistedReducer = persistReducer(persistConfig, Rootreducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root'),
// )