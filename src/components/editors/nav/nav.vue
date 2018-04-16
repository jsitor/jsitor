<template>
  <nav>
    <span class="title"><b>&lt;</b>/<b>&gt;</b></span>
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
export default {};
</script>

<style scoped lang="scss" src="./nav.scss"></style>
