import '@styles/style.scss';
import Slider from '@/slider.ts';

const slider = new Slider('#app', {
  scaleData: { min: 0, max: 10, divisionValue: 9 },
  isRange: true,
});

const menu = document.querySelector('.menu') as HTMLElement;

menu.onclick = () => {
  const menuValueElementCh = document.querySelector('.menu--value') as HTMLInputElement;
  const menuRangeElementCh = document.querySelector('.menu--range') as HTMLInputElement;
  const selectedValueEl = document.querySelector('#selectedValue') as HTMLInputElement;
  const selectedSecondValueEl = document.querySelector('#selectedSecondValue') as HTMLInputElement;
  const stepValueEl = document.querySelector('.menu--step') as HTMLInputElement;

  if (menuValueElementCh.checked) {
    slider.showValue();
  } else {
    slider.hideValue();
  }

  if (menuRangeElementCh.checked) {
    slider.showRange();
  } else {
    slider.hideRange();
  }

  selectedValueEl.oninput = () => {
    slider.chooseValue(parseInt(selectedValueEl.value, 10));
  };

  selectedSecondValueEl.oninput = () => {
    slider.chooseSecondValue(parseInt(selectedSecondValueEl.value, 10));
  };

  stepValueEl.oninput = () => {
    slider.chooseStepValue(parseInt(stepValueEl.value, 10));
  };
};
