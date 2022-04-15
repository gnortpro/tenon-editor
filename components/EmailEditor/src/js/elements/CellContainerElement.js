// import { Element } from "../elements";

export class CellContainerElement {
    name() {
        return 'cell_container';
    }

    canSelect() {
        return false;
    }

    layoutToWidths(layout) {
        var nums = layout.split('-');
        var sum = nums.reduce((partial_sum, a) => parseInt(partial_sum) + parseInt(a), 0);
        var widths = [];

        nums.forEach(function(num) {
            widths.push(parseFloat(num)/parseFloat(sum) * 100);
        });

        return widths;
    }

    getControls() {
     
        return [
            
        ];
    }
}
