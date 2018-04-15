<template>
  <nav>
    <ul class="links">
      <li><span class="icon icon-user-plus" onclick="TogetherJS(this); return false;"></span></li>
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
  color: white;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  text-align: right;
  border-radius: 5px;
  overflow: hidden;
  background: $bg-color;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: auto;

    li {
      padding: 5px 10px;
      float: left;
      height: 26px;

      &:hover{
        cursor: pointer;
        background: darken($bg-color, 5%);
      }

      &:active{
        background: darken($bg-color, 8%);
      }
    }
  }
}
</style>
