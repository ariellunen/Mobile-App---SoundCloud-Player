import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import TrackNavigation from './navigation/trackNavigation';
import trackReducer from './store/reducers/tracks';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  tracks: trackReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <TrackNavigation />
    </Provider>
  );
}
