import ProjectsApi from "../../../services/projects-api";
import BaseModalComponent from "../base/base.modal.vue";

export default {

  components: {
    BaseModalComponent
  },

  data () {
    return {
      name: '',
      description: ''
    }
  },

  methods: {
    close() {
      this.$emit('close');
    },

    create() {

      if (!this.name) {
        alert('Please enter the project name properly');
        return;
      }

      ProjectsApi.create({
        name: this.name,
        description: this.description
      }).then(res => {
        this.close();
        window.open(`${location.origin}/${res.userId}/${res._id}`, '_self');
      });
    }
  }
}