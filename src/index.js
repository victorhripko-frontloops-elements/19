import './style.scss';

(() => {
  const slider = document.querySelector('.slider');
  const sliderValue = slider.querySelector('.slider__value');
  const sliderHandler = slider.querySelector('.slider__handler');

  const updateRange = () => {
    const val = sliderHandler.value;
    const percnetage = val / sliderHandler.max * 100;

    sliderValue.textContent = val;
    slider.style.setProperty('--value', `${percnetage}%`);
  }

  sliderHandler.addEventListener('input', updateRange);

  updateRange();

})();
