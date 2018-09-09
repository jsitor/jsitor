<template>
  <BaseModalComponent @close="close()">
    <template slot="header"></template>

    <input autofocus placeholder="Enter project name..." v-model="name" type="text" minlength="10"/>

    <textarea placeholder="Enter project description..." v-model="description"></textarea>

    <template slot="footer">
      <button @click="create()">Create</button>
    </template>
  </BaseModalComponent>
</template>

<script src="./new-project.modal.js"></script>
