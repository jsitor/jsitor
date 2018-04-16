<template>
  <div id="editor-output" class="editor output">
    <header>
      <span v-show="expandSourceType !== 'output'" class="right icon-maximize-2" @click="$emit('onExpandClicked', 'output')"></span>
      <span v-show="expandSourceType === 'output'" class="right icon-minimize-2" @click="$emit('onShrinkClicked')"></span>
    </header>
    <iframe id="iframe-output"></iframe>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus';

export default {
  props: ["css", "js", "html", "expandSourceType"],

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
      htmlSource += this.html || '';
      htmlSource += `<script>${this.js || ''}<\/script>`;

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
