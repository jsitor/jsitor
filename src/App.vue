<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./styles/style.css";

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  /* -webkit-font-smoothing: antialiased; */
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
