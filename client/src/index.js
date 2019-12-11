import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Landing from './components/landing/Landing';
import Verification from './components/verification/Verification';
import Confirmation from './components/confirmation/Confirmation';
import './index.css';

// router history
export const history = createBrowserHistory();

// redux config
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// app render
render(
    <Router history={history}>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" render={() => <Landing history={history} />}/>
                <Route exact path="/verify" render={() => <Verification history={history} />}/>
                <Route exact path="/confirmation" render={() => <Confirmation />}/>
            </Switch>
        </Provider>
    </Router>, 
    document.getElementById('root')
)