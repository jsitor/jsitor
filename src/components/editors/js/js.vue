<template>
  <div id="editor-js" class="editor">
    <header>
      <span class="icon-hash"></span> JavaScript
      <span class="right icon-maximize-2"></span>
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

import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/material.css";

export default {
  props: ['source'],
  components: {
    codemirror
  },
  data() {
    return {
      options: {
        tabSize: 2,
        mode: "text/javascript",
        theme: "material",
        lineNumbers: true,
        smartIndent: true,
        lineWrapping: true,
        autofocus: true
      }
    };
  },
  methods: {
    onSourceChange(source) {
      this.$emit('onChange', this.source);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
