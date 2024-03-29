import { SliderComponent } from '@core/SliderComponent.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import { IPointData, IScaleData } from '@/interfaces.ts';

export default class Point extends SliderComponent {
  static className = 'slider__point';

  private emitter: Emitter;

  private pointElement: HTMLElement;

  private pointValueElement: HTMLElement;

  private zIndex: number;

  constructor(emitter: Emitter, $root: Dom, presenter: Presenter) {
    super($root, { name: 'Point', listeners: ['click', 'mousedown'] }, presenter);
    this.emitter = emitter;
    this.pointElement = this.$root.$el;
    this.emitter.subscribe('update:pointData', (pointData: IPointData) => this.changePoint(pointData));
    this.emitter.subscribe('update:pointZIndex', (zIndex: number) => this.zIndexChange(zIndex));
    this.emitter.subscribe('update: valueButtonChecked', (valueButtonChecked: boolean) => this.checkedUpdate(valueButtonChecked));
    this.emitter.subscribe('update:optionValues', (scaleData: IScaleData) => this.showInitValue(scaleData));
  }

  init() {
    super.init();
  }

  checkedUpdate(valueButtonChecked: boolean) {
    if (!valueButtonChecked) {
      this.pointValueElement.style.opacity = '0';
    } else {
      this.pointValueElement.style.opacity = 'inherit';
    }
  }

  showInitValue(scaleData: IScaleData) {
    this.pointValueElement = new Dom('.slider__point--value').$el;
    this.pointValueElement.innerHTML = `${scaleData.min}`;
  }

  zIndexChange(pointZIndex: number) {
    this.zIndex = pointZIndex;
    this.pointElement.style.zIndex = this.zIndex.toString();
  }

  changePoint(pointData: IPointData) {
    this.pointElement.style.left = `${pointData.pointPositionPercent}%`;
    this.pointValueElement.style.left = `${pointData.pointPositionPercent}%`;
    this.pointValueElement.innerHTML = pointData.value.toString();
  }

  resize() {}

  onMousedown() {
    this.presenter.pointZIndexCalc();

    document.onmousemove = (event: MouseEvent) => {
      this.presenter.coordsCounter(event.pageX);
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }

  toHTML(): string {
    return `
            <div class="slider__point--value"></div>
        `;
  }
}
