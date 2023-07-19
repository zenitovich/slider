import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';

export default class Menu extends SliderComponent {
  static className = 'slider__menu';

  private emitter: Emitter;

  menuValueElementCh: HTMLInputElement;

  menuRangeElementCh: HTMLInputElement;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'Menu', listeners: ['click'] }, presenter);
    this.emitter = emitter;
    console.log(this.emitter);
  }

  init() {
    super.init();
  }

  resize() {}

  onClick() {
    this.menuValueElementCh = new Dom('.slider__menu--value').$el as HTMLInputElement;
    if (this.menuValueElementCh.checked) {
      this.presenter.valueCheck(true);
    } else {
      this.presenter.valueCheck(false);
    }

    this.menuRangeElementCh = new Dom('.slider__menu--range').$el as HTMLInputElement;
    if (this.menuRangeElementCh.checked) {
      this.presenter.menuCheck(true);
    } else {
      this.presenter.menuCheck(false);
    }
  }

  toHTML(): string {
    return `
            <div class='slider__menu--item'>
            <input type='checkbox' class='slider__menu--value' id='value' checked><label for="checkbox">Значение</label>
            </div>
            <div class='slider__menu--item'>
            <input type='checkbox' class='slider__menu--range' id='range' checked><label for="range">Диапазон</label>
            </div>
        `;
  }
}
