import ProjectsApi from "../../../services/projects";

export default {

  data () {
    return {
      projects: []
    }
  },

  mounted () {
    ProjectsApi.get().then(projects => this.projects = projects);
  }
}