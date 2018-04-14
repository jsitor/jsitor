<template>
  <nav>
    <ul class="links">
      <li><span class="icon icon-play"></span></li>
      <li><span class="icon icon-grid"></span></li>
      <li><span class="icon icon-align-left"></span></li>
      <li><span class="icon icon-cog"></span></li>
      <li><span class="icon icon-plus"></span></li>
      <li><span class="icon icon-minus"></span></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">

$bg-color: #02a948;
nav {
  background: $bg-color;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;
  text-align: right;
  padding: 5px 0;
  border-radius: 5px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-block;

    li {
      padding: 5px 10px;

      &:hover{
        cursor: pointer;
        background: darken($bg-color, 5%);
      }
    }
  }
}
</style>
