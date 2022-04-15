import { Element } from "../elements";

export class PageElement extends Element  {
    name() {
        return getI18n('block');
    }
    icon() {
        return 'fal fa-font';
    }

    isContainer() {
        return true;
    }

    isWrapper() {
        return true;
    }

    getControls() {
        var element = this;

        return [
            
        ];
    }
}
