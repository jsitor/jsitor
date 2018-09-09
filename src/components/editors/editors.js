import JavascriptEditorComponent from "./js/js.vue";
import HTMLEditorComponent from "./html/html.vue";
import CSSEditorComponent from "./css/css.vue";
import OutputEditorComponent from "./output/output.vue";
import { EventBus } from '../event-bus.js';

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
import projectsApi from "../../services/projects-api";
import { NAV_ACTIONS } from "../../app.constants";
import projectUtils from "../../services/project-utils";
import projectsStorage from "../../services/project-storage";

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
    // this.js = localStorage.getItem(STORAGE.JS);
    // this.css = localStorage.getItem(STORAGE.CSS);
    // this.html = localStorage.getItem(STORAGE.HTML);

    EventBus.$on(NAV_ACTIONS.SAVE, clickCount => {
      this.onSaveClicked();
    });

    this.onLoad();
  },

  methods: {

    onLoad() {
      let id = projectUtils.getId();
      projectsApi.get(id).then(res => {
        this.js = res.js;
        this.html = res.html;
        this.css = res.css;
        projectsStorage.set(res);
      }).catch(err => {
        console.log(err);
      });
    },

    onSaveClicked() {
      let project = projectsStorage.get();
      let body = {
        "id": projectUtils.getId(),
        "name": project.name,
        "html": this.html,
        "css": this.css,
        "js": this.js
      };

      projectsApi.update(body).then(res => {
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