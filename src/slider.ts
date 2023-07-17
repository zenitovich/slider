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

  private $el: Dom;

  private readonly emitter: Emitter;

  constructor(selector: string, options: IOptions) {
    this.emitter = new Emitter();
    this.$el = new Dom(selector);
    this.model = new Model(this.emitter);
    this.presenter = new Presenter(this.model);
    this.view = new View(this.presenter, this.emitter, options);
    this.$el?.append(this.view.getRoot());
    this.model.setInitData(options);
  }
}
