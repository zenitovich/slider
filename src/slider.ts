import {IPresenter, ISlider, IView} from "./interfaces";
import View from "./modules/view/View";
import Presenter from "./modules/presenter/Presenter.ts";

export default class Slider implements ISlider {
    public view: IView
    public presenter: IPresenter
    public min: number
    public max: number
    constructor(min: number, max: number) {
        this.view = new View()
        this.presenter = new Presenter(100, 20000)
        this.min = min
        this.max = max
    }
    public init() {
        return this.view.toHtml()
    }
}
