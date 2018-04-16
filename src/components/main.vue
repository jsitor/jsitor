<template>
  <div class="main-container">
    <EditorsComponent></EditorsComponent>
  </div>
</template>

<script>
import EditorsComponent from "./editors/editors.vue";
export default {
  components: {
    EditorsComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  height: 100%;
  width: 100%;
}
</style>
