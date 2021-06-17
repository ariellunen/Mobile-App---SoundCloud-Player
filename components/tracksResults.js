/* eslint-disable no-dupe-keys */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
const TracksResults = (props) => (
  <View style={styles.track}>
    <View style={styles.imageCo}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
    </View>
    <View style={styles.details}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.subText}>
        <Text style={styles.artist}>{props.artist}</Text>
        <Text style={styles.artist}>Play Count - {props.playCount}</Text>
      </View>
    </View>
    <View style={styles.button}>
      <TouchableOpacity onPress={() => props.handleAudioPress(props)}>
        <Ionicons title="play" name="play-circle-outline" color="black" size={40} />
      </TouchableOpacity>
    </View>
  </View>
);
const styles = StyleSheet.create({
  track: {
    flex: 1,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginRight: 16,
  },
  imageCo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  details: {
    marginLeft: 3,
    width: '80%',
  },
  title: {
    fontSize: 14,
    width: '80%',
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 4,
    borderWidth: 0,
    width: '85%',
  },
  artist: {
    fontSize: 12,
  },
  button: {
    borderWidth: 0,
    marginLeft: -26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
TracksResults.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  playCount: PropTypes.number.isRequired,
  handleAudioPress: PropTypes.func.isRequired,
};

export default TracksResults;
