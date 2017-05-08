import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewItem from './components/NewItem';
import Items from './components/Items';
import ActiveItem from './components/ActiveItem';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, reduxExtension)}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/items" component={Items} />
        <Route path="/new-item" component={NewItem} />
        <Route path="/items/:id" component={ActiveItem} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
