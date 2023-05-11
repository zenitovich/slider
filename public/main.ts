import "../src/styles/style.scss"
import Slider from "../src/slider";

let slider = new Slider('#app', {values: {min: 100, max: 150, initValue: 15}})
// let slider = new Slider('#app', {min: 100, max: 150, initValue: 15})
// let sliderTwo = new Slider('#app', {min: 10, max: 24, initValue: 4})

// TODO: Переделать так:
// let slider = new Slider('#app', {
//   min: 123,
//   max: 123,
//   initValue: 55,
// })

slider.init()
// sliderTwo.init()
