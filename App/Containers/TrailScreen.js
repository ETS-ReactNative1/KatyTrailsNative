import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/TrailScreenStyle'

class TrailScreen extends Component {
   constructor (props) {
     super(props)
     this.state = {}
   }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>TrailScreen Container</Text>
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
