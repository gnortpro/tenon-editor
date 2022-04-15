class TextElement extends SuperElement {
  name() {
    return getI18n('text');
  }

  getControls() {
    var element = this;

    return [
      new TextControl(getI18n('text'), element.obj.html(), function (text) {
        element.obj.html(text);
      }),
    ];
  }
}

window.TextElement = TextElement;
