class ProjectUtils {

  getId() {
    return location.pathname.split('/')[2]
  }
}

export default new ProjectUtils();

