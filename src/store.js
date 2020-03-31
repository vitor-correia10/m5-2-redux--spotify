import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const middleware = [thunk];

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
