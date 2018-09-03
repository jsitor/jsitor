<template>
  <nav>
    <header>&lt;/&gt;</header>
    <ul>
      <li v-for="action in topNavActions" :key="action.event" @click="callback(action.event)" :title="action.tooltip">
        <span class="icon" :class="action.icon"></span>
        <span class="text">{{action.title}}</span>
      </li>
    </ul>

    <ul>
      <li v-for="action in bottomNavActions" :key="action.event" @click="callback(action.event)" :title="action.tooltip">
        <span class="icon" :class="action.icon"></span>
        <span class="text">{{action.title}}</span>
      </li>
    </ul>
  </nav>
</template>

<script src="./nav.js"></script>
<style scoped lang="scss" src="./nav.scss"></style>
