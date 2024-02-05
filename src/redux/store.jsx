import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
// import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { bikesReducer } from './reducers/bikesReducer';
import { alertsReducer } from './reducers/alertsReducers';
import { bookingsReducer } from './reducers/bookingsReducer';


const composeEnhancers = composeWithDevTools({
  
});

const rootReducer = combineReducers({
    bikesReducer,
    alertsReducer,
    bookingsReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store