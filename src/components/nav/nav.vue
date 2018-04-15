<template>
  <nav>
    <span class="title"><b>&lt;</b>jsitorn/<b>&gt;</b></span>
    <ul class="links">
      <li onclick="TogetherJS(this); return false;">
        <span class="icon icon-user-plus"></span>
        <span class="text">Collobrate</span>
      </li>
      <!--<li>
        <span class="icon icon-play"></span>
        <span class="text">Run</span>
      </li>
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
};
</script>

<style scoped lang="scss">
$bg-color: #161d21;
nav {
  color: white;

  font-size: 14px;
  overflow: hidden;
  background: $bg-color;
  width: 100%;
  padding: 0 10px;
  border-bottom: 2px solid #0f1417;

  .title {
    line-height: 35px;
    padding: 0 10px;
    font-family: monospace;
    color: #FFEB3B;

    b {
      color: #FF5722;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: auto;
    float: right;
    display: flex;
    align-items: center;

    li {
      display: inline-block;
      color: lightgray;
      padding: 10px;
      height: 36px;

      .icon{
        vertical-align: top;
        height: inherit;
        display: inline-block;
      }

      .text{
        font-size: 12px;
        line-height: 14px;
        display: inline-block;
        vertical-align: top;
      }

      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #67ffb2;
      }

      &:active {
        background: darken($bg-color, 8%);
      }
    }
  }
}
</style>
