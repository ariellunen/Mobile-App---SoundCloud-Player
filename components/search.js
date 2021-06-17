import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import * as trackActions from '../store/actions/tracks';
import PropTypes from 'prop-types';
const Search = (props) => {
  const inputRef = React.createRef();
  const dispatch = useDispatch();
  return (
    <View style={styles.wrapper}>
      <TextInput
        ref={inputRef}
        clearButtonMode="while-editing"
        style={styles.textInput}
        placeholder="search"
        onSubmitEditing={({ nativeEvent }) => {
          props.handleSearch();
          dispatch(trackActions.fetchTrack(nativeEvent.text));
          inputRef.current.clear();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  textInput: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 8,
  },
});
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
