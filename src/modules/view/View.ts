import Presenter from '@modules/presenter/Presenter.ts';
import Emitter from '@core/Emitter.ts';
import Ruler from '@modules/view/components/Ruler.ts';
import { Dom } from '@core/dom.ts';
import Point from '@modules/view/components/Point.ts';
import SecondPoint from '@modules/view/components/SecondPoint.ts';
import { IOptions, TComponent } from '@/interfaces.ts';

export default class View {
  private readonly presenter: Presenter;

  private readonly emitter: Emitter;

  components: TComponent[];

  constructor(presenter: Presenter, emitter: Emitter, options: IOptions) {
    this.components = options.isRange ? [Point, SecondPoint, Ruler] : [Point, Ruler];
    this.emitter = emitter;
    this.presenter = presenter;
  }

  resize(component: Ruler | Point | SecondPoint) {
    window.addEventListener(
      'resize',
      (event) => {
        console.log(event);
        component.resize();
      },
      true
    );
  }

  getRoot(): HTMLElement | null {
    const $root = new Dom('slider');

    this.components.map((Component: TComponent) => {
      const $el = new Dom(Component.className);
      const component = new Component(this.emitter, $el, this.presenter);
      this.resize(component);
      $el.html(component.toHTML());
      $root.append($el.$el);
      component.init();
      return component;
    });

    return $root.$el;
  }
}
