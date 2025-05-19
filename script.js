let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearAll() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/x/g, '*'));
  } catch {
    display.innerText = 'Bro, use it corectly!';
  }
}

window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('splash').style.opacity = '0';
      setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
      }, 500);
    }, 2500); // show for 2.5 seconds
  });