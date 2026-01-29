const form = document.querySelector('form');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const generatedNumber = document.querySelector('.genaratedNumber');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const minNumberValue = Number(minNum.value);
  const maxNumberValue = Number(maxNum.value);

  generatedNumber.textContent = generateRandomNumber(minNumberValue, maxNumberValue);
});
