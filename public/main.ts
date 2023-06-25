import '@styles/style.scss';
import Slider from '@/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 0, max: 100, divisionValue: 9 },
});

console.log(slider);
