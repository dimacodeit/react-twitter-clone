import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthSlice';
import newsReducer from './reducers/NewsSlice';
import tweetReducer from './reducers/TweetSlice';

const rootReducer = combineReducers({
  authReducer,
  newsReducer,
  tweetReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
