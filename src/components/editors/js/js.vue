<template>
  <div id="editor-js" class="editor">
    <header>
      <span class="icon-hash"></span> JavaScript
      <span v-show="expandSourceType !== 'js'" class="right icon-maximize-2" @click="$emit('onExpandClicked', 'js')"></span>
      <span v-show="expandSourceType === 'js'" class="right icon-minimize-2" @click="$emit('onShrinkClicked')"></span>
    </header>
    <codemirror
      v-model="localSource"
      :options="options"
      @input="onSourceChange">
    </codemirror>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import { EDITOR_OPTIONS } from "../editors.consts";

export default {
  props: ['source', 'expandSourceType'],
  components: {
    codemirror
  },
  data() {
    return {
      localSource: '',
      options: Object.assign({}, EDITOR_OPTIONS, {
        mode: "text/javascript",
        autofocus: true
      })
    };
  },

  watch: {
    source(newValue) {
      this.localSource = newValue;
    }
  },
  methods: {
    onSourceChange(source) {
      this.$emit('onChange', source);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
