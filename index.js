let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach((display) => {
  let startValue = 0;
  let endValue = parseInt(display.getAttribute('data-val'));
  let increment = Math.max(Math.floor(endValue / (interval / 200)), 1);
  let duration = 100;
  let counter = setInterval(()=>{
    startValue += increment;
    if(startValue >= endValue){
      clearInterval(counter);
      startValue = endValue;
    }
    display.textContent = `+${startValue}`;
  }, duration);
});