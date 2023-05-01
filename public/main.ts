import "../src/styles/style.scss"
import Slider from "../src/slider";
import Presenter from "../src/modules/presenter/Presenter.ts";

let slider = new Slider(new Presenter(0, 150))

// TODO: Переделать так:
// let slider = new Slider('#app', {
//   min: 123,
//   max: 123,
//   initValue: 55,
// })

slider.init()



