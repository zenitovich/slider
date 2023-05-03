import "../src/styles/style.scss"
import Slider from "../src/slider";

let slider = new Slider('app', {min: 1, max: 2, init(): string {
    return '1'
    }})

// TODO: Переделать так:
// let slider = new Slider('#app', {
//   min: 123,
//   max: 123,
//   initValue: 55,
// })

slider.option.init()



