import {Dom} from "./dom.ts";

export default class DomListener {
    $root: Dom
    listeners: string[]

    constructor($root: Dom, listeners: string[] = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {

    }

    removeDomListeners() {

    }
}
