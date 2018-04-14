<template>
  <div id="editor-output" class="editor output">
    <iframe id="iframe-output"></iframe>
  </div>
</template>

<script>
export default {
  props: ["css", "js", "html"],

  mounted() {
    this.document = document.getElementById(
      "iframe-output"
    ).contentWindow.document;
  },

  watch: {
    html() {
      this.write();
    },
    css() {
      this.write();
    },
    js() {
      this.write();
    }
  },

  methods: {
    write(){
      this.document.open();
      let htmlSource = this.html;
      htmlSource += `<style>${this.css}<\/style>`;
      htmlSource += `<script>${this.js}<\/script>`;
      this.document.write(htmlSource);
      this.document.close();
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
