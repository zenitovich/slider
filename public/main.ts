import '../src/styles/style.scss';
import Slider from '../src/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 100, max: 950, divisionValue: 7 },
});

slider.init();
