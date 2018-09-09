class ProjectsApi {

  get(id) {
    return fetch(`/api/projects/${id || ''}`, {
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => res.json());
  }

  create(data) {
    return fetch('/api/projects', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  }

  update(data) {
    return fetch('/api/projects', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  }

  delete(data) {
    return fetch('/api/projects', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ id: data._id })
    }).then(res => res.json());
  }
}

export default new ProjectsApi();
