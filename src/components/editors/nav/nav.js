import { NAV_TOP_ACTIONS, NAV_BOTTOM_ACTIONS } from "../../../app.constants";

export default {

  data: () => {
    return {
      topNavActions: NAV_TOP_ACTIONS,
      bottomNavActions: NAV_BOTTOM_ACTIONS
    };
  },

  methods: {
    callback(action) {
      //should be handled inside either here or on top
    }
  }
};