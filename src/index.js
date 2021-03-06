import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import ingredientDataSaga from './sagas/ingredientDataSaga';

import reducer from './reduxStore/Reducer';


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer ,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(ingredientDataSaga)


ReactDOM.render(
    <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </Provider>
  
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
