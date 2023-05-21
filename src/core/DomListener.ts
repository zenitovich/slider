export default class DomListener {
    $root: HTMLDivElement

    constructor($root: HTMLDivElement) {
        if (!$root) {
            throw new Error(`No $root provided for Domlistener`)
        }
        this.$root = $root
        console.log(this.$root)
    }
}
