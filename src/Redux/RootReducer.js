import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { userReducer } from "./Reducer";


const persistConfig = {
    key: 'root',
    storage: localStorage
}

const rootReducer = combineReducers({
    user: userReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)