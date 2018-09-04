import {
  NAV_TOP_ACTIONS,
  NAV_BOTTOM_ACTIONS_USER,
  NAV_BOTTOM_ACTIONS_GUEST
} from "./nav.constants";

import Auth from '../../services/auth';
import {EventBus} from '../event-bus';
import {
  NAV_ACTIONS
} from "../../app.constants";
import ProjectsApi from "../../services/projects";

export default {

  data: () => {
    return {
      topNavActions: NAV_TOP_ACTIONS,
      bottomNavActions: NAV_BOTTOM_ACTIONS_GUEST,
      profile: {}
    };
  },

  mounted () {
    Auth.getProfile().then(res => {
      this.profile = res;
      this.bottomNavActions = NAV_BOTTOM_ACTIONS_USER;
      EventBus.$emit(NAV_ACTIONS.LOGGED_IN.toLowerCase())
    });
  },

  methods: {
    callback (action) {
      if (action === NAV_ACTIONS.LOGIN) {
        Auth.login();
      } else if (action === NAV_ACTIONS.NEW) {
        ProjectsApi.create({
          name: prompt('Project name?')
        }).then(res => {
          window.open(`${location.origin}/${res._id}`, '_self');
        });
      } else {
        EventBus.$emit(action.toLowerCase());
      }
    }
  }
};
