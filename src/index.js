import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/scss/bootstrap.scss';
import './scss/index.scss';

import App from './components/App.jsx';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
