import '@styles/style.scss';
import Slider from '@/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 4, max: 24, divisionValue: 7 },
});

console.log(slider);
