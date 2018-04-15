<template>
  <div id="editor-html" class="editor">
    <header>
      <span class="icon-hash"></span> HTML
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

import "codemirror/mode/xml/xml.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";

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
        mode: "text/html",
        theme: "material",
        lineNumbers: true,
        htmlMode: true,
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
