import '../src/styles/style.scss';
import Slider from '../src/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 10, max: 100, divisionValue: 9 },
});

slider.init();
