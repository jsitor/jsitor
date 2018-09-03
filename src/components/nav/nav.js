import { NAV_TOP_ACTIONS, NAV_BOTTOM_ACTIONS } from "./nav.constants";
import Auth from '../../services/auth';
import { NAV_ACTIONS } from "../../app.constants";

export default {

  data: () => {
    return {
      topNavActions: NAV_TOP_ACTIONS,
      bottomNavActions: NAV_BOTTOM_ACTIONS
    };
  },

  mounted() {

  },

  methods: {
    callback(action) {
      if (action === NAV_ACTIONS.LOGIN) {
        Auth.login();
      } else {
        this.$emit(action.toLowerCase());
      }
    }
  }
};