/* eslint-disable import/namespace */
import { ADD_TRACK } from '../actions/tracks';
const initialState = {
  availableTracks: [],
  quries: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK:
      state.quries.push(action.searchResults.newQuery);
      if (state.quries.length > 5) {
        state.quries.shift();
      }
      return {
        ...state,
        availableTracks: state.availableTracks.concat(action.searchResults.searchResults),
        quries: state.quries,
      };
  }
  return state;
};
