import { Dom } from '@core/dom.ts';
import { capitalize } from '@core/utils.ts';
import AbstractDom from '@core/abstractDom.ts';
import { TEventName, TMethodName } from '@/interfaces';

function getMethodName(eventName: TEventName): TMethodName {
  return `on${capitalize(eventName)}` as TMethodName;
}

export default class DomListener extends AbstractDom {
  $root: Dom;

  listeners: Array<TEventName>;

  constructor($root: Dom, listeners: TEventName[] = []) {
    super();
    if (!$root) {
      throw new Error('No $root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener: TEventName) => {
      const method: TMethodName = getMethodName(listener);
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener: TEventName) => {
      const method: TMethodName = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
