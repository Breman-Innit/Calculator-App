 const screen = document.getElementById('screen');

  function press(value) {
    if (value === '!') {
      screen.value = factorial(Number(screen.value));
    } else {
      screen.value += value;
    }
  }
  function clearScreen() { screen.value = ''; }
  function calculate() {
    try { screen.value = eval(screen.value); }
    catch { screen.value = 'Error'; }
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