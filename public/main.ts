import '@styles/style.scss';
import Slider from '@/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 90, max: 100, divisionValue: 10 },
  isRange: true,
});

console.log(slider);
