<template>
  <div id="editor-css" class="editor">
    <header>
      <span class="icon-hash"></span> CSS
      <span v-show="expandSourceType !== 'css'" class="right icon-maximize-2" @click="$emit('onExpandClicked', 'css')"></span>
      <span v-show="expandSourceType === 'css'" class="right icon-minimize-2" @click="$emit('onShrinkClicked')"></span>
    </header>
    <codemirror
      v-model="source"
      :options="options"
      @input="onSourceChange">
    </codemirror>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";

import "codemirror/mode/css/css.js";
import "codemirror/theme/material.css";

export default {
  props: ['source', 'expandSourceType'],
  components: {
    codemirror
  },
  data() {
    return {
      options: {
        tabSize: 2,
        mode: "text/css",
        theme: "material",
        lineNumbers: true,
        smartIndent: true,
        lineWrapping: true
      }
    };
  },
  methods: {
    onSourceChange(source) {
      this.$emit("onChange", this.source);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
