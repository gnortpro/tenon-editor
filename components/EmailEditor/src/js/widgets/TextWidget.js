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

  dropHtml() {
    return 'Trong DB';
  }

  init() {
    // default button html
    this.setButtonHtml(`
        <div class="_1content widget-text">
            <div class="panel__body woo-panel__body">
                <div class="image-drag">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 53"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect x="1" y="1" width="27" height="51" rx="4.3" style="fill:#e2e1e2;stroke:#b7b7b8;stroke-miterlimit:10;stroke-width:2px"/><rect x="32" y="1" width="45" height="51" rx="4.3" style="fill:#e2e1e2;stroke:#b7b7b8;stroke-miterlimit:10;stroke-width:2px"/></g></g></svg>
                    </div>
                </div>
                <div class="body__title">Button</div>
            </div>
        </div>
    `);
  }

  getContentHtml () {
    return `
      <a href="https://maizzle.com/" class="inline-block py-16 px-24 text-sm leading-none no-underline text-white font-semibold rounded bg-indigo-500 hover:bg-indigo-600">
        <span style="mso-text-raise: 13pt;">Read more</span>
      </a>
    `;
  }

  dropHtml() {
    return `
      <a href="https://maizzle.com/" class="inline-block py-16 px-24 text-sm leading-none no-underline text-white font-semibold rounded bg-indigo-500 hover:bg-indigo-600">
        <span style="mso-text-raise: 13pt;">Read more</span>
      </a>
    `;
  }
}

// window.TextWidget = TextWidget;
