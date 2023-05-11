import "../src/styles/style.scss"
import Slider from "../src/slider";

let slider = new Slider('#app', {values: {min: 100, max: 150, initValue: 15}})

slider.init()

