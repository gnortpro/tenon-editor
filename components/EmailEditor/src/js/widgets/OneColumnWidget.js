import { Widget } from "../widgets";

export class OneColumnWidget extends Widget {
    getHtmlId() {
        return "OneColumnWidget";
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
                    <div class="body__title">One Columns</div>
                </div>
            </div>
        `);

        // default content html
        this.setContentHtml(`
        <table id="${this.id}" class="sm:w-full" builder-element="CellContainerElement">
            <tr>
                <td class="w-12/12" builder-element="CellElement">
                </td>
            </tr>
        </table>
        `);

        // default dragging html
        this.setDraggingHtml(this.getButtonHtml());
    }

    getCellContainerElement() {
        return currentEditor.getIframeContent().find('#' + this.id);
    }

    drop() {
        // after drop
    }
}