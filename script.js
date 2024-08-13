function clock() {
  const time = document.getElementById('time');

  const now = new Date();
  let h = now.getHours().toString();
  let m = now.getMinutes().toString();
  if (h.length < 2) h = '0'+h
  if (m.length < 2) m = '0'+m

  if (7 < h < 22) {
    time.className = 'filled';
  } else {
    time.className = '';
  }
  time.innerHTML = h + ':' + m;
  setTimeout(clock, 10000);
}
clock();
