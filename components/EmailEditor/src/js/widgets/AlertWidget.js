import { Widget } from '../widgets.js';

export class AlertWidget extends Widget {
  getHtmlId() {
    return 'AlertWidget';
  }
  name() {
    return 'Alert Widget';
  }
  icon() {
    return 'fal fa-font';
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
                <div class="body__title">Alerts</div>
            </div>
        </div>
    `);
  }

  dropHtml() {
    return `
    <table class="example w-full"><tr><td class="bg-blue-500 text-white rounded" style="padding: 16px 32px;"><table class="example w-full"><tr><td class="text-lg block lg:table-cell w-full pb-4 lg:pb-0 text-center lg:text-left lg:w-8/12">
      📢 We have some big news for you!
    </td><td class="block lg:table-cell w-full lg:w-4/12"><table class="example mx-auto lg:m-0"><tr><th class="bg-white hover:bg-blue-50 text-blue-500 text-center rounded"><button class="w-full text-sm font-bold leading-full no-underline" style="padding: 12px 40px;">Learn more</button></th></tr></table></td></tr></table></td></tr></table>
    `;
  }
}

// window.TextWidget = TextWidget;
