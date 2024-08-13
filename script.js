function clock() {
  const time = document.getElementById('time');

  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();

  if (7 < h < 22) {
    time.className = 'filled';
  } else {
    time.className = '';
  }
  time.innerHTML = h + ':' + m;
  setTimeout(clock, 10000);
}
clock();
