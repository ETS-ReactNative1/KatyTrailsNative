import { StackNavigator } from 'react-navigation'
import TrailScreen from '../Containers/TrailScreen'
import TrailsScreen from '../Containers/TrailsScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  TrailScreen: { screen: TrailScreen },
  TrailsScreen: { screen: TrailsScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  initialRouteName: 'TrailsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
