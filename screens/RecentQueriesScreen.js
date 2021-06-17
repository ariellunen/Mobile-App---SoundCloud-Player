import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
const RecentQueriesScreen = () => {
  const searches = useSelector((state) => state.tracks.quries);
  const [isSearches, setIsSearches] = useState(false);
  useEffect(() => {
    if (searches.length !== 0) {
      setIsSearches(true);
      searches.reverse();
    }
  }, [searches]);
  return (
    <View style={styles.container}>
      {isSearches ? (
        <FlatList
          data={searches}
          renderItem={({ item, index }) => (
            <Text style={styles.text}>
              {index + 1}. {item.title}
            </Text>
          )}
        />
      ) : (
        <Text style={styles.text}>No Queries Were Found</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginLeft: 15,
  },
});
RecentQueriesScreen.navigationOptions = () => ({
  headerTitle: 'Recent Queries',
});
export default RecentQueriesScreen;
