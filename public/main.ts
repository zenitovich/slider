import "../src/styles/style.scss";
import Slider from "../src/slider.ts";

const slider = new Slider("#app", {
  scaleData: { min: 1, max: 26, divisionValue: 6 },
});

slider.init();
