<template>
  <div class="editors">
    <JavascriptEditorComponent @onChange="onChangeJavascript"></JavascriptEditorComponent>
    <HTMLEditorComponent @onChange="onChangeHTML"></HTMLEditorComponent>
    <CSSEditorComponent @onChange="onChangeCSS"></CSSEditorComponent>
    <OutputEditorComponent :js="js" :css="css" :html="html"></OutputEditorComponent>
  </div>
</template>

<script>
import JavascriptEditorComponent from "./js/js.vue";
import HTMLEditorComponent from "./html/html.vue";
import CSSEditorComponent from "./css/css.vue";
import OutputEditorComponent from "./output/output.vue";

export default {
  components: {
    JavascriptEditorComponent,
    HTMLEditorComponent,
    CSSEditorComponent,
    OutputEditorComponent
  },

  data() {
    return {
      js: "",
      html: "",
      css: ""
    };
  },

  methods: {
    onChangeJavascript(source) {
      this.js = source;
    },

    onChangeHTML(source) {
      this.html = source;
    },

    onChangeCSS(source) {
      this.css = source;
    }
  }
};
</script>

<style lang="scss">
.editors {
  height: 100%;
  display: grid;
  grid-template-areas:
    "js css"
    "html output";

  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;

  .editor {
    border-color: lightgray;
    border-style: solid;
    border-width: 0;
    position: relative;
    width: inherit;

    header {
      font-size: 12px;
      padding: 10px;
      position: absolute;
      z-index: 10;
      color: lightgray;
    }

    .vue-codemirror {
      height: 100%;
      padding-top: 36px;
      background: #263238;

      .CodeMirror {
        height: 100%;
        background: transparent;
        box-shadow: none;

        .CodeMirror-linenumber{
          color: #4a4a4a;
          text-shadow: none;
        }

        .CodeMirror-gutters {
          background: transparent;
          box-shadow: none;
          border: 0;
        }
      }
    }
  }

  #editor-js {
    grid-area: js;
  }

  #editor-css {
    grid-area: css;
  }

  #editor-html {
    grid-area: html;
  }

  #editor-output {
    grid-area: output;
  }
}
</style>
