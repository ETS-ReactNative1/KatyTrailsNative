export default {
  // Functions return fixtures
  getTrails: () => {
    return {
      ok: true,
      data: require('../Fixtures/trails.json')
    }
  },
}
