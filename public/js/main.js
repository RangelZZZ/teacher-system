import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import rootReducer from './reducer/login-reducer';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App'
import TeacherLoginForm from './containers/TeacherLoginForm';
import LoginSuccess from './component/LoginSuccess';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={TeacherLoginForm}/>
                <Route path="/loginSuccess" component={LoginSuccess}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('content')
);




