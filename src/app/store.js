import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice'
import { createStore, combineReducers, applyMiddleware} from 'redux';


export default configureStore({
  reducer: {
    openAffinityModal: modalReducer
  },
});
