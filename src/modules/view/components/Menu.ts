import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';

export default class Menu extends SliderComponent {
  static className = 'slider__menu';

  private emitter: Emitter;

  menuValueElementCh: HTMLInputElement;

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
      console.log('yep');
    }
  }

  toHTML(): string {
    return `
            <div class='slider__menu--item'>
            <input type='checkbox' class='slider__menu--value' id='value'><label for="checkbox">Значение</label>
            </div>
            <div class='slider__menu--item'>
            <input type='checkbox' class='slider__menu--range' id='range'><label for="range">Диапазон</label>
            </div>
<!--            <div class="slider__menu&#45;&#45;value">-->
<!--            Value:<div class="slider__menu&#45;&#45;value-btn"></div>-->
<!--            </div>-->
<!--            <div class="slider__menu&#45;&#45;range">-->
<!--            Range:<div class="slider__menu&#45;&#45;range-btn"></div>-->
<!--            </div>-->
        `;
  }
}
