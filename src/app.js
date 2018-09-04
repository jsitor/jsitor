export default {
  name: 'App',

  mounted () {
    (function (d, script) {
      script = d.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://togetherjs.com/togetherjs-min.js";
      d.getElementsByTagName("head")[0].appendChild(script);
    })(document);
  }
};
