export const EDITOR_OPTIONS = {
  autoCloseBrackets: true,
  tabSize: 2,
  theme: 'material',
  lineNumbers: true,
  smartIndent: true,
  lineWrapping: true,
  matchBrackets: true,
  viewportMargin: Infinity, //to support resize effect
  ctrl_z: 'undo',
  ctrl_y: 'redo',
  ctrl_bracket: 'highlight-brackets',
  extraKeys: {
    'Ctrl-Space': 'autocomplete'
  }
}


export const EDITOR_MODES = {

};

export const SOURCE_TYPES = {
  JS: 'js',
  HTML: 'html',
  CSS: 'css'
};