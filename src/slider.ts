import View from '@modules/view/View.ts';
import Presenter from '@modules/presenter/Presenter.ts';
import Model from '@modules/model/Model.ts';
import Emitter from '@core/Emitter.ts';
import { Dom } from '@core/dom.ts';
import { IOptions } from '@/interfaces.ts';

export default class Slider {
  private view: View;

  private readonly presenter: Presenter;

  private readonly model: Model;

  private $root: Dom;

  private readonly emitter: Emitter;

  menuValueElementCh: HTMLInputElement;

  constructor(selector: string, options: IOptions) {
    this.emitter = new Emitter();
    this.$root = new Dom(selector);
    this.model = new Model(this.emitter);
    this.presenter = new Presenter(this.model);
    this.view = new View(this.presenter, this.emitter, options);
    this.$root?.append(this.view.getRoot());
    this.model.setInitData(options);
  }

  showValue() {
    this.presenter.valueCheck(true);
  }

  hideValue() {
    this.presenter.valueCheck(false);
  }

  showRange() {
    this.presenter.setRangeCheck(true);
  }

  hideRange() {
    this.presenter.setRangeCheck(false);
  }

  chooseValue(value: number) {
    this.presenter.selectValue(value);
  }

  chooseSecondValue(value: number) {
    this.presenter.selectValue(value, true);
  }

  chooseStepValue(value: number) {
    this.presenter.stepValueCounter(value);
  }
}
