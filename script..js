const screen = document.getElementById('screen');

function press(value) {
  // If screen is empty or shows "0" (and new value is a number or decimal), replace it
  if ((screen.value === '' || screen.value === '0') && /[\d.]/.test(value)) {
    screen.value = value;
  } 
  else if (value === '!') {
    screen.value = factorial(Number(screen.value));
  } 
  else {
    screen.value += value;
  }
}

function clearScreen() { 
  screen.value = ''; // Truly empty (no "0")
}

function calculate() {
  try { 
    screen.value = eval(screen.value); 
  }
  catch { 
    screen.value = 'Error'; 
  }
}

function toggleScientific() {
  document.getElementById('scientific').classList.toggle('active');
}

function factorial(n) {
  if (n < 0) return 'Error';
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  return f;
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
  // Don't set to '0' when empty - leave it blank
}