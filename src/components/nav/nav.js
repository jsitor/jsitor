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
import ProjectsModalComponent from './projects/projects.modal.vue';

export default {

  components: {
    ProjectsModalComponent
  },

  data: () => {
    return {
      topNavActions: NAV_TOP_ACTIONS,
      bottomNavActions: NAV_BOTTOM_ACTIONS_GUEST,
      profile: {},
      showProjects: false
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
          console.log(res);
          window.open(`${location.origin}/${res.userId}/${res._id}`, '_self');
        });
      } else if (action === NAV_ACTIONS.PROJECTS) {
        this.showProjects = true;
      } else {
        EventBus.$emit(action.toLowerCase());
      }
    }
  }
};
