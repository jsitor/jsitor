import ProjectsApi from "../../../services/projects-api";
import BaseModalComponent from "../base/base.modal.vue";

export default {

  components: {
    BaseModalComponent
  },

  data () {
    return {
      projects: []
    }
  },

  mounted () {
    ProjectsApi.get().then(projects => this.projects = projects);
  },

  methods: {
    close() {
      this.$emit('close');
    },

    openProject(project) {
      window.open('/' + project.userId + '/' + project._id, '_self');
    },

    deleteProject(project) {
      ProjectsApi.delete(project).then(() => {
        // this.projects.slice
      });
    }
  }
}