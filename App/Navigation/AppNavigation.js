import { StackNavigator } from 'react-navigation'
import TrailScreen from '../Containers/TrailScreen'
import TrailsScreen from '../Containers/TrailsScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TrailScreen: { screen: TrailScreen },
  TrailsScreen: { screen: TrailsScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TrailsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
