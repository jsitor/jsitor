<script src="./editors.js"></script>
<style lang="scss" src="./editors.scss"></style>

<template>
  <div class="editors">
    <Split ref="split1" :gutterSize="2">
      <SplitArea :size="50">
        <Split :gutterSize="2" direction="vertical">
          <SplitArea :size="50" :minSize="150">
            <!--HTML-->
            <HTMLEditorComponent
              @onChange="onChangeHTML"
              @onExpandClicked="onExpandClicked"
              @onShrinkClicked="onShrinkClicked"
              :expandSourceType="expandSourceType"
              :source="html">
            </HTMLEditorComponent>

          </SplitArea>
          <SplitArea :size="50" :minSize="150">
            <!--CSS-->
            <CSSEditorComponent
              @onChange="onChangeCSS"
              @onExpandClicked="onExpandClicked"
              @onShrinkClicked="onShrinkClicked"
              :expandSourceType="expandSourceType"
              :source="css">
            </CSSEditorComponent>

          </SplitArea>
        </Split>
      </SplitArea>
      <SplitArea :size="50">
        <Split :gutterSize="2" direction="vertical">
          <SplitArea :size="50" :minSize="150">
            <!--JS-->
            <JavascriptEditorComponent
              @onChange="onChangeJavascript"
              @onExpandClicked="onExpandClicked"
              @onShrinkClicked="onShrinkClicked"
              :expandSourceType="expandSourceType"
              :source="js">
            </JavascriptEditorComponent>

          </SplitArea>
          <SplitArea :size="50" :minSize="150">
            <!--Output/Result-->
            <OutputEditorComponent
              :js="js"
              :css="css"
              :html="html"
              @onExpandClicked="onExpandClicked"
              @onShrinkClicked="onShrinkClicked"
              :expandSourceType="expandSourceType">
            </OutputEditorComponent>

          </SplitArea>
        </Split>
      </SplitArea>
    </Split>
  </div>
</template>
