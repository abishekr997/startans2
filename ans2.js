New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
const goalPercentage = 40; 
const gauge = document.querySelector('.gauge');
const percentageDisplay = document.querySelector('.percentage-display');

gauge.style.background = `conic-gradient(#ffcc00 0% ${goalPercentage}%, #ddd ${goalPercentage}% 100%)`;
percentageDisplay.textContent = `${goalPercentage}%`;

