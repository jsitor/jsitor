import { NAV_TOP_ACTIONS, NAV_BOTTOM_ACTIONS } from "../../app.constants";
import Auth from '../../services/auth';
import Gist from '../../services/gist';

export default {

  data: () => {
    return {
      topNavActions: NAV_TOP_ACTIONS,
      bottomNavActions: NAV_BOTTOM_ACTIONS
    };
  },

  mounted() {

    if (Auth.token) {
      Gist.get().then(res => {
        this.isLoggedIn = true;
      });
    } else if (window.location.search.length > 10) {
      Auth.code = window.location.search.split('?code=')[1];
      Auth.authenticate().then(res => {
        this.isLoggedIn = true;
      });
    }

  },

  methods: {
    callback(action) {
      console.log(action);
      this.$emit(action.toLowerCase());
      //should be handled inside either here or on top
    }
  }
};