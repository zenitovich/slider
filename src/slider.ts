import {IOptions, ISlider} from "./interfaces";
import View from "./modules/view/View";
import Presenter from "./modules/presenter/Presenter";
import Model from "./modules/model/Model";
import Emitter from "./core/Emitter";

export default class Slider implements ISlider {
    private view: View
    private presenter: Presenter
    private model: Model
    private el: string
    private emitter: Emitter

    constructor(el: string, options: IOptions) {
        this.emitter = new Emitter()
        this.el = el
        this.presenter = new Presenter()
        this.view = new View(this.presenter, this.emitter)
        this.model = new Model({scaleData: options.scaleData}, this.emitter)
        console.log(this.model)
  }

    public init() {
        return document.querySelector(this.el)!.append(this.view.addHtml())
    }
}
