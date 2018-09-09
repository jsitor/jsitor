import ProjectsModalComponent from '../modals/projects/projects.modal.vue';
import NewProjectModalComponent from '../modals/new-project/new-project.modal.vue';

import {
  NAV_TOP_ACTIONS,
  NAV_BOTTOM_ACTIONS_USER,
  NAV_BOTTOM_ACTIONS_GUEST
} from "./nav.constants";

import Auth from '../../services/auth';
import {
  EventBus
} from '../event-bus';

import {
  NAV_ACTIONS
} from "../../app.constants";

export default {

  components: {
    ProjectsModalComponent,
    NewProjectModalComponent
  },

  data: () => {
    return {
      topNavActions: NAV_TOP_ACTIONS,
      bottomNavActions: NAV_BOTTOM_ACTIONS_GUEST,
      profile: {},
      showProjects: false,
      showNewProject: false
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
        this.showNewProject = true;
      } else if (action === NAV_ACTIONS.PROJECTS) {
        this.showProjects = true;
      } else {
        EventBus.$emit(action.toLowerCase());
      }
    }
  }
};
