<template>
  <div class="modal projects-modal">
    <div class="modal-inner">
      <header>
        List of projects
      </header>

      <section>
        <ul>
          <li v-for="project in projects" :key="project.id">
            <a :href="'/'+project._id">{{project.name}}</a>
          </li>
        </ul>
      </section>

      <footer>
        <button>ok</button>
      </footer>
    </div>
  </div>
</template>

<script src="./projects.modal"></script>
<style src="./projects.modal.scss" lang="sass" scoped></style>


