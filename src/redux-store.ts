import {applyMiddleware, compose, createStore} from "redux";
import reducer, {AppActionTypes} from "./appReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState,AppActionTypes>)))
export type AppState= ReturnType<typeof reducer>


export default store

// @ts-ignore
window.store = store.getState()