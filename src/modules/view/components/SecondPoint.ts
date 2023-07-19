import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IPointData, IScaleData } from '@/interfaces.ts';

export default class SecondPoint extends SliderComponent {
  static className = 'slider__secondPoint';

  private emitter: Emitter;

  private pointElement: HTMLElement;

  private pointValueElement: HTMLElement;

  private zIndex: number;

  private valueCheck: boolean;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'SecondPoint', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:secondPointData', (pointData: IPointData) => this.changePoint(pointData));
    this.emitter.subscribe('update:secondPointZIndex', (zIndex: number) => this.zIndexChange(zIndex));
    this.emitter.subscribe('update: valueButtonChecked', (valueButtonChecked: boolean) => this.valueCheckedUpdate(valueButtonChecked));
    this.emitter.subscribe('update:optionValues', (scaleData: IScaleData) => this.showInitValue(scaleData));
    this.emitter.subscribe('update: rangeButtonChecked', (rangeCheck: boolean) => this.rangeCheckedUpdate(rangeCheck));
  }

  init() {
    super.init();
    this.presenter.secondValueInit(true);
  }

  rangeCheckedUpdate(check: boolean) {
    if (!check) {
      this.$root.$el.style.opacity = '0';
      this.pointValueElement.style.opacity = '0';
      this.presenter.secondValueInit(false);
    } else {
      this.$root.$el.style.opacity = 'inherit';
      if (this.valueCheck) {
        this.pointValueElement.style.opacity = 'inherit';
      }
      this.presenter.secondValueInit(true);
    }
  }

  valueCheckedUpdate(valueButtonChecked: boolean) {
    this.valueCheck = valueButtonChecked;
    if (!this.valueCheck) {
      this.pointValueElement.style.opacity = '0';
    } else {
      this.pointValueElement.style.opacity = 'inherit';
    }
  }

  showInitValue(scaleData: IScaleData) {
    this.pointValueElement = new Dom('.slider__secondPoint--value').$el;
    this.pointValueElement.innerHTML = `${scaleData.max}`;
  }

  zIndexChange(pointZIndex: number) {
    this.zIndex = pointZIndex;
    this.pointElement.style.zIndex = this.zIndex.toString();
  }

  changePoint(pointData: IPointData) {
    this.pointElement.style.left = `${pointData.secondPointPositionPercent}%`;
    this.pointValueElement.style.left = `${pointData.secondPointPositionPercent}%`;
    this.pointValueElement.innerHTML = pointData.secondValue.toString();
  }

  resize() {}

  onMousedown() {
    this.presenter.secondPointZIndexCalc();
    document.onmousemove = (event: MouseEvent) => {
      this.presenter.coordsCounter(event.pageX, true);
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }

  toHTML(): string {
    return `
            <div class="slider__secondPoint--value"></div>
        `;
  }
}
