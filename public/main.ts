import '@styles/style.scss';
import Slider from '@/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 2, max: 98, divisionValue: 8 },
  isRange: true,
});

console.log(slider);
