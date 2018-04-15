<template>
  <div class="main-container">
    <NavComponent></NavComponent>
    <EditorsComponent></EditorsComponent>
  </div>
</template>

<script>
import NavComponent from "./nav/nav.vue";
import EditorsComponent from "./editors/editors.vue";
export default {
  components: {
    NavComponent,
    EditorsComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>
