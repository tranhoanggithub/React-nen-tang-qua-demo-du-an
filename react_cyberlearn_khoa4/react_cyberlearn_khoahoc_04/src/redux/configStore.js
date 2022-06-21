import {applyMiddleware, combineReducers,createStore} from 'redux';
//middleware saga
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './saga/rootSaga';

const middleWareSaga = createSagaMiddleware();






const rootReducer = combineReducers({
    //reducer khai báo tại đây
})


 const store = createStore(rootReducer,applyMiddleware(middleWareSaga));

 //Gọi saga
 middleWareSaga.run(rootSaga);

 export default store;

