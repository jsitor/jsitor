<template>
  <div id="editor-output" class="editor output">
    <iframe id="iframe-output"></iframe>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus';

export default {
  props: ["css", "js", "html"],

  mounted() {
    this.window = document.getElementById(
      "iframe-output"
    ).contentWindow;
  },

  // watch: {
  //   html() {
  //     this.write();
  //   },
  //   css() {
  //     this.write();
  //   },
  //   js() {
  //     this.write();
  //   }
  // },

  created(){
    EventBus.$on('run', clickCount => {
      this.write();
    });
  },

  methods: {
    write(){
      this.window.document.open();
      let htmlSource = '';
      htmlSource += `<style>${this.css || ''}<\/style>`;
      htmlSource += `<script>${this.js || ''}<\/script>`;
      htmlSource += this.html || '';

      this.window.document.write(htmlSource);
      this.window.document.close();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  border: 0;
  height: 100%;
  width: 100%;
}
</style>
