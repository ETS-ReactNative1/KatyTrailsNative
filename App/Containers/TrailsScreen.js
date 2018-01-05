import React, { Component } from 'react'
import { View, ListView, Text, TouchableOpacity, Clipboard, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/TrailsScreenStyle'

class TrailsScreen extends Component {
  constructor (props) {
    super(props)
    const dataObjects = require('../Fixtures/trails.json')
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects)
    }
  }

  renderRow (rowData, sectionID) {
    return (
      <TouchableOpacity style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.name}</Text>
        <Text style={styles.label}>{rowData.id}</Text>
      </TouchableOpacity>
    )
  }

  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderHeader (data, sectionID) {
    switch (sectionID) {
      case 'Trails':
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>All Trails</Text></View>
      default:
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>Second Section</Text></View>
    }
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
        <RoundedButton
          text="Go to LaunchScreen"
          onPress={() =>
            navigate('LaunchScreen', { name: 'Launch' })
          }
        />
          <ListView
            style={styles.section}
            renderSectionHeader={this.renderHeader}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            onLayout={this.onLayout}
            renderRow={this.renderRow}
            enableEmptySections
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(TrailsScreen)
