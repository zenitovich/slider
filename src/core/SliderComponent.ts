import DomListener from "./DomListener";

export class SliderComponent extends DomListener {

    constructor($root: HTMLDivElement) {
        super($root);
    }

    toHTML(): string {
        return ''
    }

    changeHtml(html: string) {
        this.$root.innerHTML = html
    }
}
