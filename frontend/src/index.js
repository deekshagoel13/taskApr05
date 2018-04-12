import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import {routerMiddleware} from 'react-router-redux';
const history=createHistory();
const Store=createStore(rootReducer,applyMiddleware(thunk,routerMiddleware(history)));
ReactDOM.render(
    <Provider store={Store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
