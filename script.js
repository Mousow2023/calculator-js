let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(sign) {
  if (sign === '+' || sign === '-' || sign === '*' || sign === '/') {
    calculation += ` ${sign} `;
  } else if (sign == 1 || sign == 2 || sign == 3 || sign == 4 || sign == 5 || sign == 6 || sign == 7 || sign == 8 || sign == 9 || sign == 0 || sign === '.') {
    calculation += `${sign}`;
  }

  localStorage.setItem('calculation', calculation);

  return calculation;

}

// display the calculation on the page
function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}