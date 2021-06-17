import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TrackOverviewScreen from '../screens/TrackOverviewScreen';
import RecentQueriesScreen from '../screens/RecentQueriesScreen';
const TrackNavigation = createStackNavigator({
  TrackOverview: TrackOverviewScreen,
  RecentQueries: RecentQueriesScreen,
});
export default createAppContainer(TrackNavigation);
