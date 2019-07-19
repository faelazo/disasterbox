import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import LoadedSiteReducer from './LoadedSiteReducer';

const Reducers = combineReducers({
  CounterReducer,
  LoadedSiteReducer
})

export default Reducers;