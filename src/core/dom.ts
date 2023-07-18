import { TEventName } from '@/interfaces.ts';

export class Dom {
  $el: HTMLElement | HTMLInputElement;

  constructor(selector: string) {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (el) {
      this.$el = el;
    } else {
      this.$el = document.createElement('div');
      this.$el.classList.add(selector);
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
