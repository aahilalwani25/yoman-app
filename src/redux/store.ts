import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import * as SecureStore from "expo-secure-store"

export const reduxStorage = {
    setItem: async(key:any, value:any) => {
        SecureStore.setItemAsync(key, value);
        return Promise.resolve(true)
    },
    getItem: async(key:any) => {
        const value = await SecureStore.getItemAsync(key);
        return value || null;
    },
    removeItem: async(key:any) => {
        await SecureStore.deleteItemAsync(key);
        return Promise.resolve()
    },
  }

const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    whitelist: ['user'], // Specify slices to persist
    //blacklist:['fetchPost','updateReaction','user'] // Alternatively, you could use `blacklist` to exclude certain slices

}

const rootReducer = combineReducers({
    
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor= persistStore(store);