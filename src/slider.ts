import {ISlider, IView} from "./interfaces";
import View from "./modules/view/View";
import Presenter from "./modules/presenter/Presenter.ts";

export default class Slider implements ISlider {
    public view: IView
    public presenter: Presenter
    constructor(presenter: Presenter) {
        this.presenter = presenter
        this.view = new View(this.presenter)
        console.log(presenter)
    }
    public init() {
        return this.view.toHtml()
    }
}
