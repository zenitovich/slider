import {IOptions, ISlider} from "./interfaces";
import View from "./modules/view/View";
import Presenter from "./modules/presenter/Presenter";
import Model from "./modules/model/Model";
import Emitter from "./core/Emitter";

export default class Slider implements ISlider {
    private view: View
    private readonly presenter: Presenter
    private readonly model: Model
    private $el: HTMLDivElement | null
    private readonly emitter: Emitter

    constructor(selector: string, options: IOptions) {
        this.emitter = new Emitter()
        this.$el = document.querySelector(selector)
        this.presenter = new Presenter()
        this.view = new View(this.presenter, this.emitter)
        this.$el?.append(this.view.getRoot())
        this.model = new Model({scaleData: options.scaleData}, this.emitter)
        console.log(this.model)
  }
}
