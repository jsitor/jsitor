export default {
  name: "App",

  mounted() {
    (function(d, script) {
      script = d.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://togetherjs.com/togetherjs-min.js";
      d.getElementsByTagName("head")[0].appendChild(script);
    })(document);

    // (function(d, script) {
    //   script = d.createElement("script");
    //   script.type = "text/javascript";
    //   script.async = true;
    //   script.onload = function() {
    //     var config = {
    //       apiKey: "AIzaSyAlWjxUumcTjv9xZbqoqlfzVcRrkDGmN2I",
    //       authDomain: "jsitor-editor.firebaseapp.com",
    //       databaseURL: "https://jsitor-editor.firebaseio.com",
    //       projectId: "jsitor-editor",
    //       storageBucket: "jsitor-editor.appspot.com",
    //       messagingSenderId: "727587570124"
    //     };
    //     firebase.initializeApp(config);
    //   };
    //   script.src = "https://www.gstatic.com/firebasejs/5.4.2/firebase.js";
    //   d.getElementsByTagName("head")[0].appendChild(script);
    // })(document);
  }
};