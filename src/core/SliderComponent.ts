import DomListener from "./DomListener";
import {Dom} from "./dom.ts";
import {IComponentOptions} from "../interfaces.ts";

export class SliderComponent extends DomListener {

    constructor($root: Dom, componentOptions: IComponentOptions) {
        super($root, componentOptions.listeners);
    }

    init() {
        this.initDomListeners()
    }

    toHTML(): string {
        return ''
    }

    changeHtml(html: string) {
        this.$root.html(html)
    }
}
