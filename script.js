document.addEventListener('DOMContentLoaded', function () {
    const numberSlider = document.getElementById('numberSlider');
    const displayedNumber = document.getElementById('displayedNumber');
  
    numberSlider.addEventListener('input', function () {
      displayedNumber.textContent = numberSlider.value;
    });
  });
  