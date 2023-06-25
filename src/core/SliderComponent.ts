import DomListener from '@core/DomListener.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IComponentOptions } from '@/interfaces.ts';

export class SliderComponent extends DomListener {
  presenter: Presenter;

  constructor($root: Dom, componentOptions: IComponentOptions, presenter: Presenter) {
    super($root, componentOptions.listeners);
    this.presenter = presenter;
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }

  toHTML(): string {
    return '';
  }

  changeHtml(html: string) {
    this.$root.html(html);
  }
}
