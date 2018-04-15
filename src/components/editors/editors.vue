<template>
  <div class="editors">
    <JavascriptEditorComponent @onChange="onChangeJavascript" :source="js"></JavascriptEditorComponent>
    <HTMLEditorComponent @onChange="onChangeHTML" :source="html"></HTMLEditorComponent>
    <CSSEditorComponent @onChange="onChangeCSS"  :source="css"></CSSEditorComponent>
    <OutputEditorComponent :js="js" :css="css" :html="html"></OutputEditorComponent>
  </div>
</template>

<script>
import JavascriptEditorComponent from "./js/js.vue";
import HTMLEditorComponent from "./html/html.vue";
import CSSEditorComponent from "./css/css.vue";
import OutputEditorComponent from "./output/output.vue";

const STORAGE = {
  JS: 'js',
  CSS: 'css',
  HTML: 'html'
};

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

  mounted(){
    this.js = localStorage.getItem(STORAGE.JS);
    this.css = localStorage.getItem(STORAGE.CSS);
    this.html = localStorage.getItem(STORAGE.HTML);
  },

  methods: {
    onChangeJavascript(source) {
      this.js = source;
      localStorage.setItem(STORAGE.JS, this.js);
    },

    onChangeHTML(source) {
      this.html = source;
      localStorage.setItem(STORAGE.HTML, this.html);
    },

    onChangeCSS(source) {
      this.css = source;
      localStorage.setItem(STORAGE.CSS, this.css);
    }
  }
};
</script>

<style lang="scss">


$gray-darker: #4a4a4a;
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
      width: 100%;
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

    &:before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-right: 1px solid $gray-darker;
    }

    &:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid $gray-darker;
    }
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
