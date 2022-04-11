const state = {
  appName: process.env.VUE_APP_NAME
};

const getters = {
  appName: state => state.appName
};

export default {
  state,
  getters,
};
