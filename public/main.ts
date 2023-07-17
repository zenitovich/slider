import '@styles/style.scss';
import Slider from '@/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 10, max: 50, divisionValue: 7 },
  isRange: true,
});

console.log(slider);
