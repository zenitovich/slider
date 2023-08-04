import Emitter from '@core/Emitter.ts';
import { SliderComponent } from '@core/SliderComponent.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IScaleData } from '@/interfaces.ts';

export default class Ruler extends SliderComponent {
  static className = 'slider__ruler';

  private emitter: Emitter;

  private stringOfValues: string;

  private rulerLength: number;

  private rulerElement: HTMLElement;

  private rulerProgressBarElement: HTMLElement;

  private rulerSecondProgressBarElement: HTMLElement;

  private rangeCheck = true;

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
    this.emitter.subscribe('update: progressBar', (width: number) => this.changeProgressBarWidth(width));
    this.emitter.subscribe('update: secondProgressBar', (width: number) => this.changeSecondProgressBarWidth(width));
    this.emitter.subscribe('update: rangeButtonChecked', (check: boolean) => this.rangeChecked(check));
  }

  init() {
    super.init();
    this.findElements();
  }

  findElements() {
    this.rulerProgressBarElement = new Dom('.slider__ruler-progress-bar').$el;
    this.rulerSecondProgressBarElement = new Dom('.slider__ruler-second-progress-bar').$el;
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

  rangeChecked(check: boolean) {
    this.rangeCheck = check;
    if (!this.rangeCheck && this.rulerProgressBarElement) {
      this.rulerSecondProgressBarElement.style.width = '0';
      this.rulerProgressBarElement.style.width = '0';
    }
  }

  changeRuler(scaleData: IScaleData) {
    this.stringOfValues = this.rulerToString(scaleData.min, scaleData.max, scaleData.divisionValue);
    this.changeHtml(this.toHTML());
    this.findElements();
    if (this.rulerElement) {
      this.rulerLength = this.rulerElement.offsetWidth;
      const rulerCoords: DOMRect = this.rulerElement.getBoundingClientRect();
      const rulerCoordsX: number = rulerCoords.x;
      const rulerCoordsRight: number = rulerCoords.right;
      this.presenter.rulerCounter(this.rulerLength, rulerCoordsX, rulerCoordsRight);
    }
  }

  changeProgressBarWidth(width: number) {
    this.rulerProgressBarElement.style.width = `${width}%`;
    if (!this.rangeCheck) {
      this.rulerProgressBarElement.style.width = '0';
    }
  }

  changeSecondProgressBarWidth(width: number) {
    this.rulerSecondProgressBarElement.style.width = `${width}%`;
    if (!this.rangeCheck) {
      this.rulerSecondProgressBarElement.style.width = '0';
    }
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
    this.presenter.scaleClickHandler(event.pageX);
  }

  toHTML(): string {
    return `
            <div class='slider__ruler-second-progress-bar'></div>
            <div class='slider__ruler-progress-bar'></div>
            <div class="slider__ruler-value">${this.stringOfValues}</div>
            <div class="slider__ruler-range"></div>
        `;
  }
}
