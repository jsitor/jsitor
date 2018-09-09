<template>
  <BaseModalComponent class="projects-modal" @close="close()">
    <template slot="header"><i class="icon icon-box"></i> Projects
</template>

    <ul>

      <li v-for="project in projects" :key="project.id">

        <div class="name" @click="openProject(project)">
          {{project.name}}
        </div>

        <div class="action">
          <i class="icon icon-trash" @click="deleteProject(project)"></i>
        </div>
      </li>
    </ul>

  </BaseModalComponent>
</template>

<script src="./projects.modal.js">

</script>

<style src="./projects.modal.scss" lang="scss">

</style>


