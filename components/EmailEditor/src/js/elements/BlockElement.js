import { Element } from "../elements";

export class BlockElement extends Element  {
    name() {
        return getI18n('block');
    }
    icon() {
        return 'fal fa-font';
    }

    isDraggable() {
        return true;
    }

    getControls() {
        var element = this;

        return [
            
        ];
    }
}
