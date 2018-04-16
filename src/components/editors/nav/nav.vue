<template>
  <nav>
    <span class="title">
      <b>&lt;/&gt;</b>
    </span>

    <ul class="links-source" v-show="sourceType !== ''">
      <li :class="{ active: sourceType === 'js'}" @click="$emit('onSourceTypeChange', 'js')">JS</li>
      <li :class="{ active: sourceType === 'css'}" @click="$emit('onSourceTypeChange', 'css')">CSS</li>
      <li :class="{ active: sourceType === 'html'}" @click="$emit('onSourceTypeChange', 'html')">HTML</li>
      <li :class="{ active: sourceType === 'output'}" @click="$emit('onSourceTypeChange', 'output')">Result</li>
    </ul>

    <ul class="links">

      <li @click="$emit('onRunClicked')">
        <span class="icon icon-play"></span>
        <span class="text">Run</span>
      </li>

      <li onclick="TogetherJS(this); return false;">
        <span class="icon icon-user-plus"></span>
        <span class="text">Collaborate</span>
      </li>

      <li>
        <a href="https://github.com/jsitor/jsitor" target="_blank">
          <span class="icon icon-star"></span>
          <span class="text">Github</span>
        </a>
      </li>
      <!--
      <li>
        <span class="icon icon-grid"></span>
        <span class="text">Layout</span>
      </li>
      <li>
        <span class="icon icon-align-left"></span>
        <span class="text">Tidy</span>
      </li>
      <li>
        <span class="icon icon-plus"></span>
        <span class="text">Font</span>
      </li>
      <li>
        <span class="icon icon-minus"></span>
        <span class="text">Font</span>
      </li>
      <li>
        <span class="icon icon-cog"></span>
        <span class="text">Settings</span>
      </li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['sourceType']
};
</script>

<style scoped lang="scss" src="./nav.scss"></style>
