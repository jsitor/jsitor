<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    (function(d, script) {
      script = d.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.onload = function() {
        // remote script has loaded
      };
      script.src = "https://togetherjs.com/togetherjs-min.js";
      d.getElementsByTagName("head")[0].appendChild(script);
    })(document);
  }
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

a{
  text-decoration: none;
  color: inherit;
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

.right{
  float: right;
}
</style>
