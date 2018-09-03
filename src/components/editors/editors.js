import JavascriptEditorComponent from "./js/js.vue";
import HTMLEditorComponent from "./html/html.vue";
import CSSEditorComponent from "./css/css.vue";
import OutputEditorComponent from "./output/output.vue";
import { EventBus } from '../event-bus.js';
import Auth from '../../services/auth';
import Gist from '../../services/gist';

//CodeMirror imports - modes
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";

//CodeMirror addon
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/fold/xml-fold.js";
import "codemirror/addon/edit/matchtags.js";
import "codemirror/addon/comment/comment.js";

import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/xml-hint.js";
import "codemirror/addon/hint/html-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/css-hint.js";

//CodeMirror themes
import "codemirror/addon/hint/show-hint.css";
import "codemirror/theme/material.css";

const STORAGE = {
  JS: "js",
  CSS: "css",
  HTML: "html"
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
      css: "",
      expandSourceType: "",
      autoRun: false,
      isLoggedIn: false
    };
  },

  mounted() {
    this.js = localStorage.getItem(STORAGE.JS);
    this.css = localStorage.getItem(STORAGE.CSS);
    this.html = localStorage.getItem(STORAGE.HTML);

    if (Auth.token) {
      Gist.get().then(res => {
        this.isLoggedIn = true;
      });
    } else if (window.location.search.length > 10) {
      Auth.code = window.location.search.split('?code=')[1];
      Auth.authenticate().then(res => {
        this.isLoggedIn = true;
      });
    }
  },

  methods: {

    onRunClicked(){
      EventBus.$emit('run');
    },

    onLoginClicked() {
      Auth.getToken();
    },

    onGistListClicked() {
      Gist.get().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      });
    },

    onSaveClicked() {
      let name = prompt('Enter project name');
      let body = {
        "description": name,
        "public": true,
        "files": {
          "index.html": {
            "content": this.html
          },
          "index.css": {
            "content": this.css
          },
          "index.js": {
            "content": this.js
          }
        }
      };

      Gist.create(body).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      });
    },

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
    },

    onExpandClicked(sourceType) {
      this.expandSourceType = sourceType;
    },

    onShrinkClicked() {
      this.expandSourceType = "";
    }
  }
};