<script src="./editors.js"></script>
<style lang="scss" src="./editors.scss"></style>

<template>
  <div class="editors">
    <NavComponent
      :sourceType="expandSourceType"
      @onSourceTypeChange="onExpandClicked"
      @onRunClicked="onRunClicked">
    </NavComponent>

    <div class="editors-content" :class="expandSourceType">

      <JavascriptEditorComponent
        @onChange="onChangeJavascript"
        @onExpandClicked="onExpandClicked"
        @onShrinkClicked="onShrinkClicked"
        :expandSourceType="expandSourceType"
        :source="js">
      </JavascriptEditorComponent>

      <HTMLEditorComponent
        @onChange="onChangeHTML"
        @onExpandClicked="onExpandClicked"
        @onShrinkClicked="onShrinkClicked"
        :expandSourceType="expandSourceType"
        :source="html">
      </HTMLEditorComponent>

      <CSSEditorComponent
        @onChange="onChangeCSS"
        @onExpandClicked="onExpandClicked"
        @onShrinkClicked="onShrinkClicked"
        :expandSourceType="expandSourceType"
        :source="css">
      </CSSEditorComponent>

      <OutputEditorComponent
        :js="js"
        :css="css"
        :html="html"
        @onExpandClicked="onExpandClicked"
        @onShrinkClicked="onShrinkClicked"
        :expandSourceType="expandSourceType">
      </OutputEditorComponent>
    </div>
  </div>
</template>
