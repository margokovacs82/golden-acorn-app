import { combineReducers } from 'redux';
import imgReducer from './acorn_img_reducer';
import acornReducer from './acorn_reducer';

const rootReducer = combineReducers({
  acornReducer,
  imgReducer,
});

export default rootReducer;
