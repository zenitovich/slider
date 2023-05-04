import "../src/styles/style.scss"
import Slider from "../src/slider";

let slider = new Slider('#app', {min: 1, max: 2,})

// TODO: Переделать так:
// let slider = new Slider('#app', {
//   min: 123,
//   max: 123,
//   initValue: 55,
// })

slider.init()

slider.init()

function riceValue (min: number, max: number, value: number) {
    let num = max - min
    let interval = num / (value + 1)
    for (let i = 0; i < value; i+1) {
        return min + (interval * i)
    }
}

console.log(riceValue(2, 10, 3))