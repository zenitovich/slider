import {Dom} from "./dom";
import {capitalize} from "./utils";
import {IDomListenerEvents, TEventName, TMethodName} from "../interfaces";
import AbstractDom from "./abstractDom.ts";

export default // @ts-ignore
class DomListener extends AbstractDom {
    $root: Dom
    listeners: Array<TEventName>
    // onMousedown(event: Event): void {
    //     console.log(event)
    // }
    // onClick(event: Event): void {
    //     console.log(event)
    // }

    constructor($root: Dom, listeners: TEventName[] = []) {
        super()
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        this.listeners.forEach((listener: TEventName) => {
            const method = getMethodName(listener)
            //тоже самое что и addEventListener
            console.log(this)
            this.$root.on(listener, this[method as keyof IDomListenerEvents])
        })
    }

    removeDomListeners() {

    }
}

function getMethodName(eventName: TEventName): TMethodName {
    return 'on' + capitalize(eventName) as TMethodName
}
