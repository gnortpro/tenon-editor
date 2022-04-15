import { Widget } from '../widgets.js';
export class TextWidget extends Widget {
  getHtmlId() {
    return 'TextWidget';
  }
  name() {
    return getI18n('text');
  }
  icon() {
    return 'fal fa-font';
  }

  getButtonHtml() {
    return "trong DB";
  }

  dropHtml() {
    return 'Trong DB';
  }
}

// window.TextWidget = TextWidget;
