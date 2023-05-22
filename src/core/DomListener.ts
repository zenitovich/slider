import {Dom} from "./dom.ts";

export default class DomListener {
    $root: Dom

    constructor($root: Dom) {
        if (!$root) {
            throw new Error(`No $root provided for Domlistener`)
        }
        this.$root = $root
        console.log(this.$root)
    }
}
