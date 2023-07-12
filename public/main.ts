import '@styles/style.scss';
import Slider from '@/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 100, max: 200, divisionValue: 19 },
  isRange: true,
});

console.log(slider);
