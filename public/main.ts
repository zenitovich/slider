import '../src/styles/style.scss';
import Slider from '../src/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 6, max: 100, divisionValue: 20 },
});

console.log(slider);
