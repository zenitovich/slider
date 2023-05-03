import {IOption, ISlider, IView} from "./interfaces";
import View from "./modules/view/View";
import Presenter from "./modules/presenter/Presenter.ts";
import Model from "./modules/model/Model";

// todo в интерфейсах
// interface IOption {
//   min: number,
//   max: number,
//   init: number
// }

export default class Slider implements ISlider {
    public view: IView
    public presenter: Presenter
    public el: string
    public model: Model
    public option: IOption

    // public  model: IModel
  // TODO: Принимает так + тут все инициализации основных модулей приложения
    constructor(el: string, option: IOption) {
        this.option = option;
        this.el = el
        this.model = new Model(this.option.min, this.option.max)
        this.presenter = new Presenter(this.model,  this.option)
        this.view = new View(this.presenter)
  }

    // constructor(presenter: Presenter) {
    //     this.presenter = presenter
    //     this.view = new View(this.presenter)
    //     console.log(presenter)
    // }
    // public init() {
    //     return this.view.toHtml()
    // }
}
