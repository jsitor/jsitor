let _project = null;

export default {

  get() {
    return _project;
  },

  set(project) {
    _project = project;
  },

  clear() {
    _project = null;
  }
}