<template>
  <div class="aside">
    <header>
      <div class="left">
        <i class="icon icon-book"></i>
        <span>Projects</span>
      </div>

      <div class="right">
        <i class="icon icon-plus"></i>
      </div>
    </header>

    <ul>
      <li v-for="(file, index) in files" :key="index">
        <i class="icon icon-file"></i>
        <span>{{file.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script src="./aside.js"></script>
<style scoped lang="scss" src="./aside.scss"></style>
