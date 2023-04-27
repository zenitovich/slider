import {ISlider, IView} from "./interfaces";
import View from "./modules/view/View";

export default class Slider implements ISlider {
    view: IView = new View()
    init() {
        return this.view.html()
    }
}
