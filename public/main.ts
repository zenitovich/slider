import "../src/styles/style.scss";
import Slider from "../src/slider.ts";

const slider = new Slider("#app", {
  scaleData: { min: 100, max: 150, divisionValue: 15 },
});

slider.init();
