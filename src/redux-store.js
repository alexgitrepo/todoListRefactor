import {compose, createStore} from "redux";
import reducer from "./appReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



let store = createStore(reducer, composeEnhancers())



export default store

window.store = store.getState()