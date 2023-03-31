import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { todoReducer } from './todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  items: todoReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
