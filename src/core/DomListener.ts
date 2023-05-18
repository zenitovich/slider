export default class DomListener {
    $root: string

    constructor($root: string) {
        if (!$root) {
            throw new Error(`No $root provided for Domlistener`)
        }
        this.$root = $root
        console.log(this.$root)
    }
}
