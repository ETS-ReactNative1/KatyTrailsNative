import React, { Component } from 'react'
import { ScrollView, Text, Button, Linking, TouchableOpacity, View, WebView } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps';

import styles from './Styles/TrailScreenStyle'

class TrailScreen extends Component {
   constructor (props) {
     super(props)
     this.state = {
       name: this.props.name,
       description: this.props.description,
       maplink: this.props.maplink
     }
   }

   static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
  });

  render () {
    return (
      <View style={styles.container}>
      <WebView source={{uri: this.props.navigation.state.params.maplink}} style={{flex: 2}}/>
        <ScrollView style={styles.section}>
          <Text>{this.props.navigation.state.params.description}</Text>
          <TouchableOpacity style={styles.row} onPress={() => Linking.openURL(this.props.navigation.state.params.maplink).catch(err => console.error('An error occurred', err))}>
            <Text style={styles.boldLabel}>Link to Map</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailScreen)
