import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';

export default class Menu extends SliderComponent {
  static className = 'slider__menu';

  private emitter: Emitter;

  private menuValueElementCh: HTMLInputElement;

  private menuRangeElementCh: HTMLInputElement;

  private selectedValueEl: HTMLInputElement;

  private selectedSecondValueEl: HTMLInputElement;

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
    this.menuRangeElementCh = new Dom('.slider__menu--range').$el as HTMLInputElement;
    this.selectedValueEl = new Dom('#selectedValue').$el as HTMLInputElement;
    this.selectedSecondValueEl = new Dom('#selectedSecondValue').$el as HTMLInputElement;

    if (this.menuValueElementCh.checked) {
      this.presenter.valueCheck(true);
    } else {
      this.presenter.valueCheck(false);
    }

    if (this.menuRangeElementCh.checked) {
      this.presenter.rangeCheck(true);
    } else {
      this.presenter.rangeCheck(false);
    }

    this.selectedValueEl.oninput = () => {
      this.presenter.selectValue(parseInt(this.selectedValueEl.value, 10));
    };

    this.selectedSecondValueEl.oninput = () => {
      this.presenter.selectValue(parseInt(this.selectedSecondValueEl.value, 10), true);
    };
  }

  toHTML(): string {
    return `
            <div class='slider__menu--item'>
            <input type='checkbox' class='slider__menu--value' id='value' checked><label for="checkbox">Показать значение</label>
            </div>
            <div class='slider__menu--item'>
            <label for="selectedValue">Значение:</label>
            <input type='number' class='slider__menu--selected-value' id='selectedValue'>
            </div>
            <div class='slider__menu--item'>
            <label for="selectedSecondValue">Макс. Значение:</label>
            <input type='number' class='slider__menu--selected-value' id='selectedSecondValue'>
            </div>
            <div class='slider__menu--item'>
            <label for="step">Шаг:</label>
            <input type='number' class='slider__menu--step' id='step'>
            </div>
            <div class='slider__menu--item'>
            <input type='checkbox' class='slider__menu--range' id='range' checked><label for="range">Диапазон</label>
            </div>
        `;
  }
}
