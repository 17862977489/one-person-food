export default {
  changeCity (state, city) {
    state.city = city
  },
  changeDownload (state, flag) {
    if (flag === false) {
      try {
        localStorage.download = true
      } catch (e) {}
    }
    state.showDownload = flag
  }
}
