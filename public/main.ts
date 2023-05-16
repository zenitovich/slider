import "../src/styles/style.scss"
import Slider from "../src/slider";
import Ruler from "../src/modules/view/components/Ruler.ts";

let slider = new Slider('#app', {scaleData: {min: 100, max: 150, initValue: 15}, components: [Ruler]})


slider.init()

