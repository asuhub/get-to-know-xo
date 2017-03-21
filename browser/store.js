import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const isBrowser = () => {
  try {
    return window;
  } catch (e) {
    return false;
  }
};

// Setup Redux middleware based on env
const middleware = [ thunkMiddleware ];
if (isBrowser() && window.location.host.slice(0, 9) === 'localhost') {
  middleware.push(createLogger());
}

export default createStore(
  rootReducer,
  applyMiddleware( ...middleware )
);

// const store = createStore( rootReducer, applyMiddleware( createLogger(), thunkMiddleware ) );

// export default store;

