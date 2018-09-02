<template>
  <nav>

    <header>&lt;/&gt;</header>

    <ul>

      <li @click="$emit('onRunClicked')" title="RUN">
        <span class="icon icon-play"></span>
      </li>

      <li onclick="TogetherJS(this); return false;" title="COLOBRATE">
        <span class="icon icon-user-plus"></span>
      </li>

      <li @click="$emit('onSaveClicked')" v-if="isLoggedIn" title="SAVE">
        <span class="icon icon-star"></span>
      </li>

      <li @click="$emit('onLoginClicked')" v-if="!isLoggedIn" title="LOGIN">
        <span class="icon icon-star"></span>
      </li>

      <li @click="$emit('onGistListClicked')" v-if="isLoggedIn" title="GIST LIST">
        <span class="icon icon-star"></span>
      </li>

      <!-- <li>
        <a href="https://github.com/jsitor/jsitor" target="_blank">
          <span class="icon icon-star"></span>
          <span class="text">Github</span>
        </a>
      </li> -->
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
  props: ['']
};
</script>

<style scoped lang="scss" src="./nav.scss"></style>
