import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const Main = (
    <Provider store={store}>
        {Routes}
    </Provider>
);

ReactDOM.render(Main, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
