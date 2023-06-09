import { TEventName } from '@/interfaces.ts';

export class Dom {
  $el: HTMLElement | null;

  constructor(selector: string | HTMLElement) {
    if (typeof selector === 'string' && document.querySelector(selector) !== null) {
      this.$el = document.querySelector(selector);
    } else if (typeof selector === 'string' && document.querySelector(selector) === null) {
      this.$el = document.createElement('div');
      this.$el.classList.add(selector);
    } else {
      this.$el = selector as HTMLElement;
    }
  }

  html(html = '') {
    if (typeof html === 'string' && this.$el !== null) {
      this.$el.innerHTML = html;
      return this;
    }
    // трим удаляет лишние пробелы вначале и в конце
    return this.$el?.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on(eventType: TEventName, callback: (event: Event) => void) {
    this.$el?.addEventListener(eventType, callback);
  }

  off(eventType: TEventName, callback: (event: Event) => void) {
    this.$el?.removeEventListener(eventType, callback);
  }

  append(node: HTMLElement | null) {
    if (node) {
      this.$el?.append(node);
    }
    return this;
  }
}
