import DomListener from './DomListener';
import { Dom } from './dom.ts';
import { IComponentOptions } from '../interfaces';
import Presenter from '../modules/presenter/Presenter.ts';

export class SliderComponent extends DomListener {
  presenter: Presenter;

  constructor(
    $root: Dom,
    componentOptions: IComponentOptions,
    presenter: Presenter
  ) {
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
