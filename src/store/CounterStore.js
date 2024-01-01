// src/store/index.js
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import counterReducer from '../reducers/CounterReducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
