import "../src/styles/style.scss"
import Slider from "../src/slider";

let slider = new Slider('#app', {scaleData: {min: 100, max: 150, initValue: 15}})
let sliderTwo = new Slider('#app', {scaleData: {min: 1, max: 84, initValue: 6}})

slider.init()
sliderTwo.init()

