import { Element } from "../elements";

export class CellElement extends Element  {
    name() {
        return getI18n('cell');
    }
    icon() {
        return 'fal fa-font';
    }

    isContainer() {
        return true;
    }

    canSelect() {
        return false;
    }

    canDelete() {
        return false;
    }

    canDuplicate() {
        return false;
    }

    getControls() {
        var element = this;
        var container = currentEditor.elementFactory(element.obj.closest('[builder-element="CellContainerElement"]'));

        return [
            
        ];
    }
}