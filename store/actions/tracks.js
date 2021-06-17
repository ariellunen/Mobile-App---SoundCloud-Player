export const ADD_TRACK = 'ADD_TRACK';
import Track from '../../models/track';
import Query from '../../models/query';
export const fetchTrack = (trackName) => async (dispatch) => {
  const response = await fetch(
    'http://api.soundcloud.com/tracks.json?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE&q=' +
      trackName,
  );
  const resData = await response.json();
  const searchResults = [];
  const newQuery = new Query(trackName);
  for (const key in resData) {
    searchResults.push(
      new Track(
        Math.floor(Math.random() * Date.now()),
        resData[key].title,
        resData[key].user.username,
        resData[key].artwork_url,
        resData[key].playback_count,
        resData[key].stream_url,
      ),
    );
  }
  dispatch({
    type: ADD_TRACK,
    searchResults: { searchResults, newQuery },
  });
};
