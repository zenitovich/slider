import {IOptions, ISlider, IView} from "./interfaces";
import View from "./modules/view/View";
import Presenter from "./modules/presenter/Presenter";
import Model from "./modules/model/Model";
import Emitter from "./core/Emitter";

// todo в интерфейсах
// interface IOption {
//   min: number,
//   max: number,
//   init: number
// }

export default class Slider implements ISlider {
    private view: IView
    private presenter: Presenter
    private model: Model
    private el: string
    private emitter: Emitter
    // public  model: IModel
  // TODO: Принимает так + тут все инициализации основных модулей приложения
    constructor(el: string, options: IOptions) {
        this.emitter = new Emitter()
        this.el = el
        this.presenter = new Presenter()
        this.view = new View(this.presenter, this.emitter)
        this.model = new Model({min: options.min, max: options.max, initValue: options.initValue}, this.emitter)
  }


    // constructor(presenter: Presenter) {
    //     this.presenter = presenter
    //     this.view = new View(this.presenter)
    //     console.log(presenter)
    // }
    public init() {
        return document.querySelector(this.el)!.append(this.view.addHtml())
    }
}
