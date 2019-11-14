import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from "redux-saga";
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { watchAgeUp, watchAgeDown, watchToggle } from "./sagas/saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeDown)
sagaMiddleware.run(watchAgeUp)
sagaMiddleware.run(watchToggle)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

