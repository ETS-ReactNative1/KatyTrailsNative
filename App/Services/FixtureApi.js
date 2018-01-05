export default {
  // Functions return fixtures
  getTrails: () => {
    return {
      ok: true,
      data: require('../Fixtures/trails.json')
    }
  },
}


/*
constructor (props) {
  super(props)
  const dataObjects = []
  const rowHasChanged = (r1, r2) => r1 !== r2
  const sectionHeaderHasChanged = (s1, s2) => s1 !== s2
  this.ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

  this.state = {
    dataSource: this.ds.cloneWithRowsAndSections(dataObjects)
  }
  this.getData()
}

getData = async () => {
  const api = API.create()
  const trails = await api.getTrails()
  this.setState({
    dataSource: this.ds.cloneWithRowsAndSections(trails.data)
  })
}
*/
