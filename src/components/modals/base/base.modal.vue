<template>
  <form class="modal" @click="$emit('close')">
    <div class="modal-inner" @click="preventDefault($event)">

      <div class="modal-header">
        <slot name="header"></slot>
      </div>

      <div class="modal-body">
        <slot></slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <button class="secondary" @click="$emit('close')">Close</button>
        </slot>
      </div>
    </div>
  </form>
</template>

<script src="./base.modal.js"></script>
<style src="./base.modal.scss" lang="scss"></style>


