import DomListener from "./DomListener";
import {Dom} from "./dom.ts";

export class SliderComponent extends DomListener {

    constructor($root: Dom) {
        super($root);
    }

    toHTML(): string {
        return ''
    }

    changeHtml(html: string) {
        this.$root.html(html)
        // this.$root.innerHTML = html
    }
}
