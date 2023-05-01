import "../src/styles/style.scss"
import Slider from "../src/slider";
import Presenter from "../src/modules/presenter/Presenter.ts";

let slider = new Slider(new Presenter(0, 126))

slider.init()



