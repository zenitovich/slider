import Emitter from '@core/Emitter.ts';
import { SliderComponent } from '@core/SliderComponent.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IScaleData } from '@/interfaces.ts';

export default class Ruler extends SliderComponent {
  static className = 'slider__ruler';

  private emitter: Emitter;

  stringOfValues: string;

  rulerLength: number;

  rulerElement: HTMLElement | null;

  rulerRangeElement: HTMLElement | null;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super(
      $root,
      {
        name: 'Ruler',
        listeners: ['click'],
      },
      presenter
    );
    this.emitter = emitter;
    this.stringOfValues = '';
    this.rulerElement = this.$root.$el;
    this.emitter.subscribe('update:optionValues', (scaleData: IScaleData) => this.changeRuler(scaleData));
  }

  rulerToString(min: number, max: number, divisionValue: number) {
    const arr: number[] = [min];
    const range = max - min;
    const interval = range / (divisionValue + 1);

    let str = '';

    for (let i = 1; i <= divisionValue; i += 1) {
      const split = Math.round(min + interval * i);
      arr.push(split);
    }

    arr.push(max);
    arr.forEach((el) => {
      str += `<div class="slider__ruler-value--item">${el}</div>`;
    });
    return str;
  }

  changeRuler(scaleData: IScaleData) {
    this.stringOfValues = this.rulerToString(scaleData.min, scaleData.max, scaleData.divisionValue);
    this.changeHtml(this.toHTML());
    if (this.rulerElement) {
      this.rulerLength = this.rulerElement.offsetWidth;
      const rulerCoords: DOMRect = this.rulerElement.getBoundingClientRect();
      const rulerCoordsX: number = rulerCoords.x;
      const rulerCoordsRight: number = rulerCoords.right;
      this.presenter.rulerCounter(this.rulerLength, rulerCoordsX, rulerCoordsRight);
    }
    this.rulerRangeElement = document.querySelector('.slider__ruler-range');

    console.log(this.$root.$el);
  }

  resize() {
    if (this.rulerElement) {
      this.rulerLength = this.rulerElement.offsetWidth;
      const rulerCoords: DOMRect = this.rulerElement.getBoundingClientRect();
      const rulerCoordsX: number = rulerCoords.x;
      const rulerCoordsRight: number = rulerCoords.right;
      this.presenter.rulerCounter(this.rulerLength, rulerCoordsX, rulerCoordsRight);
    }
  }

  onClick(event: MouseEvent) {
    console.log('Ruler onClick', event);
    this.presenter.mousePositionCalc(event.pageX);
  }

  toHTML(): string {
    return `
            <div class="slider__ruler-value">${this.stringOfValues}</div>
            <div class="slider__ruler-range"></div>
        `;
  }
}
