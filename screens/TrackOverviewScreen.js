/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Search from '../components/search';
import { useSelector } from 'react-redux';
import TracksResults from '../components/tracksResults';
import { Audio } from 'expo-av';
import PropTypes from 'prop-types';
const TrackOverviewScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const select = useSelector((state) => state.tracks.availableTracks);
  useEffect(() => {
    if (select.length !== 0) {
      setIsLoading(false);
    }
  }, [select]);
  const [playBackObj, setPlayBackObj] = useState(null);
  const [soundObj, setSoundkObj] = useState(null);
  const [currAudio, setCurrAudio] = useState('');
  const handleAudioPress = async (track) => {
    if (soundObj === null) {
      const playbackObj = new Audio.Sound();
      setCurrAudio(track.streamUrl);
      const status = await playbackObj.loadAsync(
        { uri: `${track.streamUrl}?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE` },
        { shouldPlay: true },
      );
      setPlayBackObj(playbackObj);
      return setSoundkObj(status);
    }
    if (soundObj.isLoaded && currAudio !== track.streamUrl) {
      await playBackObj.setStatusAsync({ shouldPlay: false });
      const playbackObj = new Audio.Sound();
      const status2 = await playbackObj.loadAsync(
        { uri: `${track.streamUrl}?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE` },
        { shouldPlay: true },
      );
      setCurrAudio(track.streamUrl);
      setPlayBackObj(playbackObj);
      return setSoundkObj(status2);
    }
  };
  const handleSearch = () => {
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <Search handleSearch={handleSearch} />
      {isLoading && (
        <View style={styles.active}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {select.length !== 0 && (
        <ScrollView>
          {select.map((track) => (
            <TracksResults
              key={track.id}
              playCount={track.playCount}
              id={track.id}
              handleAudioPress={handleAudioPress}
              image={track.image}
              title={track.title}
              artist={track.artist}
              streamUrl={track.streamUrl}
            />
          ))}
        </ScrollView>
      )}
      {select.length === 0 && !isLoading && <Text style={styles.text}>No Results were found</Text>}
      <TouchableOpacity
        style={styles.recentQueries}
        onPress={() => props.navigation.navigate('RecentQueries')}
      >
        <Text style={styles.buttonText}>Recent Queries</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  recentQueries: {
    height: 80,
    width: '80%',
    backgroundColor: 'grey',
    bottom: 5,
    alignSelf: 'center',
    borderRadius: 5,
    alignContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 40,
  },
  active: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
TrackOverviewScreen.navigationOptions = () => ({
  headerTitle: 'Sound Cloud Player',
});
TrackOverviewScreen.prototype = {
  select: PropTypes.object,
  isLoading: PropTypes.bool,
  currAudio: PropTypes.string,
  handleAudioPress: PropTypes.func,
  handleSearch: PropTypes.func,
};
export default TrackOverviewScreen;
