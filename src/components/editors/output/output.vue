<template>
  <div id="editor-output" class="editor output">
    <header>
      <span v-show="expandSourceType !== 'output'" class="right icon-maximize-2" @click="$emit('onExpandClicked', 'output')"></span>
      <span v-show="expandSourceType === 'output'" class="right icon-minimize-2" @click="$emit('onShrinkClicked')"></span>
    </header>

    <div id="iframe-container"></div>
    <!-- <iframe id="iframe-output" v-if="iframeSource"></iframe> -->
  </div>
</template>

<script>
import { EventBus } from '../../event-bus';

export default {
  props: ["css", "js", "html", "expandSourceType"],

  mounted() {
    this.iframeContainer = document.getElementById('iframe-container');
  },

  created(){
    EventBus.$on('run', clickCount => {
      this.write();
    });
  },

  methods: {
    write(){

      let iframeSource = `<iframe id="iframe-output"></iframe>`;
      this.iframeContainer.innerHTML = iframeSource;

      this.source = '';
      this.source += `<style>${this.css || ''}<\/style>`;
      this.source += this.html || '';
      this.source += `<script>${this.js || ''}<\/script>`;

      let window = document.getElementById(
        "iframe-output"
      ).contentWindow;
      window.document.open();
      window.document.write(this.source);
      window.document.close();

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
iframe {
  border: 0;
  height: 100%;
  width: 100%;
}
</style>
