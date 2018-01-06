import React, { Component } from 'react'
import { ScrollView, Text, Button } from 'react-native'
import { connect } from 'react-redux'

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
      <ScrollView style={styles.container}>
        <Text>Trail View</Text>
        <Text>{this.props.navigation.state.params.name}</Text>
        <Text>{this.props.navigation.state.params.description}</Text>
        <Text>Blah Blah</Text>
      </ScrollView>
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
