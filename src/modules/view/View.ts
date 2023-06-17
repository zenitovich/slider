import { TComponent } from '../../interfaces.ts';
import Presenter from '../presenter/Presenter.ts';
import Emitter from '../../core/Emitter.ts';
import Ruler from './components/Ruler.ts';
import { Dom } from '../../core/dom';
import Point from './components/Point.ts';

export default class View {
  private readonly presenter: Presenter;

  private readonly emitter: Emitter;

  components: TComponent[];

  // массив с нашими классами
  componentsInstance: (Ruler | Point)[];

  constructor(presenter: Presenter, emitter: Emitter) {
    this.components = [Point, Ruler];
    this.emitter = emitter;
    this.presenter = presenter;
  }

  resize() {
    window.addEventListener(
      'resize',
      (event) => {
        console.log(event);
      },
      true
    );
  }

  getRoot(): HTMLElement | null {
    const $root = new Dom('slider');

    this.componentsInstance = this.components.map((Component: TComponent) => {
      const $el = new Dom(Component.className);
      const component = new Component(this.emitter, $el, this.presenter);
      $el.html(component.toHTML());
      $root.append($el.$el);
      component.init();
      return component;
    });

    return $root.$el;
  }
}
