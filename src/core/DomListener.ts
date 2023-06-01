import { Dom } from "./dom";
import { capitalize } from "./utils";
import { TEventName, TMethodName } from "../interfaces";
import AbstractDom from "./abstractDom";

function getMethodName(eventName: TEventName): TMethodName {
  return `on${capitalize(eventName)}` as TMethodName;
}

export default class DomListener extends AbstractDom {
  $root: Dom;

  listeners: Array<TEventName>;

  constructor($root: Dom, listeners: TEventName[] = []) {
    super();
    if (!$root) {
      throw new Error("No $root provided for DomListener");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener: TEventName) => {
      const method = getMethodName(listener);
      this.$root.on(listener, this[method]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener: TEventName) => {
      const method: TMethodName = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
